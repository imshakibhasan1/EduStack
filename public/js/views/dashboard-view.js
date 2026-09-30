// ═══════════════════════════════════════════════
// DASHBOARD VIEW — Home screen with stats & progress
// ═══════════════════════════════════════════════

const DashboardView = (() => {
  function render() {
    const user = Auth.getCurrentUser();
    const stats = Progress.getStats();
    const currentPhase = Progress.getCurrentPhase();
    const weakAreas = Progress.getWeakAreas();
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    const vc = document.getElementById('view-container');
    vc.innerHTML = `
      <div class="view-header">
        <h1 class="view-title">${greeting}, <span class="gradient-text">${user.firstName}</span> 👋</h1>
        <p class="view-subtitle">Continue your journey — you're on your way to becoming a Full-Stack Developer!</p>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        ${statCard('🏆', stats.totalXP + ' XP', 'Total Points', 'rgba(245,158,11,0.15)', '#f59e0b')}
        ${statCard('🔥', stats.streak + ' days', 'Current Streak', 'rgba(239,68,68,0.15)', '#ef4444')}
        ${statCard('✅', stats.completedPhases + '/11', 'Phases Done', 'rgba(16,185,129,0.15)', '#10b981')}
        ${statCard('📝', stats.quizzesTaken, 'Quizzes Taken', 'rgba(124,58,237,0.15)', '#7c3aed')}
      </div>

      <!-- Main Grid -->
      <div class="dash-grid">
        <!-- Overall Progress -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Overall Progress</span>
            <span class="card-badge" style="background:rgba(124,58,237,0.15);color:#9461ff">${stats.pct}% Complete</span>
          </div>
          <div class="progress-ring-container">
            <div class="progress-ring-wrap">
              ${renderProgressRing(stats.pct, 110, 10, '#7c3aed')}
              <div class="progress-ring-text">
                <span class="progress-ring-pct gradient-text">${stats.pct}%</span>
                <span class="progress-ring-sub">${stats.done}/${stats.total}<br>topics</span>
              </div>
            </div>
            <div style="text-align:center">
              <div style="font-size:0.88rem;color:var(--clr-text-2);margin-bottom:0.3rem">Current Phase</div>
              <div style="font-weight:700;font-size:1rem">${currentPhase.emoji} ${currentPhase.title}</div>
            </div>
          </div>
        </div>

        <!-- Continue Learning -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Continue Learning</span>
            <span class="card-badge" style="background:rgba(6,182,212,0.15);color:#22d3ee">Active</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.6rem">
            ${CURRICULUM.slice(0, 5).map(p => {
              const pct = Progress.getPhaseProgress(p.id);
              return `<div class="phase-mini-item" onclick="Router.navigate('phase/${p.id}')" style="cursor:pointer;padding:0.75rem;background:var(--clr-bg-3);border-radius:var(--r-md);border:1px solid var(--clr-border);transition:all var(--tx-base);"
                onmouseover="this.style.borderColor='${p.color}40'" onmouseout="this.style.borderColor='var(--clr-border)'">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.4rem">
                  <span style="font-size:0.85rem;font-weight:600">${p.emoji} ${p.title}</span>
                  <span style="font-size:0.75rem;color:var(--clr-text-2);font-weight:600">${pct}%</span>
                </div>
                <div style="height:3px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden">
                  <div style="height:100%;width:${pct}%;background:${p.color};border-radius:99px;transition:width 0.8s ease"></div>
                </div>
              </div>`;
            }).join('')}
            <button onclick="Router.navigate('curriculum')" class="btn btn-secondary btn-sm" style="margin-top:0.25rem">View All 11 Phases →</button>
          </div>
        </div>
      </div>

      <!-- Weak Areas & Quick Actions -->
      <div class="dash-grid">
        ${weakAreas.length ? `
        <div class="card">
          <div class="card-header">
            <span class="card-title">⚠️ Areas to Improve</span>
            <span class="card-badge" style="background:rgba(245,158,11,0.15);color:#f59e0b">Review</span>
          </div>
          <p style="font-size:0.83rem;color:var(--clr-text-2);margin-bottom:0.75rem">Your quiz scores show these areas need more practice:</p>
          ${weakAreas.map(p => {
            const s = Progress.getQuizScore(p.id);
            return `<div onclick="Router.navigate('phase/${p.id}')" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.15);border-radius:var(--r-md);cursor:pointer;margin-bottom:0.5rem;transition:all var(--tx-base)"
              onmouseover="this.style.background='rgba(245,158,11,0.12)'" onmouseout="this.style.background='rgba(245,158,11,0.07)'">
              <span style="font-size:1.3rem">${p.emoji}</span>
              <div style="flex:1"><div style="font-size:0.88rem;font-weight:600">${p.title}</div><div style="font-size:0.75rem;color:var(--clr-text-2)">Quiz score: ${s?.pct || 0}%</div></div>
              <span style="color:#f59e0b;font-size:0.8rem;font-weight:700">Retry Quiz →</span>
            </div>`;
          }).join('')}
        </div>` : `
        <div class="card">
          <div class="card-header"><span class="card-title">🎯 AI Coach Tips</span></div>
          <div style="display:flex;flex-direction:column;gap:0.6rem">
            ${[
              {icon:'💡', tip:'Take quizzes after finishing each phase to test yourself'},
              {icon:'🔥', tip:'Code every day to build your streak and muscle memory'},
              {icon:'🤖', tip:'Ask the AI mentor when you\'re stuck — it\'s always available'},
              {icon:'🏗️', tip:'Build real projects to solidify your learning'}
            ].map(t => `<div style="display:flex;gap:0.6rem;align-items:flex-start;padding:0.7rem;background:var(--clr-bg-3);border-radius:var(--r-md)">
              <span style="font-size:1.1rem">${t.icon}</span><span style="font-size:0.85rem;color:var(--clr-text-2)">${t.tip}</span>
            </div>`).join('')}
          </div>
        </div>`}

        <!-- Quiz performance -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">📊 Quiz Performance</span>
            <span class="card-badge" style="background:rgba(16,185,129,0.15);color:#34d399">${stats.avgScore}% avg</span>
          </div>
          ${Object.keys(Progress.getAllScores()).length === 0 ? `
          <div class="empty-state" style="padding:1.5rem 0">
            <div class="empty-state-icon">📝</div>
            <h3>No quizzes yet</h3>
            <p>Complete a phase to unlock its quiz</p>
          </div>` : `
          <div style="display:flex;flex-direction:column;gap:0.5rem">
            ${CURRICULUM.map(p => {
              const s = Progress.getQuizScore(p.id);
              if (!s) return '';
              const color = s.pct >= 80 ? '#10b981' : s.pct >= 60 ? '#f59e0b' : '#ef4444';
              return `<div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem;background:var(--clr-bg-3);border-radius:var(--r-md)">
                <span style="font-size:1rem">${p.emoji}</span>
                <div style="flex:1;min-width:0">
                  <div style="font-size:0.8rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.title}</div>
                  <div style="height:3px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden;margin-top:4px">
                    <div style="height:100%;width:${s.pct}%;background:${color};border-radius:99px"></div>
                  </div>
                </div>
                <span style="font-size:0.82rem;font-weight:700;color:${color}">${s.pct}%</span>
              </div>`;
            }).filter(Boolean).join('')}
          </div>`}
        </div>
      </div>

      <!-- All Phases Overview -->
      <div>
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:1rem">📚 All 11 Phases</h2>
        <div class="phases-grid">
          ${CURRICULUM.map(p => renderPhaseCard(p)).join('')}
        </div>
      </div>`;
  }

  function statCard(icon, value, label, bg, color) {
    return `<div class="stat-card">
      <div class="stat-icon" style="background:${bg}"><span style="font-size:1.3rem">${icon}</span></div>
      <div class="stat-value" style="color:${color}">${value}</div>
      <div class="stat-label">${label}</div>
    </div>`;
  }

  function renderProgressRing(pct, size, strokeW, color) {
    const r = (size - strokeW * 2) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (pct / 100) * circ;
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform:rotate(-90deg)">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="${strokeW}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${strokeW}"
        stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
        style="transition:stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)"/>
    </svg>`;
  }

  function renderPhaseCard(p) {
    const pct = Progress.getPhaseProgress(p.id);
    const done = pct === 100;
    const score = Progress.getQuizScore(p.id);
    return `<div class="phase-card ${done ? 'completed' : ''}" onclick="Router.navigate('phase/${p.id}')"
      style="--phase-color: ${p.color}" id="phase-card-${p.id}">
      <div class="phase-card-top">
        <span class="phase-emoji">${p.emoji}</span>
        <span class="phase-status-badge ${done ? 'badge-done' : pct > 0 ? 'badge-active' : 'badge-locked'}">
          ${done ? '✓ Complete' : pct > 0 ? 'In Progress' : 'Not Started'}
        </span>
      </div>
      <div style="font-size:0.72rem;color:var(--clr-text-3);font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem">Phase ${p.id}</div>
      <div class="phase-card-title">${p.title}</div>
      <div class="phase-card-sub">${p.subtitle}</div>
      <div class="phase-card-progress">
        <div class="phase-progress-bar">
          <div class="phase-progress-fill" style="width:${pct}%;background:${p.color}"></div>
        </div>
        <span class="phase-progress-pct" style="color:${p.color}">${pct}%</span>
      </div>
      ${score ? `<div style="font-size:0.72rem;color:var(--clr-text-3);margin-top:0.5rem">📝 Quiz: ${score.pct}%</div>` : ''}
    </div>`;
  }

  return { render, renderProgressRing };
})();
