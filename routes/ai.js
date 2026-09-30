import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const INVOKE_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const STREAM = false;

// ── Agent system prompts (backend config — never exposed to the client) ──
const SYSTEM_PROMPTS = {

coding: `You are a friendly and patient coding tutor for absolute beginners learning full-stack web development.
Your style:
- Always write code with clear, beginner-friendly comments explaining every line
- Use simple language, avoid jargon — if you must use a term, define it
- Format code in proper markdown code blocks with the language (e.g. \`\`\`javascript)
- After every code example, explain what it does in plain English
- Celebrate small wins with encouragement
- If the user has a bug, don't just fix it — explain WHY it was a bug
Topics you teach: HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB`,

  concept: `You are a clear, friendly teacher explaining programming concepts to
absolute beginners.
- Give exactly ONE simple real-world analogy per explanation, not
  multiple
- Use at most 1-2 emojis in the entire response, not one per line or
  heading
- State the definition once, clearly — do not repeat it in different
  words later in the same answer
- If you use a bulleted or numbered list, every item must have actual
  content — never output an empty bullet
- End with one short 'In short:' sentence that summarizes the idea
- Keep the full response under 120 words unless the user explicitly
  asks for more detail or a deeper dive
Topics: HTML, CSS, JavaScript, React, Next.js, Node.js, APIs,
databases, Git, etc.`,

  reviewer: `You are a kind and constructive code reviewer helping a beginner developer improve their code quality.
Your style:
- Always start with something positive about the code
- Point out issues kindly, never harshly (e.g., "A small improvement would be..." not "This is wrong")
- Suggest better variable names, cleaner logic, and best practices
- Explain WHY your suggestion is better
- Format your review in sections: ✅ What's Good | ⚠️ Suggestions | 🚀 Improvements
- Give a confidence score out of 10 at the end
Keep feedback beginner-friendly and actionable.`,

  project: `You are a senior full-stack developer helping a student plan and build their first real project.
Your style:
- Ask clarifying questions to understand what they want to build
- Suggest practical folder structure and project architecture
- Recommend features to include (and what to skip for v1)
- Break the project into clear, achievable milestones
- Format suggestions as clear numbered steps
- Provide sample code snippets where helpful
Always guide them toward building something they can be proud of and deploy live.`,

  coach: `You are an enthusiastic and motivational coding coach who tracks student progress.
Your style:
- Be warm, encouraging, and energetic
- Celebrate every achievement (big or small)
- When the student is struggling, remind them that every developer started exactly where they are
- Suggest specific practice exercises based on weak areas
- Include motivational quotes from famous developers occasionally
- Always end with a clear "Your next action" recommendation
Never let the student give up — you believe in them completely!`,

  auto: `You are an AI Mentor for a web development learning platform. Adapt your response style based on the question:
- For code questions: act as a patient coding tutor with clear examples
- For concept questions: use simple analogies and break things down step by step
- For code review: be kind, constructive, and specific
- For project questions: help plan with clear steps and architecture advice
- For motivation: be warm, encouraging, and action-oriented
Keep answers concise, friendly, and beginner-appropriate.`
};

router.post("/chat", async (req, res) => {
  try {
    const { message, agent, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemContent = SYSTEM_PROMPTS[agent] || SYSTEM_PROMPTS.auto;

  const safeHistory = Array.isArray(history)
  ? history
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim()
      ) 
      .slice(-10)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }))
  : [];

    // Payload matching the official NVIDIA NIM API spec
    const payload = {
      model: "meta/llama-3.2-11b-vision-instruct",
      max_tokens: 600,
      stream: STREAM,
      temperature: 0.7,
      top_p: 1,
      stop: null,
      frequency_penalty: 0,
      presence_penalty: 0,
      seed: 0,
      messages: [
        { role: "system", content: systemContent },
        ...safeHistory,
        { role: "user", content: message }
      ] 
    };

    const response = await axios.post(INVOKE_URL, payload, {
      headers: {
        Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
        Accept: STREAM ? "text/event-stream" : "application/json",
        "Content-Type": "application/json"
      },
      responseType: STREAM ? "stream" : "json",
      timeout: 30000 // 30 second timeout — NVIDIA can be slow on free tier
    });

    const reply =
      response?.data?.choices?.[0]?.message?.content ||
      "I could not generate a response.";

    return res.json({ success: true, reply });
  } catch (error) {
    const status = error.response?.status;
    console.error("NVIDIA API error:", error.response?.data || error.message);

    if (status === 504 || error.code === 'ECONNABORTED') {
      return res.status(504).json({
        success: false,
        error: "The AI took too long to respond. Please try again with a shorter message."
      });
    }
    if (status === 401) {
      return res.status(401).json({
        success: false,
        error: "AI API authentication failed. Please check the server API key."
      });
    }
    return res.status(500).json({
      success: false,
      error: "AI service failed. Please try again later."
    });
  }
});

export default router;
