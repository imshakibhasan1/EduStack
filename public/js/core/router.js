// ═══════════════════════════════════════════════
// ROUTER — Hash-based SPA router
// ═══════════════════════════════════════════════

const Router = (() => {
  const routes = {};
  let currentRoute = null;

  function register(path, handler) {
    routes[path] = handler;
  }
  function navigate(path) {
    window.location.hash = path;
  }
  function _resolve() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    // Match exact or pattern like 'phase/1'
    let handler = routes[hash];
    let params = {};
    if (!handler) {
      for (const pattern of Object.keys(routes)) {
        if (pattern.includes(':')) {
          const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$');
          const match = hash.match(regex);
          if (match) {
            handler = routes[pattern];
            const keys = [...pattern.matchAll(/:([^/]+)/g)].map(m => m[1]);
            keys.forEach((k, i) => { params[k] = match[i + 1]; });
            break;
          }
        }
      }
    }
    if (handler) {
      currentRoute = hash;
      handler(params);
      _updateNavActive(hash);
    }
  }
  function _updateNavActive(hash) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const base = hash.split('/')[0];
    const navEl = document.querySelector(`[data-view="${base}"]`);
    if (navEl) navEl.classList.add('active');
    // Highlight phase in sidebar
    document.querySelectorAll('.phase-sidebar-link').forEach(el => {
      el.classList.toggle('active', el.dataset.phaseId === hash.split('/')[1]);
    });
  }
  function init() {
    window.addEventListener('hashchange', _resolve);
    _resolve();
  }
  function getCurrentRoute() { return currentRoute; }
  return { register, navigate, init, getCurrentRoute };
})();
