// ═══════════════════════════════════════════════
// LESSON VIEW — Topic lesson modal + mini-exam
// ═══════════════════════════════════════════════
const LessonView = (() => {
  let _phase = null, _topic = null, _examState = {};

  function open(phaseId, topicIdx) {
    _phase = +phaseId; _topic = +topicIdx; _examState = {};
    _render();
  }

  function close() {
    const el = document.getElementById('lesson-overlay');
    if (el) { el.style.opacity = '0'; setTimeout(() => el.remove(), 200); }
  }

  function navigate(dir) {
    const ph = CURRICULUM.find(p => p.id === _phase);
    if (!ph) return;
    const next = _topic + dir;
    if (next >= 0 && next < ph.topics.length) { _topic = next; _examState = {}; _render(); }
  }

  function _render() {
    const old = document.getElementById('lesson-overlay');
    if (old) old.remove();
    const ph = CURRICULUM.find(p => p.id === _phase);
    if (!ph) return;
    const key = `${_phase}-${_topic}`;
    const ls = (typeof LESSONS !== 'undefined') ? LESSONS[key] : null;
    const title = ph.topics[_topic];
    const done = Progress.isTopicComplete(_phase, _topic);
    const ov = document.createElement('div');
    ov.id = 'lesson-overlay';
    ov.className = 'lesson-overlay';
    ov.innerHTML = ls ? _buildLesson(ls, ph, title, done) : _buildPlaceholder(title, ph);
    document.body.appendChild(ov);
  }

  function _buildLesson(ls, ph, title, done) {
    const total = ph.topics.length, key = `${_phase}-${_topic}`;
    const hasPrev = _topic > 0, hasNext = _topic < total - 1;
    return `
<div class="lesson-modal">
  <div class="lesson-header" style="--lesson-color:${ph.color}">
    <div class="lesson-header-bg"></div>
    <div class="lesson-breadcrumb">Phase ${_phase} &middot; Topic ${_topic+1} of ${total}</div>
    <div class="lesson-title-row">
      <div class="lesson-title"><span class="lesson-emoji">${ls.emoji}</span><h2>${ls.title}</h2></div>
      <button class="lesson-close-btn" onclick="LessonView.close()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="lesson-tags">
      ${(ls.tags||[]).map(t=>`<span class="lesson-tag">${t}</span>`).join('')}
      ${done?'<span class="lesson-tag" style="background:rgba(16,185,129,.15);color:#10b981;border-color:#10b981">✓ Done</span>':''}
    </div>
  </div>
  <div class="lesson-body">
    ${ls.intro ? `<div class="lesson-intro">${ls.intro}</div>` : ''}
    ${(ls.sections||[]).map(_buildSection).join('')}
    ${ls.realLife ? `<div class="analogy-box"><div class="analogy-icon">🌍</div><div class="analogy-text">${ls.realLife}</div></div>` : ''}
    ${_buildYoutube(ls)}
    ${_buildExam(ls, key)}
  </div>
  <div class="lesson-footer">
    <button class="btn btn-${done?'secondary':'primary'} btn-sm" onclick="LessonView.markComplete()">
      ${done ? '✓ Completed' : '✅ Mark Complete'}
    </button>
    <div class="lesson-nav-btns">
      ${hasPrev ? `<button class="btn btn-secondary btn-sm" onclick="LessonView.navigate(-1)">← Prev Topic</button>` : '<div></div>'}
      ${hasNext ? `<button class="btn btn-primary btn-sm" onclick="LessonView.navigate(1)">Next Topic →</button>` : `<button class="btn btn-primary btn-sm" onclick="LessonView.close()">Finish Phase 🎉</button>`}
    </div>
  </div>
</div>`;
  }

  function _buildSection(sec) {
    const esc = (sec.code ? (sec.code.src||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') : '');
    return `<div class="lesson-section">
      <div class="lesson-section-title">${sec.title}</div>
      <div class="lesson-section-text">${sec.body}</div>
      ${sec.code ? `<div class="lesson-code-block">
        <div class="code-block-header">
          <div class="code-dots">
            <div class="code-dot" style="background:#ff5f57"></div>
            <div class="code-dot" style="background:#ffbd2e"></div>
            <div class="code-dot" style="background:#28ca41"></div>
          </div>
          <span class="code-lang-tag">${sec.code.lang||'code'}</span>
          <button class="code-block-copy" onclick="LessonView.copyCode(this)">Copy</button>
        </div>
        <div class="code-block-body"><pre>${esc}</pre></div>
      </div>` : ''}
    </div>`;
  }

  function _buildYoutube(ls) {
    if (!ls.youtube || !ls.youtube.length) return '';
    return `<div class="lesson-section">
      <div class="lesson-section-title">🎬 YouTube References</div>
      <div class="lesson-section-text">Watch these videos to deepen your understanding of this topic:</div>
      <div class="yt-cards">
        ${ls.youtube.map(v=>`
        <a href="${v.url}" target="_blank" rel="noopener" class="yt-card">
          <div class="yt-thumb">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#ff0000" opacity=".9"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
          </div>
          <div class="yt-info">
            <div class="yt-title">${v.title}</div>
            <div class="yt-channel">${v.channel}</div>
          </div>
          <div class="yt-arrow">↗</div>
        </a>`).join('')}
      </div>
    </div>`;
  }

  function _buildExam(ls, key) {
    if (!ls.exam || !ls.exam.length) return '';
    return `<div class="lesson-exam">
      <div class="lesson-exam-header">
        <div class="lesson-exam-title">📝 Mini Exam</div>
        <div class="lesson-exam-meta">${ls.exam.length} questions &middot; Practice test &middot; Not graded</div>
      </div>
      <div id="lexam-${key}">${_buildQ(ls, key, 0)}</div>
    </div>`;
  }

  function _buildQ(ls, key, qi) {
    const q = ls.exam[qi], letters = ['A','B','C','D','E'];
    return `<div class="exam-question-card">
      <div class="exam-q-header">
        <span class="exam-q-num">Question ${qi+1} of ${ls.exam.length}</span>
        <div class="exam-q-dots">${ls.exam.map((_,i)=>`<div class="exam-dot${i===qi?' active':''}"></div>`).join('')}</div>
      </div>
      <div class="exam-q-text">${q.q}</div>
      <div class="exam-opts" id="eopts-${key}-${qi}">
        ${q.options.map((opt,i)=>`<button class="exam-opt-btn" onclick="LessonView.examAnswer('${key}',${qi},${i})">
          <span class="exam-opt-letter">${letters[i]}</span>${opt}
        </button>`).join('')}
      </div>
      <div class="exam-q-footer">
        <span class="exam-q-count">${qi+1} / ${ls.exam.length}</span>
        <button class="btn btn-primary btn-sm" id="enxt-${key}" onclick="LessonView.examNext('${key}',${qi})" disabled>
          ${qi===ls.exam.length-1?'See Results ✓':'Next →'}
        </button>
      </div>
    </div>`;
  }

  function examAnswer(key, qi, opt) {
    const ls = LESSONS[key]; if (!ls) return;
    const correct = ls.exam[qi].answer;
    if (!_examState[key]) _examState[key] = [];
    _examState[key][qi] = opt;
    document.querySelectorAll(`#eopts-${key}-${qi} .exam-opt-btn`).forEach((btn,i) => {
      btn.disabled = true;
      if (i === correct) btn.classList.add('correct');
      else if (i === opt && opt !== correct) btn.classList.add('wrong');
    });
    const nb = document.getElementById(`enxt-${key}`); if (nb) nb.disabled = false;
  }

  function examNext(key, qi) {
    const ls = LESSONS[key]; if (!ls) return;
    const body = document.getElementById(`lexam-${key}`); if (!body) return;
    if (qi < ls.exam.length - 1) {
      body.innerHTML = _buildQ(ls, key, qi + 1);
    } else {
      const ans = _examState[key] || [];
      const score = ans.filter((a,i) => a === ls.exam[i].answer).length;
      const pct = Math.round(score / ls.exam.length * 100);
      const icon = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : '📚';
      const msg = pct >= 80 ? 'Excellent! You nailed it!' : pct >= 60 ? 'Good job! Keep going.' : 'Review and retry.';
      body.innerHTML = `<div class="exam-result">
        <div class="exam-result-icon">${icon}</div>
        <div class="exam-result-score" style="color:${pct>=80?'#10b981':pct>=60?'#f59e0b':'#ef4444'}">${pct}%</div>
        <div class="exam-result-msg">${score}/${ls.exam.length} correct &mdash; ${msg}</div>
        <div style="display:flex;gap:.5rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
          <button class="btn btn-secondary btn-sm" onclick="LessonView.retakeExam('${key}')">🔁 Retry</button>
          <button class="btn btn-primary btn-sm" onclick="LessonView.markComplete()">✅ Mark Complete</button>
        </div>
      </div>`;
    }
  }

  function retakeExam(key) {
    const ls = LESSONS[key]; _examState[key] = [];
    const body = document.getElementById(`lexam-${key}`);
    if (body && ls) body.innerHTML = _buildQ(ls, key, 0);
  }

  function markComplete() {
    if (!Progress.isTopicComplete(_phase, _topic)) {
      Progress.toggleTopic(_phase, _topic); App.updateSidebar();
      Toast.show('✅ Topic complete! +10 XP', 'success');
    }
    _render();
  }

  function copyCode(btn) {
    const pre = btn.closest('.lesson-code-block').querySelector('pre');
    if (pre && navigator.clipboard) {
      navigator.clipboard.writeText(pre.textContent).then(() => {
        btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 1500);
      });
    }
  }

  function _buildPlaceholder(title, ph) {
    return `<div class="lesson-modal">
      <div class="lesson-header" style="--lesson-color:${ph.color}">
        <div class="lesson-header-bg"></div>
        <div class="lesson-title-row">
          <div class="lesson-title"><span class="lesson-emoji">📚</span><h2>${title}</h2></div>
          <button class="lesson-close-btn" onclick="LessonView.close()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="lesson-body" style="text-align:center;padding:3rem 2rem">
        <div style="font-size:3rem;margin-bottom:1rem">🚀</div>
        <h3>Lesson Coming Soon</h3>
        <p style="color:var(--clr-text-2);margin-top:.5rem">Content for "<strong>${title}</strong>" is being added!</p>
      </div>
    </div>`;
  }

  return { open, close, navigate, markComplete, retakeExam, examAnswer, examNext, copyCode };
})();
