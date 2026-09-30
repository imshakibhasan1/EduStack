// ═══════════════════════════════════════════════
// APP — Main application controller
// ═══════════════════════════════════════════════

const Toast = (() => {
  function show(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-exiting');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
  return { show };
})();

const App = (() => {
  function init() {
    const user = Auth.getCurrentUser();
    if (user) {
      showApp();
    } else {
      showAuth();
    }
  }

  function showAuth() {
    document.getElementById('auth-screen').classList.remove('hidden');
    document.getElementById('app-shell').classList.add('hidden');
    document.getElementById('ai-chat-toggle').classList.add('hidden');
    document.getElementById('ai-chat-panel').classList.add('hidden');
    AuthView.render();
  }

  function showApp() {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-shell').classList.remove('hidden');
    document.getElementById('ai-chat-toggle').classList.remove('hidden');

    updateSidebar();
    setupSidebarToggle();
    setupLogout();
    registerRoutes();
    ChatPanel.init();
    Router.init();
  }

  function setupSidebarToggle() {
    const toggle = document.getElementById('sidebar-toggle');
    const close = document.getElementById('sidebar-close');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebar = document.getElementById('sidebar');

    const openSidebar = () => {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
    };
    const closeSidebar = () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    };

    if (toggle) toggle.addEventListener('click', openSidebar);
    if (close) close.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Close sidebar on nav (mobile)
    document.querySelectorAll('.nav-item').forEach(el => {
      el.addEventListener('click', () => {
        if (window.innerWidth <= 900) closeSidebar();
      });
    });
  }

  function setupLogout() {
    const btn = document.getElementById('logout-btn');
    if (btn) btn.addEventListener('click', () => {
      Auth.logout();
      showAuth();
      Toast.show('👋 Logged out successfully', 'info');
    });
  }

  function registerRoutes() {
    Router.register('dashboard', () => DashboardView.render());
    Router.register('profile', () => ProfileView.render());
    Router.register('curriculum', () => CurriculumView.renderList());
    Router.register('phase/:id', (params) => CurriculumView.renderPhase(params.id));
    Router.register('settings', () => SettingsView.render());
  }

  function updateSidebar() {
    const user = Auth.getCurrentUser();
    if (!user) return;

    // Student card
    const card = document.getElementById('sidebar-student-card');
    const stats = Progress.getStats();
    const currentPhase = Progress.getCurrentPhase();
    if (card) {
      card.innerHTML = `
        <div class="student-card-info">
          <div class="student-card-avatar">${user.avatar}</div>
          <div>
            <div class="student-card-name">${user.firstName} ${user.lastName}</div>
            <div class="student-card-phase">${currentPhase.emoji} Phase ${currentPhase.id}: ${currentPhase.title}</div>
          </div>
        </div>
        <div class="student-progress-bar">
          <div class="student-progress-fill" style="width:${stats.pct}%"></div>
        </div>
        <div class="student-progress-label">
          <span>${stats.pct}% complete</span>
          <span>${stats.totalXP} XP</span>
        </div>`;
    }

    // Phase list in sidebar
    const phasesEl = document.getElementById('sidebar-phases');
    if (phasesEl) {
      phasesEl.innerHTML = CURRICULUM.map(p => {
        const pct = Progress.getPhaseProgress(p.id);
        const done = pct === 100;
        return `<a href="#phase/${p.id}" class="nav-item phase-sidebar-link" data-view="phase" data-phase-id="${p.id}">
          <span class="phase-nav-emoji">${p.emoji}</span>
          <span class="phase-nav-text">${p.title}</span>
          <span class="phase-nav-badge ${done ? 'done' : ''}">${done ? '✓' : pct + '%'}</span>
        </a>`;
      }).join('');

      // Add click handlers for mobile close
      phasesEl.querySelectorAll('.phase-sidebar-link').forEach(el => {
        el.addEventListener('click', () => {
          if (window.innerWidth <= 900) {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebar-overlay').classList.remove('visible');
          }
        });
      });
    }
  }

  return { init, showApp, showAuth, updateSidebar };
})();

// Boot
document.addEventListener('DOMContentLoaded', App.init);
