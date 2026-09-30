// ═══════════════════════════════════════════════
// CURRICULUM VIEW — Phase list, phase detail, quiz
// ═══════════════════════════════════════════════

const CurriculumView = (() => {

  // ── Curriculum overview (all phases list) ──
  function renderList() {
    const vc = document.getElementById('view-container');
    vc.innerHTML = `
      <div class="view-header">
        <h1 class="view-title">📚 Full-Stack <span class="gradient-text">Curriculum</span></h1>
        <p class="view-subtitle">11 structured phases to take you from zero to Full-Stack Developer</p>
      </div>
      <div class="phases-grid">
        ${CURRICULUM.map(p => {
          const pct = Progress.getPhaseProgress(p.id);
          const done = pct === 100;
          const score = Progress.getQuizScore(p.id);
          return `<div class="phase-card ${done ? 'completed' : ''}" onclick="Router.navigate('phase/${p.id}')" style="--phase-color:${p.color}">
            <div class="phase-card-top">
              <span class="phase-emoji">${p.emoji}</span>
              <span class="phase-status-badge ${done ? 'badge-done' : pct > 0 ? 'badge-active' : 'badge-locked'}">
                ${done ? '✓ Done' : pct > 0 ? 'In Progress' : 'Start'}
              </span>
            </div>
            <div style="font-size:0.7rem;color:var(--clr-text-3);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.2rem">Phase ${p.id} · ${p.topics.length} topics</div>
            <div class="phase-card-title">${p.title}</div>
            <div class="phase-card-sub">${p.subtitle}</div>
            <div class="phase-card-progress">
              <div class="phase-progress-bar">
                <div class="phase-progress-fill" style="width:${pct}%;background:${p.color}"></div>
              </div>
              <span class="phase-progress-pct" style="color:${p.color}">${pct}%</span>
            </div>
            ${score ? `<div style="font-size:0.72rem;color:var(--clr-text-3);margin-top:0.5rem">📝 Quiz score: ${score.pct}%</div>` : ''}
          </div>`;
        }).join('')}
      </div>`;
  }

  // ── Phase Detail ──
  function renderPhase(phaseId) {
    const id = parseInt(phaseId);
    const phase = CURRICULUM.find(p => p.id === id);
    if (!phase) { Router.navigate('curriculum'); return; }

    const pct = Progress.getPhaseProgress(id);
    const quizScore = Progress.getQuizScore(id);
    const vc = document.getElementById('view-container');

    vc.innerHTML = `
      <div class="curriculum-header">
        <button class="back-btn" onclick="Router.navigate('curriculum')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          All Phases
        </button>
        <div style="height:1px;flex:1;background:var(--clr-border)"></div>
        <span style="font-size:0.82rem;color:var(--clr-text-3)">Phase ${phase.id} of ${CURRICULUM.length}</span>
      </div>

      <!-- Phase Hero -->
      <div class="phase-hero" data-emoji="${phase.emoji}">
        <div class="phase-hero-tag" style="color:${phase.color};background:${phase.colorLight};border-color:${phase.color}40">
          Phase ${phase.id}
        </div>
        <h1>${phase.emoji} ${phase.title}</h1>
        <p>${phase.description}</p>
        <div class="phase-hero-stats">
          <div class="phase-stat">📚 ${phase.topics.length} topics</div>
          <div class="phase-stat">✅ ${Math.round(pct / 100 * phase.topics.length)} completed</div>
          <div class="phase-stat" style="color:${phase.color};font-weight:600">${pct}% done</div>
          ${quizScore ? `<div class="phase-stat">📝 Quiz: ${quizScore.pct}%</div>` : ''}
        </div>
        <div style="margin-top:1.25rem">
          <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden;max-width:400px">
            <div style="height:100%;width:${pct}%;background:${phase.color};border-radius:99px;transition:width 1s ease" id="phase-hero-bar"></div>
          </div>
        </div>
      </div>

      <!-- Topics -->
      <div class="topics-section card" style="background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--r-lg);padding:1.5rem;margin-bottom:1.25rem">
        <div class="card-header" style="margin-bottom:1rem">
          <span class="card-title">📋 Topics Covered</span>
          <span style="font-size:0.78rem;color:var(--clr-text-2)">Click to mark complete</span>
        </div>
        <div class="topic-list" id="topic-list-${id}">
          ${phase.topics.map((topic, i) => renderTopicItem(topic, i, id, phase)).join('')}
        </div>
      </div>

      <!-- Learning Outcomes -->
      <div class="card" style="background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--r-lg);padding:1.5rem;margin-bottom:1.25rem">
        <div class="card-header" style="margin-bottom:1rem">
          <span class="card-title">🎯 What You'll Learn</span>
        </div>
        <div class="outcomes-grid">
          ${phase.outcomes.map(o => `<div class="outcome-item">
            <svg class="outcome-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ${o}
          </div>`).join('')}
        </div>
      </div>

      <!-- AI Study Tools -->
      <div class="card" style="background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--r-lg);padding:1.5rem;margin-bottom:1.25rem">
        <div class="card-header" style="margin-bottom:1rem">
          <span class="card-title">🤖 AI Study Tools</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:0.6rem">
          ${[
            {icon:'🧠', label:'Explain this phase', agent:'concept', q:`Explain "${phase.title}" to a complete beginner using simple analogies.`},
            {icon:'💻', label:'Show code examples', agent:'coding', q:`Show me beginner-friendly code examples for the key concepts in "${phase.title}".`},
            {icon:'🎯', label:'Get study plan', agent:'coach', q:`I'm studying "${phase.title}". Give me a motivational study plan and tips.`},
            {icon:'🧪', label:'Project ideas', agent:'project', q:`Suggest a beginner project I can build after completing "${phase.title}".`}
          ].map(btn => `<button onclick="ChatPanel.openWithMessage('${btn.q}','${btn.agent}')"
            class="btn btn-secondary btn-sm">${btn.icon} ${btn.label}</button>`).join('')}
        </div>
      </div>

      <!-- Quiz Section -->
      <div class="quiz-section" id="quiz-section-${id}">
        ${renderQuizSection(phase, quizScore)}
      </div>

      <!-- Phase Navigation -->
      <div style="display:flex;justify-content:space-between;margin-top:1.5rem;gap:0.75rem">
        ${id > 1 ? `<button onclick="Router.navigate('phase/${id-1}')" class="btn btn-secondary">← Phase ${id-1}: ${CURRICULUM[id-2].title}</button>` : '<div></div>'}
        ${id < CURRICULUM.length ? `<button onclick="Router.navigate('phase/${id+1}')" class="btn btn-primary">Phase ${id+1}: ${CURRICULUM[id].title} →</button>` : `<button onclick="Router.navigate('curriculum')" class="btn btn-primary">🎉 View All Phases</button>`}
      </div>`;
  }

  function renderTopicItem(topic, i, phaseId, phase) {
    const done = Progress.isTopicComplete(phaseId, i);
    return `<div class="topic-item ${done ? 'completed' : ''}" id="topic-${phaseId}-${i}">
      <div class="topic-checkbox" onclick="CurriculumView.toggleTopic(${phaseId},${i})">
        ${done ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
      </div>
      <span class="topic-name" onclick="LessonView.open(${phaseId},${i})">${topic}</span>
      <button onclick="LessonView.open(${phaseId},${i})" class="topic-learn-btn">Learn →</button>
    </div>`;
  }

  function toggleTopic(phaseId, topicIdx) {
    Progress.toggleTopic(phaseId, topicIdx);
    const item = document.getElementById(`topic-${phaseId}-${topicIdx}`);
    const phase = CURRICULUM.find(p => p.id === phaseId);
    if (!item || !phase) return;
    const done = Progress.isTopicComplete(phaseId, topicIdx);
    item.classList.toggle('completed', done);
    item.querySelector('.topic-checkbox').innerHTML = done
      ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
      : '';
    item.querySelector('.topic-name').style.textDecoration = done ? 'line-through' : '';

    // Update hero bar
    const pct = Progress.getPhaseProgress(phaseId);
    const bar = document.getElementById('phase-hero-bar');
    if (bar) bar.style.width = pct + '%';

    // Sidebar update
    App.updateSidebar();

    if (done) Toast.show('✅ Topic marked complete! +10 XP', 'success');
    else Toast.show('Topic unmarked', 'info');
  }

  // ── Quiz ──
  let quizState = {};

  function renderQuizSection(phase, existingScore) {
    return `
      <div class="quiz-header">
        <div>
          <div class="quiz-title">📝 Phase ${phase.id} Quiz</div>
          <div class="quiz-meta">${phase.quiz.length} questions · Auto-graded · ${existingScore ? 'Best score: ' + existingScore.pct + '%' : 'Not taken yet'}</div>
        </div>
        <button onclick="CurriculumView.startQuiz(${phase.id})" class="btn btn-primary btn-sm">
          ${existingScore ? '🔁 Retake Quiz' : '🚀 Start Quiz'}
        </button>
      </div>
      <div class="quiz-body" id="quiz-body-${phase.id}">
        ${existingScore ? renderQuizResultSummary(existingScore, phase) : `
        <div class="empty-state">
          <div class="empty-state-icon">📝</div>
          <h3>Ready to test yourself?</h3>
          <p>Take the quiz to check your knowledge of ${phase.title}</p>
        </div>`}
      </div>`;
  }

  function startQuiz(phaseId) {
    const phase = CURRICULUM.find(p => p.id === phaseId);
    if (!phase) return;
    quizState[phaseId] = { current: 0, answers: [], startTime: Date.now() };
    renderQuestion(phaseId);
  }

  function renderQuestion(phaseId) {
    const phase = CURRICULUM.find(p => p.id === phaseId);
    const state = quizState[phaseId];
    if (!state) return;
    const qIdx = state.current;
    const q = phase.quiz[qIdx];
    const body = document.getElementById('quiz-body-' + phaseId);
    if (!body) return;
    const letters = ['A','B','C','D'];
    body.innerHTML = `
      <div class="quiz-question">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
          <div style="font-size:0.78rem;color:var(--clr-text-2);font-weight:600">Question ${qIdx+1} of ${phase.quiz.length}</div>
          <div style="display:flex;gap:4px">${phase.quiz.map((_,i) => `<div style="width:20px;height:4px;border-radius:99px;background:${i<=qIdx?'var(--clr-primary)':'rgba(255,255,255,0.1)'}"></div>`).join('')}</div>
        </div>
        <div class="question-text"><span class="question-num">Q${qIdx+1}.</span> ${q.q}</div>
        <div class="options-list" id="options-${phaseId}-${qIdx}">
          ${q.options.map((opt, i) => `<button class="option-btn" id="opt-${phaseId}-${qIdx}-${i}" onclick="CurriculumView.selectAnswer(${phaseId},${qIdx},${i})">
            <span class="option-letter">${letters[i]}</span>${opt}
          </button>`).join('')}
        </div>
      </div>
      <div class="quiz-footer">
        <span class="quiz-progress-text">${qIdx+1}/${phase.quiz.length} questions</span>
        <button id="quiz-next-${phaseId}" onclick="CurriculumView.nextQuestion(${phaseId})" class="btn btn-primary btn-sm" disabled>
          ${qIdx === phase.quiz.length-1 ? 'Submit Quiz ✓' : 'Next Question →'}
        </button>
      </div>`;
  }

  function selectAnswer(phaseId, qIdx, optIdx) {
    const phase = CURRICULUM.find(p => p.id === phaseId);
    const state = quizState[phaseId];
    if (!state) return;
    const correct = phase.quiz[qIdx].answer;
    state.answers[qIdx] = optIdx;
    // Show feedback
    document.querySelectorAll(`[id^="opt-${phaseId}-${qIdx}-"]`).forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct) btn.classList.add('correct');
      else if (i === optIdx && optIdx !== correct) btn.classList.add('wrong');
    });
    const nextBtn = document.getElementById('quiz-next-' + phaseId);
    if (nextBtn) nextBtn.disabled = false;
  }

  function nextQuestion(phaseId) {
    const phase = CURRICULUM.find(p => p.id === phaseId);
    const state = quizState[phaseId];
    if (!state) return;
    if (state.current < phase.quiz.length - 1) {
      state.current++;
      renderQuestion(phaseId);
    } else {
      submitQuiz(phaseId);
    }
  }

  function submitQuiz(phaseId) {
    const phase = CURRICULUM.find(p => p.id === phaseId);
    const state = quizState[phaseId];
    if (!state) return;
    const score = state.answers.filter((ans, i) => ans === phase.quiz[i].answer).length;
    const saved = Progress.saveQuizScore(phaseId, score, phase.quiz.length);
    App.updateSidebar();
    const body = document.getElementById('quiz-body-' + phaseId);
    if (body) body.innerHTML = renderQuizResultDetail(saved, state, phase, score);
  }

  function renderQuizResultDetail(saved, state, phase, score) {
    const pct = saved.pct;
    const icon = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : '📚';
    const msg = pct >= 80 ? 'Excellent work! You mastered this phase!' : pct >= 60 ? 'Good job! Keep practicing to improve.' : 'Keep learning! Review the topics and try again.';
    return `<div class="quiz-result">
      <div class="quiz-result-icon">${icon}</div>
      <div class="quiz-result-title" style="color:${pct>=80?'var(--clr-green-l)':pct>=60?'var(--clr-yellow)':'var(--clr-red)'}">${pct >= 80 ? 'Outstanding!' : pct >= 60 ? 'Well Done!' : 'Keep Practicing!'}</div>
      <div class="quiz-result-sub">${msg}</div>
      <div class="quiz-score-display">
        <div class="score-item"><div class="score-val" style="color:${pct>=80?'var(--clr-green-l)':pct>=60?'var(--clr-yellow)':'var(--clr-red)'}">${score}/${phase.quiz.length}</div><div class="score-lbl">Score</div></div>
        <div class="score-item"><div class="score-val">${pct}%</div><div class="score-lbl">Accuracy</div></div>
        <div class="score-item"><div class="score-val" style="color:var(--clr-primary-l)">+${score*20} XP</div><div class="score-lbl">Earned</div></div>
      </div>
      <div style="display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap">
        <button onclick="CurriculumView.startQuiz(${phase.id})" class="btn btn-secondary btn-sm">🔁 Retry Quiz</button>
        ${phase.id < CURRICULUM.length ? `<button onclick="Router.navigate('phase/${phase.id+1}')" class="btn btn-primary btn-sm">Next Phase →</button>` : ''}
        <button onclick="ChatPanel.openWithMessage('I just scored ${pct}% on the ${phase.title} quiz. Give me personalized feedback and what to review.','coach')" class="btn btn-secondary btn-sm">🤖 AI Feedback</button>
      </div>
    </div>`;
  }

  function renderQuizResultSummary(score, phase) {
    const icon = score.pct >= 80 ? '🏆' : score.pct >= 60 ? '✅' : '📚';
    return `<div style="text-align:center;padding:1.5rem 0">
      <div style="font-size:2rem;margin-bottom:0.5rem">${icon}</div>
      <div style="font-size:1.1rem;font-weight:700;margin-bottom:0.25rem">Best Score: <span style="color:${score.pct>=80?'var(--clr-green-l)':score.pct>=60?'var(--clr-yellow)':'var(--clr-red)'}">${score.pct}%</span></div>
      <div style="font-size:0.82rem;color:var(--clr-text-2)">${score.score}/${phase.quiz.length} correct — taken ${new Date(score.date).toLocaleDateString()}</div>
    </div>`;
  }

  return { renderList, renderPhase, toggleTopic, startQuiz, selectAnswer, nextQuestion, submitQuiz };
})();
