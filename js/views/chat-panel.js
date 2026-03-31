// ═══════════════════════════════════════════════
// CHAT PANEL — Floating AI assistant UI
// ═══════════════════════════════════════════════

const ChatPanel = (() => {
  let isOpen = false;
  let currentAgent = 'auto';
  let isLoading = false;

  function init() {
    const toggle = document.getElementById('ai-chat-toggle');
    const mobileBtn = document.getElementById('mobile-ai-btn');
    const closeBtn = document.getElementById('chat-close');
    const clearBtn = document.getElementById('chat-clear');
    const sendBtn = document.getElementById('chat-send');
    const input  = document.getElementById('chat-input');
    const panel  = document.getElementById('ai-chat-panel');

    if (toggle) toggle.addEventListener('click', () => isOpen ? close() : open());
    if (mobileBtn) mobileBtn.addEventListener('click', () => isOpen ? close() : open());
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (clearBtn) clearBtn.addEventListener('click', clearChat);
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);

    // Auto-resize textarea + Enter to send
    if (input) {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
      });
      input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';
      });
    }

    // Agent tabs
    document.querySelectorAll('.agent-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.agent-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentAgent = tab.dataset.agent;
        updateAgentLabel();
      });
    });

    // Load previous history
    renderHistory();
  }

  function open() {
    isOpen = true;
    const panel = document.getElementById('ai-chat-panel');
    const toggle = document.getElementById('ai-chat-toggle');
    if (panel) { panel.classList.remove('hidden'); }
    if (toggle) toggle.style.display = 'none';
    // Show welcome if empty
    const msgs = document.getElementById('chat-messages');
    if (msgs && msgs.children.length === 0) renderWelcome();
    setTimeout(() => { document.getElementById('chat-input')?.focus(); }, 100);
  }

  function close() {
    isOpen = false;
    const panel = document.getElementById('ai-chat-panel');
    const toggle = document.getElementById('ai-chat-toggle');
    if (panel) panel.classList.add('hidden');
    if (toggle) toggle.style.display = 'flex';
  }

  function renderWelcome() {
    const user = Auth.getCurrentUser();
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;
    const currentPhase = Progress.getCurrentPhase();
    msgs.innerHTML = '';
    appendAiMessage(
      `👋 Hey **${user?.firstName || 'there'}**! I'm your AI mentor.\n\nI can help you with:\n- 💻 **Writing & explaining code**\n- 🧠 **Understanding concepts** with simple analogies\n- 🔍 **Reviewing your code** with constructive feedback\n- 🧪 **Planning projects** step by step\n- 🎯 **Staying motivated** on your journey\n\nYou're currently on **${currentPhase?.emoji} ${currentPhase?.title}**. What would you like help with today?`,
      'auto',
      '🤖 AI Mentor'
    );
  }

  function renderHistory() {
    const history = AI.getChatHistory();
    if (!history.length) return;
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;
    msgs.innerHTML = '';
    // Show last 20 messages
    history.slice(-20).forEach(msg => {
      if (msg.role === 'user') appendUserMessage(msg.content, false);
      else appendAiMessage(msg.content, msg.agent, msg.agentName, false);
    });
    scrollToBottom();
  }

  async function sendMessage() {
    if (isLoading) return;
    const input = document.getElementById('chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';
    appendUserMessage(text);

    isLoading = true;
    setSendDisabled(true);
    const typingId = showTyping();

    try {
      const result = await AI.sendMessage(text, currentAgent);
      removeTyping(typingId);
      appendAiMessage(result.response, result.agentId, result.agentName);
    } catch (err) {
      removeTyping(typingId);
      appendAiMessage('❌ Something went wrong. Please try again.', 'auto', '🤖 System');
    } finally {
      isLoading = false;
      setSendDisabled(false);
      input.focus();
    }
  }

  function appendUserMessage(text, scroll = true) {
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;
    const user = Auth.getCurrentUser();
    const div = document.createElement('div');
    div.className = 'chat-msg user';
    div.innerHTML = `
      <div class="msg-avatar user">${user?.avatar || '?'}</div>
      <div class="msg-content">
        <div class="msg-bubble">${escapeHtml(text)}</div>
      </div>`;
    msgs.appendChild(div);
    if (scroll) scrollToBottom();
  }

  function appendAiMessage(text, agentId, agentName, scroll = true) {
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;
    const div = document.createElement('div');
    div.className = 'chat-msg ai';
    const agent = AI.AGENTS[agentId] || AI.AGENTS.concept;
    const color = agent?.color || '#7c3aed';
    div.innerHTML = `
      <div class="msg-avatar ai">🤖</div>
      <div class="msg-content">
        <div class="msg-agent-tag" style="background:${color}20;color:${color}">${agentName || agent?.name || '🤖 AI'}</div>
        <div class="msg-bubble">${formatMessage(text)}</div>
      </div>`;
    msgs.appendChild(div);
    // Add copy buttons to code blocks
    div.querySelectorAll('pre').forEach(pre => {
      const wrap = document.createElement('div');
      wrap.className = 'code-block-wrap';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-code-btn';
      copyBtn.textContent = 'Copy';
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(pre.innerText).then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.textContent = 'Copy', 2000);
        });
      };
      wrap.appendChild(copyBtn);
    });
    if (scroll) scrollToBottom();
  }

  function showTyping() {
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return null;
    const id = 'typing-' + Date.now();
    const div = document.createElement('div');
    div.className = 'chat-msg ai';
    div.id = id;
    div.innerHTML = `
      <div class="msg-avatar ai">🤖</div>
      <div class="msg-content">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>`;
    msgs.appendChild(div);
    scrollToBottom();
    return id;
  }

  function removeTyping(id) {
    if (id) document.getElementById(id)?.remove();
  }

  function clearChat() {
    AI.clearChatHistory();
    const msgs = document.getElementById('chat-messages');
    if (msgs) msgs.innerHTML = '';
    renderWelcome();
    Toast.show('💬 Chat cleared', 'info');
  }

  function scrollToBottom() {
    const msgs = document.getElementById('chat-messages');
    if (msgs) setTimeout(() => msgs.scrollTop = msgs.scrollHeight, 50);
  }

  function setSendDisabled(disabled) {
    const btn = document.getElementById('chat-send');
    if (btn) btn.disabled = disabled;
  }

  function updateAgentLabel() {
    const el = document.getElementById('current-agent-label');
    if (!el) return;
    const labels = {
      auto: 'Auto-routing to best agent',
      coding: '💻 Coding Agent active',
      concept: '🧠 Concept Agent active',
      reviewer: '🔍 Code Reviewer active',
      project: '🧪 Project Builder active',
      coach: '🎯 Coach Agent active'
    };
    el.textContent = labels[currentAgent] || labels.auto;
  }

  // Open chat and pre-fill a message
  function openWithMessage(message, agentId = 'auto') {
    // Set agent tab
    if (agentId !== 'auto') {
      document.querySelectorAll('.agent-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.agent === agentId);
      });
      currentAgent = agentId;
      updateAgentLabel();
    }
    open();
    const input = document.getElementById('chat-input');
    if (input) {
      input.value = message;
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
      input.focus();
    }
  }

  function openWithAgent(agentId) {
    document.querySelectorAll('.agent-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.agent === agentId);
    });
    currentAgent = agentId;
    updateAgentLabel();
    open();
  }

  // ── Markdown-like formatter ──
  function formatMessage(text) {
    // Convert markdown-ish to HTML
    let html = escapeHtml(text);
    // Code blocks ```lang\n...\n```
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) =>
      `<pre><code class="lang-${lang}">${code.trim()}</code></pre>`);
    // Inline code `code`
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    // Bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Italic *text*
    html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    // Headers ### text
    html = html.replace(/^### (.+)$/gm, '<h4 style="margin:0.75rem 0 0.35rem;font-size:0.95rem;">$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3 style="margin:0.75rem 0 0.35rem;font-size:1rem;">$1</h3>');
    // Numbered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li style="margin-left:1.2rem;list-style:decimal">$1</li>');
    // Bullet lists
    html = html.replace(/^[-•] (.+)$/gm, '<li style="margin-left:1.2rem;list-style:disc">$1</li>');
    // Wrap consecutive li items in ul (simple approach)
    html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, match => `<ul style="margin:0.35rem 0;padding:0">${match}</ul>`);
    // Line breaks (skip after block elements)
    html = html.replace(/\n\n/g, '<br><br>');
    html = html.replace(/\n/g, '<br>');
    // Fix <br> inside pre tags
    html = html.replace(/<pre>([\s\S]*?)<\/pre>/g, (_, c) =>
      `<pre>${c.replace(/<br>/g, '\n').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')}</pre>`);
    return html;
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return { init, open, close, openWithMessage, openWithAgent, sendMessage };
})();
