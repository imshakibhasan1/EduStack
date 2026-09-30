// ═══════════════════════════════════════════════
// AUTH — Student profile management via localStorage
// ═══════════════════════════════════════════════

const Auth = (() => {
  const USERS_KEY   = 'devacademy_users';
  const SESSION_KEY = 'devacademy_session';

  function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  function getCurrentUser() {
    const id = localStorage.getItem(SESSION_KEY);
    if (!id) return null;
    const users = getUsers();
    return users[id] || null;
  }
  function register({ firstName, lastName, email, password, goal }) {
    const users = getUsers();
    // Check duplicate email
    const exists = Object.values(users).find(u => u.email === email.toLowerCase().trim());
    if (exists) return { ok: false, error: 'An account with this email already exists.' };

    const id = 'u_' + Date.now();
    const user = {
      id,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password, // In a real app, hash this server-side
      goal: goal || 'Become a Full-Stack Developer',
      avatar: (firstName[0] + (lastName[0] || '')).toUpperCase(),
      joinedAt: new Date().toISOString(),
      lastSeen: new Date().toISOString()
    };
    users[id] = user;
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, id);
    return { ok: true, user };
  }
  function login({ email, password }) {
    const users = getUsers();
    const user = Object.values(users).find(
      u => u.email === email.toLowerCase().trim() && u.password === password
    );
    if (!user) return { ok: false, error: 'Invalid email or password.' };
    // Update last seen
    user.lastSeen = new Date().toISOString();
    users[user.id] = user;
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, user.id);
    return { ok: true, user };
  }
  function logout() {
    localStorage.removeItem(SESSION_KEY);
  }
  function updateProfile(updates) {
    const user = getCurrentUser();
    if (!user) return;
    const users = getUsers();
    users[user.id] = { ...user, ...updates };
    saveUsers(users);
    return users[user.id];
  }
  function deleteAccount() {
    const user = getCurrentUser();
    if (!user) return;
    const users = getUsers();
    delete users[user.id];
    saveUsers(users);
    localStorage.removeItem(SESSION_KEY);
    // Clear progress too
    localStorage.removeItem('devacademy_progress_' + user.id);
    localStorage.removeItem('devacademy_chat_' + user.id);
  }
  return { getCurrentUser, register, login, logout, updateProfile, deleteAccount };
})();
