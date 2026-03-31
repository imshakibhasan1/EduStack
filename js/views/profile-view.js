// ═══════════════════════════════════════════════
// PROFILE VIEW — Student profile & achievements
// ═══════════════════════════════════════════════

const ProfileView = (() => {
  function render() {
    const user = Auth.getCurrentUser();
    const stats = Progress.getStats();
    const allScores = Progress.getAllScores();
    const weakAreas = Progress.getWeakAreas();
    const joined = new Date(user.joinedAt).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

    const badges = getBadges(stats);
    const vc = document.getElementById('view-container');

    vc.innerHTML = `
      <div class="view-header">
        <h1 class="view-title">My <span class="gradient-text">Profile</span></h1>
        <p class="view-subtitle">Track your achievements and learning journey</p>
      </div>

      <!-- Profile Hero -->
      <div class="profile-hero">
        <div class="profile-avatar-big">${user.avatar || user.firstName[0]}</div>
        <div style="flex:1">
          <div class="profile-name">${user.firstName} ${user.lastName}</div>
          <div class="profile-meta">📧 ${user.email} &nbsp;·&nbsp; 📅 Joined ${joined}</div>
          ${user.goal ? `<div style="margin-top:0.4rem;font-size:0.85rem;color:var(--clr-accent)">🎯 Goal: ${user.goal}</div>` : ''}
          <div class="profile-badges">
            ${badges.map(b => `<div class="badge-chip" title="${b.desc}">${b.icon} ${b.name}</div>`).join('')}
          </div>
        </div>
        <div style="text-align:center;flex-shrink:0">
          <div style="font-size:2rem;font-weight:900;background:var(--grad-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${stats.totalXP}</div>
          <div style="font-size:0.78rem;color:var(--clr-text-2);font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Total XP</div>
        </div>
      </div>

      <!-- Stats Row -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.75rem;margin-bottom:1.5rem">
        ${miniStat('📚',stats.pct+'%','Overall Progress','var(--clr-primary)')}
        ${miniStat('✅',stats.completedPhases+'/11','Phases Done','var(--clr-green)')}
        ${miniStat('🔥',stats.streak+' days','Learning Streak','var(--clr-red)')}
        ${miniStat('📝',stats.avgScore+'%','Avg Quiz Score','var(--clr-accent)')}
      </div>

      <div class="profile-grid">
        <!-- Weak Areas -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">📌 Areas to Review</span>
          </div>
          ${weakAreas.length === 0
            ? `<div class="empty-state" style="padding:1rem 0"><div style="font-size:2rem">🎉</div><h3>No weak areas!</h3><p>All quizzes passed with 70%+</p></div>`
            : weakAreas.map(p => {
                const s = allScores[p.id];
                return `<div onclick="Router.navigate('phase/${p.id}')" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.15);border-radius:var(--r-md);cursor:pointer;margin-bottom:0.5rem">
                  <span style="font-size:1.3rem">${p.emoji}</span>
                  <div style="flex:1"><div style="font-size:0.88rem;font-weight:600">${p.title}</div>
                  <div style="font-size:0.75rem;color:var(--clr-text-2)">Score: ${s?.pct || 0}% — needs improvement</div></div>
                  <span style="font-size:0.78rem;color:#f59e0b;font-weight:600">Review →</span>
                </div>`;
              }).join('')}
        </div>

        <!-- Quiz History -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">📊 Quiz History</span>
          </div>
          ${Object.keys(allScores).length === 0
            ? `<div class="empty-state" style="padding:1rem 0"><div style="font-size:2rem">📝</div><h3>No quizzes taken yet</h3><p>Complete topics and take phase quizzes</p></div>`
            : `<div class="phase-results-list">
              ${CURRICULUM.filter(p => allScores[p.id]).map(p => {
                const s = allScores[p.id];
                const color = s.pct >= 80 ? 'var(--clr-green-l)' : s.pct >= 60 ? 'var(--clr-yellow)' : 'var(--clr-red)';
                return `<div class="phase-result-item">
                  <span class="phase-result-emoji">${p.emoji}</span>
                  <div class="phase-result-info">
                    <div class="phase-result-name">${p.title}</div>
                    <div class="phase-result-score">${s.score}/${p.quiz.length} correct · ${new Date(s.date).toLocaleDateString()}</div>
                  </div>
                  <span class="phase-result-pct" style="color:${color}">${s.pct}%</span>
                </div>`;
              }).join('')}
            </div>`}
        </div>
      </div>

      <!-- All Phases Summary -->
      <div class="card" style="margin-bottom:1.5rem">
        <div class="card-header" style="margin-bottom:1rem">
          <span class="card-title">🗺️ Phase Progress Map</span>
          <span style="font-size:0.8rem;color:var(--clr-text-2)">${stats.completedPhases} of 11 complete</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem">
          ${CURRICULUM.map(p => {
            const pct = Progress.getPhaseProgress(p.id);
            const score = allScores[p.id];
            return `<div style="display:flex;align-items:center;gap:0.75rem;cursor:pointer" onclick="Router.navigate('phase/${p.id}')">
              <span style="font-size:1rem;width:24px;text-align:center">${p.emoji}</span>
              <div style="flex:1;min-width:0">
                <div style="display:flex;justify-content:space-between;margin-bottom:3px">
                  <span style="font-size:0.82rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.title}</span>
                  <span style="font-size:0.75rem;color:var(--clr-text-2);white-space:nowrap;margin-left:0.5rem">${pct}%</span>
                </div>
                <div style="height:5px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden">
                  <div style="height:100%;width:${pct}%;background:${p.color};border-radius:99px;transition:width 0.8s ease"></div>
                </div>
              </div>
              ${score ? `<span style="font-size:0.72rem;font-weight:700;color:${score.pct>=80?'var(--clr-green-l)':score.pct>=60?'var(--clr-yellow)':'var(--clr-red)'};min-width:35px;text-align:right">📝${score.pct}%</span>` : '<span style="min-width:35px"></span>'}
            </div>`;
          }).join('')}
        </div>
      </div>

      <!-- Achievements -->
      <div class="card">
        <div class="card-header" style="margin-bottom:1rem">
          <span class="card-title">🏅 Achievements</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:0.75rem">
          ${getAllAchievements(stats).map(a => `
            <div style="padding:1rem;background:${a.earned ? 'rgba(124,58,237,0.1)' : 'var(--clr-bg-3)'};border:1px solid ${a.earned ? 'rgba(124,58,237,0.25)' : 'var(--clr-border)'};border-radius:var(--r-md);text-align:center;opacity:${a.earned ? '1' : '0.45'}">
              <div style="font-size:1.8rem;margin-bottom:0.4rem">${a.icon}</div>
              <div style="font-size:0.82rem;font-weight:700;margin-bottom:0.2rem">${a.name}</div>
              <div style="font-size:0.72rem;color:var(--clr-text-2)">${a.desc}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  function miniStat(icon, val, label, color) {
    return `<div style="background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--r-lg);padding:1rem;text-align:center">
      <div style="font-size:1.1rem;margin-bottom:0.25rem">${icon}</div>
      <div style="font-size:1.3rem;font-weight:800;color:${color}">${val}</div>
      <div style="font-size:0.72rem;color:var(--clr-text-2)">${label}</div>
    </div>`;
  }

  function getBadges(stats) {
    const badges = [];
    if (stats.streak >= 3) badges.push({ icon:'🔥', name:'On Fire', desc:'3+ day streak' });
    if (stats.completedPhases >= 1) badges.push({ icon:'⭐', name:'First Phase', desc:'Completed a phase' });
    if (stats.quizzesTaken >= 1) badges.push({ icon:'📝', name:'Quiz Taker', desc:'Took your first quiz' });
    if (stats.totalXP >= 500) badges.push({ icon:'💎', name:'XP Hunter', desc:'500+ XP earned' });
    if (badges.length === 0) badges.push({ icon:'🌱', name:'Just Started', desc:'Beginning the journey' });
    return badges;
  }

  function getAllAchievements(stats) {
    return [
      { icon:'🌱', name:'First Step', desc:'Completed first topic', earned: stats.done >= 1 },
      { icon:'📝', name:'Quiz Master', desc:'Took first quiz', earned: stats.quizzesTaken >= 1 },
      { icon:'🔥', name:'On Fire', desc:'3-day streak', earned: stats.streak >= 3 },
      { icon:'⚡', name:'Phase 1 Done', desc:'Completed Phase 1', earned: Progress.isPhaseComplete(1) },
      { icon:'🎯', name:'Halfway There', desc:'50% overall progress', earned: stats.pct >= 50 },
      { icon:'💎', name:'XP Hunter', desc:'500+ XP earned', earned: stats.totalXP >= 500 },
      { icon:'🏆', name:'Quiz Champion', desc:'80%+ on a quiz', earned: Object.values(Progress.getAllScores()).some(s => s.pct >= 80) },
      { icon:'🚀', name:'Full-Stack Dev', desc:'All 11 phases done', earned: stats.completedPhases === 11 }
    ];
  }

  return { render };
})();
