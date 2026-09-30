# 🚀 EduStack — Full-Stack Developer Learning Platform

EduStack is a full-stack learning platform designed for beginner web developers. It combines interactive curriculum tracking with a multi-agent AI mentor powered by NVIDIA NIM (Meta Llama 3.2 11B Vision Instruct).

---

## 📌 Project Overview

- **Frontend**: Modular Vanilla JavaScript (SPA architecture), custom CSS design system, micro-animations, dynamic tab navigation, and responsive layouts.
- **Backend**: Express.js server hosted on Node.js proxying requests securely to NVIDIA NIM APIs.
- **AI Integration**: Multi-agent system featuring 6 specialized personas (Coding Assistant, Concept Explainer, Code Reviewer, Project Builder, AI Coach, and Auto-Router).
- **Security**: API keys are isolated on the server (`.env`) and never exposed to client side.

---

## 📁 Directory & File Structure

```text
edustack-backend/
├── .env                    # Environment variables (NVIDIA_API_KEY, PORT)
├── .env.example            # Sample environment file template
├── package.json            # Node.js dependencies and script aliases
├── server.js               # Express application entry point & static file server
├── README.md               # Project documentation
│
├── routes/
│   └── ai.js               # Backend route POST /api/ai/chat (NVIDIA NIM integration)
│
└── public/                 # Static assets served by Express
    ├── index.html          # Main SPA single page container
    ├── css/                # Custom CSS design system
    ├── img/                # Static image assets
    └── js/
        ├── app.js          # Core application bootstrapper & event bindings
        ├── ai-mentor.js    # AI mentor script initialization
        ├── agents/
        │   └── ai-agents.js# Client AI bridge, auto-router & history manager
        ├── core/
        │   ├── auth.js     # User session management & registration
        │   ├── progress.js # XP points, streak tracking & topic completions
        │   └── router.js   # Single-page client router
        ├── data/
        │   └── curriculum.js # Curriculum modules, phases, and learning topics
        └── views/
            ├── chat-panel.js   # AI Chat floating UI drawer & scroll management
            ├── curriculum-view.js # Curriculum module listing and topic rendering
            ├── dashboard-view.js  # Main student stats & progress dashboard
            ├── profile-view.js    # Student profile management UI
            └── settings-view.js   # Application preferences & theme settings
```

---

## 📊 Data Schemas

### 1. User Schema (`localStorage: devacademy_users`)
```json
{
  "u_1727654400000": {
    "id": "u_1727654400000",
    "firstName": "Alex",
    "lastName": "Developer",
    "email": "alex@example.com",
    "password": "hashed_or_plain_password",
    "goal": "Become a Full-Stack Developer",
    "avatar": "AD",
    "joinedAt": "2026-09-30T04:00:00.000Z",
    "lastSeen": "2026-09-30T06:00:00.000Z"
  }
}
```

### 2. User Progress Schema (`localStorage: devacademy_progress_<userId>`)
```json
{
  "completedTopics": {
    "web-foundations": [0, 1, 2],
    "responsive-design": [0]
  },
  "quizScores": {
    "web-foundations": {
      "score": 5,
      "total": 5,
      "date": "2026-09-30T05:00:00.000Z"
    }
  },
  "startedPhases": ["web-foundations", "responsive-design"],
  "totalXP": 40,
  "streak": 3,
  "lastActivityDate": "2026-09-30"
}
```

### 3. AI Chat History Schema (`localStorage: devacademy_chat_<userId>`)
```json
[
  {
    "role": "user",
    "content": "What is an HTML element?",
    "agent": "concept",
    "timestamp": 1727654400000
  },
  {
    "role": "assistant",
    "content": "An HTML element is a building block of a web page...",
    "agent": "concept",
    "agentName": "🧠 Concept Explainer",
    "timestamp": 1727654405000
  }
]
```

### 4. Backend AI Chat Payload (`POST /api/ai/chat`)
```json
// Request Body
{
  "message": "Explain async/await in JavaScript",
  "agent": "concept"
}

// NVIDIA NIM API Payload (routes/ai.js)
{
  "model": "meta/llama-3.2-11b-vision-instruct",
  "max_tokens": 400,
  "stream": false,
  "temperature": 0.7,
  "top_p": 1,
  "messages": [
    { "role": "system", "content": "<SYSTEM_PROMPT_BY_AGENT>" },
    { "role": "user", "content": "Explain async/await in JavaScript" }
  ]
}

// Server Response
{
  "success": true,
  "reply": "Async/await is a modern way to handle asynchronous code in JavaScript..."
}
```

---

## 🛠️ Getting Started

### 1. Installation & Setup
```bash
# Install dependencies
npm install

# Create environment configuration
cp .env.example .env
```

### 2. Environment Variables (`.env`)
```env
NVIDIA_API_KEY=nvapi-your-nvidia-api-key-here
PORT=3000
NODE_ENV=development
```

### 3. Running Server
```bash
# Start backend server
npm start
```
Access application at `http://localhost:3000`.

---

## 🚀 Deployment (Hostinger / Production)

1. Rename `.env.example` to `.env` and configure `NVIDIA_API_KEY`.
2. Add static web files into the `public/` folder.
3. Configure environment variables (`NVIDIA_API_KEY`, `NODE_ENV=production`) in Hostinger panel.
4. Deploy using Node.js app runner on Hostinger.
