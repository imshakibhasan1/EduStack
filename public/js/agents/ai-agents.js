// ═══════════════════════════════════════════════
// AI AGENTS — Backend proxy integration with 6 specialized agents
// All AI calls go through /api/ai/chat — no API key ever lives here.
// ═══════════════════════════════════════════════

const AI = (() => {
  const CHAT_KEY_PREFIX = 'devacademy_chat_';
  const SETTINGS_KEY = 'devacademy_settings';

  // Non-key settings (theme prefs, etc.) stored in localStorage — never API keys
  function getSettings() {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
  }
  function saveSettings(s) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }

  // ── Agent metadata (UI labels, colors only) ──
  // System prompts live on the backend in routes/ai.js — not here.
  const AGENTS = {
    coding: {
      name: '💻 Coding Assistant',
      label: 'Coding',
      color: '#06b6d4'
    },
    concept: {
      name: '🧠 Concept Explainer',
      label: 'Concept',
      color: '#a78bfa'
    },
    reviewer: {
      name: '🔍 Code Reviewer',
      label: 'Review',
      color: '#f59e0b'
    },
    project: {
      name: '🧪 Project Builder',
      label: 'Project',
      color: '#10b981'
    },
    coach: {
      name: '🎯 AI Coach',
      label: 'Coach',
      color: '#f97316'
    },
    auto: {
      name: '🤖 Auto Router',
      label: 'Auto',
      color: '#7c3aed'
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

  // ── Backend proxy — no API key on the frontend ever ──
  async function callBackend(agentId, userMessage, history = []) {
  const res = await fetch('/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage, agent: agentId, history })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Server error ' + res.status);
  }

  const data = await res.json();
  if (!data.success) throw new Error(data.error || 'AI request failed');
  return data.reply;
}

  // ── Chat history per user (stored in localStorage) ──
  function getChatHistory() {
    const u = Auth.getCurrentUser();
    if (!u) return [];
    return JSON.parse(localStorage.getItem(CHAT_KEY_PREFIX + u.id) || '[]');
  }
  function saveChatHistory(history) {
    const u = Auth.getCurrentUser();
    if (!u) return;
    localStorage.setItem(CHAT_KEY_PREFIX + u.id, JSON.stringify(history.slice(-40)));
  }
  function clearChatHistory() {
    const u = Auth.getCurrentUser();
    if (!u) return;
    localStorage.removeItem(CHAT_KEY_PREFIX + u.id);
  }

  // ── Main send message function ──
  async function sendMessage(userMessage, agentId = 'auto') {
  let resolvedAgent = agentId === 'auto' ? detectAgent(userMessage) : agentId;
  const agent = AGENTS[resolvedAgent] || AGENTS.concept;

  // Build the context BEFORE saving the new message.
  // Convert our stored role 'ai' -> 'assistant' (what the model API expects).
  const pastHistory = getChatHistory()
    .slice(-10)
    .map(m => ({
      role: m.role === 'ai' ? 'assistant' : 'user',
      content: m.content
    }));

  let response;
  let failed = false;
  try {
    response = await callBackend(resolvedAgent, userMessage, pastHistory);
  } catch (err) {
    console.error('AI backend error:', err);
    response = '❌ ' + (err.message || 'Something went wrong. Please try again.');
    failed = true;
  }

  // Only save successful turns, so errors never pollute the context
  if (!failed) {
    const history = getChatHistory();
    history.push({ role: 'user', content: userMessage, agent: resolvedAgent, ts: Date.now() });
    history.push({ role: 'ai', content: response, agent: resolvedAgent, agentName: agent.name, ts: Date.now() });
    saveChatHistory(history);
  }

  return { response, agentId: resolvedAgent, agentName: agent.name, agentColor: agent.color };
};

  return {
    sendMessage, getChatHistory, clearChatHistory,
    AGENTS, detectAgent, getSettings, saveSettings
  };
})();
