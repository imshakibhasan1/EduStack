// ═══════════════════════════════════════════════
// AUTH VIEW — Login & Register screens
// ═══════════════════════════════════════════════

const AuthView = (() => {
  function render() {
    const el = document.getElementById('auth-screen');
    el.innerHTML = `
      <div class="auth-container">
        <div class="auth-logo">
          <span class="logo-icon-big">⚡</span>
          <h1>EduStack</h1>
          <p>Your AI-powered journey to becoming a Full-Stack Developer</p>
        </div>
        <div class="auth-card">
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-login" onclick="AuthView.switchTab('login')">Sign In</button>
            <button class="auth-tab" id="tab-register" onclick="AuthView.switchTab('register')">Create Account</button>
          </div>
          <div id="auth-form-container"></div>
        </div>
      </div>`;
    renderLoginForm();
  }

  function renderLoginForm() {
    document.getElementById('auth-form-container').innerHTML = `
      <form id="login-form" onsubmit="AuthView.handleLogin(event)">
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" id="login-email" class="form-input" placeholder="you@example.com" required autocomplete="email" />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="login-password" class="form-input" placeholder="Your password" required autocomplete="current-password" />
        </div>
        <div id="login-error" class="form-error" style="display:none; margin-bottom:0.75rem"></div>
        <button type="submit" class="btn btn-primary" id="login-btn">Sign In to EduStack</button>
      </form>
      <p style="text-align:center; margin-top:1rem; font-size:0.82rem; color:var(--clr-text-3)">
        Don't have an account? 
        <button onclick="AuthView.switchTab('register')" style="color:var(--clr-primary-l); font-weight:600; background:none; border:none; cursor:pointer;">Create one free</button>
      </p>`;
  }

  function renderRegisterForm() {
    document.getElementById('auth-form-container').innerHTML = `
      <form id="register-form" onsubmit="AuthView.handleRegister(event)">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" id="reg-first" class="form-input" placeholder="John" required />
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" id="reg-last" class="form-input" placeholder="Doe" required />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" id="reg-email" class="form-input" placeholder="you@example.com" required autocomplete="email" />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="reg-password" class="form-input" placeholder="Min. 6 characters" minlength="6" required autocomplete="new-password" />
        </div>
        <div class="form-group">
          <label class="form-label">Your Goal <span style="color:var(--clr-text-3);font-weight:400">(optional)</span></label>
          <input type="text" id="reg-goal" class="form-input" placeholder="e.g. Get a developer job in 6 months" />
        </div>
        <div id="reg-error" class="form-error" style="display:none; margin-bottom:0.75rem"></div>
        <button type="submit" class="btn btn-primary" id="reg-btn">🚀 Start Learning Free</button>
      </form>
      <p style="text-align:center; margin-top:1rem; font-size:0.82rem; color:var(--clr-text-3)">
        Already have an account? 
        <button onclick="AuthView.switchTab('login')" style="color:var(--clr-primary-l); font-weight:600; background:none; border:none; cursor:pointer;">Sign in</button>
      </p>`;
  }

  function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    if (tab === 'login') renderLoginForm();
    else renderRegisterForm();
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const btn = document.getElementById('login-btn');
    const errEl = document.getElementById('login-error');
    btn.classList.add('btn-loading');
    errEl.style.display = 'none';
    setTimeout(() => {
      const result = Auth.login({ email, password });
      btn.classList.remove('btn-loading');
      if (!result.ok) {
        errEl.textContent = '⚠️ ' + result.error;
        errEl.style.display = 'flex';
      } else {
        App.showApp();
      }
    }, 400);
  }

  function handleRegister(e) {
    e.preventDefault();
    const btn = document.getElementById('reg-btn');
    const errEl = document.getElementById('reg-error');
    btn.classList.add('btn-loading');
    errEl.style.display = 'none';
    const data = {
      firstName: document.getElementById('reg-first').value,
      lastName: document.getElementById('reg-last').value,
      email: document.getElementById('reg-email').value,
      password: document.getElementById('reg-password').value,
      goal: document.getElementById('reg-goal').value
    };
    setTimeout(() => {
      const result = Auth.register(data);
      btn.classList.remove('btn-loading');
      if (!result.ok) {
        errEl.textContent = '⚠️ ' + result.error;
        errEl.style.display = 'flex';
      } else {
        App.showApp();
      }
    }, 500);
  }

  return { render, switchTab, handleLogin, handleRegister };
})();
