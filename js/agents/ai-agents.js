// ═══════════════════════════════════════════════
// AI AGENTS — Gemini API integration with 6 specialized agents
// ═══════════════════════════════════════════════

const AI = (() => {
  const CHAT_KEY_PREFIX = 'devacademy_chat_';
  const SETTINGS_KEY = 'devacademy_settings';

  const DEFAULT_KEY = 'AIzaSyCKYs7lQzsQQkgXab2LYz1BkftnrYI1_YE';
  const MODEL = 'gemini-2.0-flash';
  function getSettings() {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return { apiKey: DEFAULT_KEY, model: MODEL, ...saved, model: MODEL };
  }
  function saveSettings(s) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }
  function getApiKey() { return getSettings().apiKey || ''; }
  function setApiKey(key) { saveSettings({ ...getSettings(), apiKey: key }); }

  // ── System prompts per agent ──
  const AGENTS = {
    coding: {
      name: '💻 Coding Assistant',
      label: 'Coding',
      color: '#06b6d4',
      prompt: `You are a friendly and patient coding tutor for absolute beginners learning full-stack web development.
Your style:
- Always write code with clear, beginner-friendly comments explaining every line
- Use simple language, avoid jargon — if you must use a term, define it
- Format code in proper markdown code blocks with the language (e.g. \`\`\`javascript)
- After every code example, explain what it does in plain English
- Celebrate small wins with encouragement
- If the user has a bug, don't just fix it — explain WHY it was a bug
Topics you teach: HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB`
    },
    concept: {
      name: '🧠 Concept Explainer',
      label: 'Concept',
      color: '#a78bfa',
      prompt: `You are a master teacher who explains complex programming concepts to absolute beginners.
Your style:
- Use real-world analogies to explain technical concepts (e.g., "An API is like a waiter in a restaurant...")
- Break every explanation into simple steps
- Never assume prior knowledge — always start from the basics
- Use emojis to make explanations fun and easy to follow
- End every explanation with a "Think of it this way:" summary
- Keep explanations concise but complete
Topics: HTML, CSS, JavaScript, React, Next.js, Node.js, APIs, databases, Git, etc.`
    },
    reviewer: {
      name: '🔍 Code Reviewer',
      label: 'Review',
      color: '#f59e0b',
      prompt: `You are a kind and constructive code reviewer helping a beginner developer improve their code quality.
Your style:
- Always start with something positive about the code
- Point out issues kindly, never harshly (e.g., "A small improvement would be..." not "This is wrong")
- Suggest better variable names, cleaner logic, and best practices
- Explain WHY your suggestion is better
- Format your review in sections: ✅ What's Good | ⚠️ Suggestions | 🚀 Improvements
- Give a confidence score out of 10 at the end
Keep feedback beginner-friendly and actionable.`
    },
    project: {
      name: '🧪 Project Builder',
      label: 'Project',
      color: '#10b981',
      prompt: `You are a senior full-stack developer helping a student plan and build their first real project.
Your style:
- Ask clarifying questions to understand what they want to build
- Suggest practical folder structure and project architecture
- Recommend features to include (and what to skip for v1)
- Break the project into clear, achievable milestones
- Format suggestions as clear numbered steps
- Provide sample code snippets where helpful
Always guide them toward building something they can be proud of and deploy live.`
    },
    coach: {
      name: '🎯 AI Coach',
      label: 'Coach',
      color: '#f97316',
      prompt: `You are an enthusiastic and motivational coding coach who tracks student progress.
Your style:
- Be warm, encouraging, and energetic
- Celebrate every achievement (big or small)
- When the student is struggling, remind them that every developer started exactly where they are
- Suggest specific practice exercises based on weak areas
- Use the student's progress information to give personalized advice
- Include motivational quotes from famous developers occasionally
- Always end with a clear "Your next action" recommendation
Never let the student give up — you believe in them completely!`
    },
    auto: {
      name: '🤖 Auto Router',
      label: 'Auto',
      color: '#7c3aed',
      prompt: '' // Will be set dynamically
    }
  };

  // ── Auto-routing logic ──
  function detectAgent(message) {
    const msg = message.toLowerCase();
    if (/(review|check my code|feedback|is this good|improve my|look at my)/i.test(msg)) return 'reviewer';
    if (/(error|bug|fix|not working|broken|syntax|undefined|null|cannot|failed|crash)/i.test(msg)) return 'coding';
    if (/(build|project|app|structure|folder|architecture|what should i|help me create|plan)/i.test(msg)) return 'project';
    if (/(motivat|stuck|give up|hard|difficult|progress|how long|can i|should i|tired)/i.test(msg)) return 'coach';
    if (/(write|generate|create code|show me code|example|snippet|how to code|implement)/i.test(msg)) return 'coding';
    return 'concept'; // Default fallback: explain concepts
  }

  // ── Sleep helper ──
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // ── Gemini API call with auto-retry on rate limit ──
  async function callGemini(systemPrompt, conversationHistory, userMessage, retryCount = 0) {
    const apiKey = getApiKey();
    if (!apiKey) {
      return '⚠️ **No API Key Found!**\n\nPlease go to **Settings** and enter your Gemini API key.\n\nGet a free key at [aistudio.google.com](https://aistudio.google.com)';
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

    const contents = [
      ...conversationHistory.map(m => ({
        role: m.role === 'ai' ? 'model' : 'user',
        parts: [{ text: m.content }]
      })),
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const body = {
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: { maxOutputTokens: 1500, temperature: 0.7 }
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (res.status === 429) {
        // Auto-retry up to 3 times with increasing delay
        const delays = [8000, 15000, 25000]; // 8s, 15s, 25s
        if (retryCount < delays.length) {
          const waitSec = delays[retryCount] / 1000;
          // Update typing indicator label if possible
          const typingEls = document.querySelectorAll('.typing-indicator');
          typingEls.forEach(el => {
            el.title = `Retrying in ${waitSec}s...`;
          });
          await sleep(delays[retryCount]);
          return callGemini(systemPrompt, conversationHistory, userMessage, retryCount + 1);
        }
        return '⏳ The AI is very busy right now. Please send your message again in a moment — the AI mentor is ready for you!';
      }

      if (!res.ok) {
        const err = await res.json();
        return `❌ API Error: ${err?.error?.message || 'Unknown error'}`;
      }

      const data = await res.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response. Please try again.';
    } catch (e) {
      if (e.name === 'TypeError') return '🌐 Network error. Please check your internet connection.';
      return `❌ Error: ${e.message}`;
    }
  }

  // ── Chat history per user ──
  function getChatHistory() {
    const u = Auth.getCurrentUser();
    if (!u) return [];
    return JSON.parse(localStorage.getItem(CHAT_KEY_PREFIX + u.id) || '[]');
  }
  function saveChatHistory(history) {
    const u = Auth.getCurrentUser();
    if (!u) return;
    // Keep last 40 messages
    const trimmed = history.slice(-40);
    localStorage.setItem(CHAT_KEY_PREFIX + u.id, JSON.stringify(trimmed));
  }
  function clearChatHistory() {
    const u = Auth.getCurrentUser();
    if (!u) return;
    localStorage.removeItem(CHAT_KEY_PREFIX + u.id);
  }

  // ── Main send message function ──
  async function sendMessage(userMessage, agentId = 'auto') {
    const user = Auth.getCurrentUser();
    const stats = Progress.getStats();
    const currentPhase = Progress.getCurrentPhase();
    const weakAreas = Progress.getWeakAreas().map(p => p.title).join(', ') || 'None yet';

    let resolvedAgent = agentId === 'auto' ? detectAgent(userMessage) : agentId;
    const agent = AGENTS[resolvedAgent] || AGENTS.concept;

    // Inject student context into system prompt
    const contextNote = `\n\nStudent context: Name: ${user?.firstName || 'Student'}, Current Phase: ${currentPhase?.title || 'Phase 1'}, Overall Progress: ${stats.pct}%, XP: ${stats.totalXP}, Weak areas: ${weakAreas}`;
    const systemPrompt = agent.prompt + contextNote;

    const history = getChatHistory();
    const response = await callGemini(systemPrompt, history.slice(-10), userMessage);

    // Save to history
    history.push({ role: 'user', content: userMessage, agent: resolvedAgent, ts: Date.now() });
    history.push({ role: 'ai', content: response, agent: resolvedAgent, agentName: agent.name, ts: Date.now() });
    saveChatHistory(history);

    return { response, agentId: resolvedAgent, agentName: agent.name, agentColor: agent.color };
  }

  return {
    sendMessage, getChatHistory, clearChatHistory, getApiKey, setApiKey,
    AGENTS, detectAgent, getSettings, saveSettings
  };
})();
