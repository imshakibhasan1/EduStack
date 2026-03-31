// ═══════════════════════════════════════════════
// SETTINGS VIEW — API key, profile edit, danger zone
// ═══════════════════════════════════════════════

const SettingsView = (() => {
  function render() {
    const user = Auth.getCurrentUser();
    const apiKey = AI.getApiKey();
    const masked = apiKey ? apiKey.slice(0, 8) + '••••••••••••••••' : '';
    const vc = document.getElementById('view-container');

    vc.innerHTML = `
      <div class="view-header">
        <h1 class="view-title">⚙️ <span class="gradient-text">Settings</span></h1>
        <p class="view-subtitle">Configure your AI mentor and manage your account</p>
      </div>

      <!-- AI Configuration -->
      <div class="settings-section">
        <div class="settings-section-title">🤖 AI Mentor Configuration</div>
        <div class="settings-card">
          <div class="settings-item" style="flex-direction:column;align-items:flex-start;gap:0.75rem">
            <div style="display:flex;align-items:center;gap:1rem;width:100%">
              <div class="settings-icon" style="background:rgba(124,58,237,0.15);font-size:1.3rem">🔑</div>
              <div class="settings-info">
                <div class="settings-label">Google Gemini API Key</div>
                <div class="settings-desc">Required to enable AI mentor features. Get a free key at <a href="https://aistudio.google.com" target="_blank" style="color:var(--clr-primary-l)">aistudio.google.com</a></div>
              </div>
              <div id="api-status-dot" style="width:10px;height:10px;border-radius:50%;background:${apiKey ? 'var(--clr-green)' : 'var(--clr-red)'};flex-shrink:0" title="${apiKey ? 'API key configured' : 'No API key'}"></div>
            </div>
            <div class="api-key-input-wrap" style="width:100%">
              <input type="password" id="api-key-input" class="form-input" value="${apiKey}" placeholder="AIza... (paste your Gemini API key)" autocomplete="off" />
              <button onclick="SettingsView.saveApiKey()" class="btn btn-primary btn-sm">Save Key</button>
              ${apiKey ? `<button onclick="SettingsView.testApi()" class="btn btn-secondary btn-sm" id="test-api-btn">Test</button>` : ''}
            </div>
            <div id="api-test-result" style="display:none;font-size:0.82rem;padding:0.5rem 0.75rem;border-radius:var(--r-sm);width:100%"></div>
            <div style="background:rgba(6,182,212,0.08);border:1px solid rgba(6,182,212,0.2);border-radius:var(--r-md);padding:0.9rem;width:100%">
              <div style="font-size:0.82rem;font-weight:700;color:var(--clr-accent);margin-bottom:0.5rem">📖 How to get a free API key:</div>
              <ol style="font-size:0.8rem;color:var(--clr-text-2);padding-left:1.2rem;line-height:2">
                <li>Go to <strong>aistudio.google.com</strong></li>
                <li>Sign in with your Google account</li>
                <li>Click <strong>"Get API key"</strong> → <strong>"Create API key"</strong></li>
                <li>Copy the key and paste it above</li>
                <li>Click <strong>Save Key</strong></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Settings -->
      <div class="settings-section">
        <div class="settings-section-title">👤 Profile Settings</div>
        <div class="settings-card">
          <div class="settings-item" style="flex-direction:column;align-items:flex-start;gap:1rem">
            <div style="display:flex;align-items:center;gap:1rem;width:100%">
              <div class="settings-icon" style="background:rgba(124,58,237,0.15);">
                <div style="width:38px;height:38px;border-radius:var(--r-md);background:var(--grad-primary);display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff">${user.avatar}</div>
              </div>
              <div class="settings-info">
                <div class="settings-label">${user.firstName} ${user.lastName}</div>
                <div class="settings-desc">${user.email}</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;width:100%">
              <div class="form-group" style="margin:0">
                <label class="form-label">First Name</label>
                <input type="text" id="edit-first" class="form-input" value="${user.firstName}" />
              </div>
              <div class="form-group" style="margin:0">
                <label class="form-label">Last Name</label>
                <input type="text" id="edit-last" class="form-input" value="${user.lastName}" />
              </div>
            </div>
            <div class="form-group" style="margin:0;width:100%">
              <label class="form-label">Learning Goal</label>
              <input type="text" id="edit-goal" class="form-input" value="${user.goal || ''}" placeholder="e.g. Get a developer job in 6 months" />
            </div>
            <button onclick="SettingsView.saveProfile()" class="btn btn-primary btn-sm">💾 Save Profile</button>
          </div>
        </div>
      </div>

      <!-- AI Agents Info -->
      <div class="settings-section">
        <div class="settings-section-title">🤖 Available AI Agents</div>
        <div class="settings-card">
          ${Object.entries(AI.AGENTS).filter(([k]) => k !== 'auto').map(([key, a]) => `
          <div class="settings-item">
            <div class="settings-icon" style="background:${a.color}20;font-size:1.2rem">${a.name.split(' ')[0]}</div>
            <div class="settings-info">
              <div class="settings-label">${a.name}</div>
              <div class="settings-desc">${agentDesc(key)}</div>
            </div>
            <button onclick="ChatPanel.openWithAgent('${key}')" class="btn btn-secondary btn-sm">Try it</button>
          </div>`).join('')}
        </div>
      </div>

      <!-- Data Management -->
      <div class="settings-section">
        <div class="settings-section-title">💾 Data Management</div>
        <div class="settings-card">
          <div class="settings-item">
            <div class="settings-icon" style="background:rgba(245,158,11,0.15);font-size:1.2rem">🔄</div>
            <div class="settings-info">
              <div class="settings-label">Reset Progress</div>
              <div class="settings-desc">Clear all topic completions and quiz scores (cannot be undone)</div>
            </div>
            <button onclick="SettingsView.confirmReset()" class="btn btn-danger btn-sm">Reset</button>
          </div>
          <div class="settings-item">
            <div class="settings-icon" style="background:rgba(239,68,68,0.15);font-size:1.2rem">🗑️</div>
            <div class="settings-info">
              <div class="settings-label">Delete Account</div>
              <div class="settings-desc">Permanently delete your account and all data</div>
            </div>
            <button onclick="SettingsView.confirmDeleteAccount()" class="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      </div>

      <!-- App Info -->
      <div style="text-align:center;padding:1.5rem;color:var(--clr-text-3);font-size:0.78rem">
        <div style="font-size:1.5rem;margin-bottom:0.5rem">⚡</div>
        <div style="font-weight:700;color:var(--clr-text-2)">EduStack</div>
        <div>Full-Stack Developer Program · v1.0</div>
        <div style="margin-top:0.25rem">Built with ❤️ for aspiring developers</div>
      </div>`;
  }

  function agentDesc(key) {
    const descs = {
      coding: 'Writes & explains code, fixes bugs with beginner-friendly explanations',
      concept: 'Explains technical concepts using simple analogies and plain English',
      reviewer: 'Reviews your code and gives constructive, encouraging feedback',
      project: 'Helps you plan and build real-world full-stack projects',
      coach: 'Tracks your progress and motivates you to keep learning'
    };
    return descs[key] || '';
  }

  function saveApiKey() {
    const key = document.getElementById('api-key-input').value.trim();
    if (!key) { Toast.show('Please enter an API key', 'error'); return; }
    AI.setApiKey(key);
    Toast.show('✅ API key saved successfully!', 'success');
    const dot = document.getElementById('api-status-dot');
    if (dot) { dot.style.background = 'var(--clr-green)'; dot.title = 'API key configured'; }
  }

  async function testApi() {
    const btn = document.getElementById('test-api-btn');
    const result = document.getElementById('api-test-result');
    if (!btn || !result) return;
    btn.textContent = 'Testing...'; btn.disabled = true;
    result.style.display = 'block';
    result.style.background = 'rgba(255,255,255,0.05)';
    result.style.color = 'var(--clr-text-2)';
    result.textContent = '⏳ Testing connection to Gemini API...';
    try {
      const res = await AI.sendMessage('Say "API connected successfully!" and nothing else.', 'concept');
      result.style.background = 'rgba(16,185,129,0.1)';
      result.style.color = 'var(--clr-green-l)';
      result.style.border = '1px solid rgba(16,185,129,0.2)';
      result.textContent = '✅ ' + res.response.substring(0, 80);
    } catch (e) {
      result.style.background = 'rgba(239,68,68,0.1)';
      result.style.color = 'var(--clr-red)';
      result.style.border = '1px solid rgba(239,68,68,0.2)';
      result.textContent = '❌ Connection failed: ' + e.message;
    }
    btn.textContent = 'Test'; btn.disabled = false;
  }

  function saveProfile() {
    const firstName = document.getElementById('edit-first').value.trim();
    const lastName = document.getElementById('edit-last').value.trim();
    const goal = document.getElementById('edit-goal').value.trim();
    if (!firstName) { Toast.show('First name cannot be empty', 'error'); return; }
    const updated = Auth.updateProfile({
      firstName, lastName, goal,
      avatar: (firstName[0] + (lastName[0] || '')).toUpperCase()
    });
    App.updateSidebar();
    Toast.show('✅ Profile updated!', 'success');
  }

  function confirmReset() {
    if (confirm('Are you sure you want to reset ALL your progress? This cannot be undone.')) {
      Progress.resetProgress();
      AI.clearChatHistory();
      Toast.show('🔄 Progress reset successfully', 'info');
      Router.navigate('dashboard');
    }
  }

  function confirmDeleteAccount() {
    if (confirm('Are you sure you want to DELETE your account? All data will be permanently lost!')) {
      Auth.deleteAccount();
      App.showAuth();
    }
  }

  return { render, saveApiKey, testApi, saveProfile, confirmReset, confirmDeleteAccount };
})();
