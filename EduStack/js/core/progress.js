// ═══════════════════════════════════════════════
// PROGRESS — Per-user progress tracking
// ═══════════════════════════════════════════════

const Progress = (() => {
  function _key() {
    const u = Auth.getCurrentUser();
    return u ? 'devacademy_progress_' + u.id : null;
  }
  function _data() {
    const k = _key();
    if (!k) return _defaultData();
    return JSON.parse(localStorage.getItem(k) || 'null') || _defaultData();
  }
  function _defaultData() {
    return {
      completedTopics: {},   // { phaseId: [topicIndex, ...] }
      quizScores: {},        // { phaseId: { score, total, date } }
      startedPhases: [],
      totalXP: 0,
      streak: 0,
      lastActivityDate: null
    };
  }
  function _save(data) {
    const k = _key();
    if (k) localStorage.setItem(k, JSON.stringify(data));
  }

  // Mark / unmark a topic complete
  function toggleTopic(phaseId, topicIdx) {
    const data = _data();
    if (!data.completedTopics[phaseId]) data.completedTopics[phaseId] = [];
    const arr = data.completedTopics[phaseId];
    const pos = arr.indexOf(topicIdx);
    if (pos === -1) {
      arr.push(topicIdx);
      data.totalXP += 10;
      _updateStreak(data);
    } else {
      arr.splice(pos, 1);
      data.totalXP = Math.max(0, data.totalXP - 10);
    }
    if (!data.startedPhases.includes(phaseId)) data.startedPhases.push(phaseId);
    _save(data);
    return data;
  }

  function isTopicComplete(phaseId, topicIdx) {
    const d = _data();
    return (d.completedTopics[phaseId] || []).includes(topicIdx);
  }

  function getPhaseProgress(phaseId) {
    const phase = CURRICULUM.find(p => p.id === phaseId);
    if (!phase) return 0;
    const done = (_data().completedTopics[phaseId] || []).length;
    return Math.round((done / phase.topics.length) * 100);
  }

  function isPhaseComplete(phaseId) {
    return getPhaseProgress(phaseId) === 100;
  }

  function saveQuizScore(phaseId, score, total) {
    const data = _data();
    data.quizScores[phaseId] = { score, total, date: new Date().toISOString(), pct: Math.round((score/total)*100) };
    data.totalXP += score * 20;
    _updateStreak(data);
    _save(data);
    return data.quizScores[phaseId];
  }

  function getQuizScore(phaseId) {
    return _data().quizScores[phaseId] || null;
  }

  function getAllScores() {
    return _data().quizScores;
  }

  function getOverallProgress() {
    const data = _data();
    let totalTopics = CURRICULUM.reduce((a, p) => a + p.topics.length, 0);
    let doneTopics = Object.values(data.completedTopics).reduce((a, arr) => a + arr.length, 0);
    return { pct: Math.round((doneTopics / totalTopics) * 100), done: doneTopics, total: totalTopics };
  }

  function getStats() {
    const data = _data();
    const allScores = Object.values(data.quizScores);
    const avgScore = allScores.length
      ? Math.round(allScores.reduce((a, s) => a + s.pct, 0) / allScores.length)
      : 0;
    const completedPhases = CURRICULUM.filter(p => isPhaseComplete(p.id)).length;
    return {
      totalXP: data.totalXP,
      streak: data.streak,
      completedPhases,
      quizzesTaken: allScores.length,
      avgScore,
      ...getOverallProgress()
    };
  }

  // Find weakest phase (lowest quiz score or incomplete)
  function getWeakAreas() {
    const scores = _data().quizScores;
    const weak = CURRICULUM
      .filter(p => scores[p.id] && scores[p.id].pct < 70)
      .sort((a, b) => scores[a.id].pct - scores[b.id].pct)
      .slice(0, 3);
    return weak;
  }

  // Current active phase (first incomplete)
  function getCurrentPhase() {
    for (const phase of CURRICULUM) {
      if (!isPhaseComplete(phase.id)) return phase;
    }
    return CURRICULUM[CURRICULUM.length - 1];
  }

  function _updateStreak(data) {
    const today = new Date().toDateString();
    if (data.lastActivityDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      data.streak = data.lastActivityDate === yesterday ? data.streak + 1 : 1;
      data.lastActivityDate = today;
    }
  }

  function resetProgress() {
    _save(_defaultData());
  }

  return {
    toggleTopic, isTopicComplete, getPhaseProgress, isPhaseComplete,
    saveQuizScore, getQuizScore, getAllScores, getOverallProgress,
    getStats, getWeakAreas, getCurrentPhase, resetProgress
  };
})();
