// ═══════════════════════════════════════════════
// DEVACADEMY — COMPLETE CURRICULUM DATA
// 11 Phases + Topics + Outcomes + Quizzes
// ═══════════════════════════════════════════════

const CURRICULUM = [
  {
    id: 1,
    emoji: "🟢",
    title: "Web Foundations",
    subtitle: "HTML, CSS & GitHub",
    description: "Learn how to build the structure and style of web pages from scratch. Master HTML, CSS, and version control with Git.",
    color: "#10b981",
    colorLight: "rgba(16,185,129,0.15)",
    topics: [
      "HTML Semantic Tags",
      "Forms, Inputs & Tables",
      "Audio, Video & iFrame",
      "CSS Box Model",
      "Display Properties",
      "Flexbox Basics",
      "Backgrounds & Borders",
      "CSS Selectors",
      "Git Basics (init, add, commit, push)",
      "GitHub Workflow & Hosting",
      "Build a Personal Portfolio"
    ],
    outcomes: [
      "Understand how web pages are structured",
      "Design clean layouts with HTML & CSS",
      "Build responsive layouts using Flexbox",
      "Create forms and UI elements",
      "Use Git for version control",
      "Publish projects on GitHub"
    ],
    quiz: [
      {
        q: "Which HTML tag is used to define the main navigation of a website?",
        options: ["<div>", "<nav>", "<section>", "<header>"],
        answer: 1
      },
      {
        q: "What does the CSS 'box model' consist of?",
        options: [
          "content, padding, border, margin",
          "width, height, color, font",
          "display, position, float, clear",
          "selector, property, value, unit"
        ],
        answer: 0
      },
      {
        q: "Which Git command stages all changed files?",
        options: ["git commit -m", "git push origin", "git add .", "git init"],
        answer: 2
      },
      {
        q: "Which CSS property makes elements display side by side in Flexbox?",
        options: ["flex-direction: column", "flex-direction: row", "display: block", "align-items: center"],
        answer: 1
      },
      {
        q: "What is the correct HTML tag for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<title>"],
        answer: 2
      },
      {
        q: "Which HTML attribute makes a form field required?",
        options: ["mandatory", "required", "must", "validate"],
        answer: 1
      },
      {
        q: "What does CSS stand for?",
        options: ["Creative Style Sheet", "Cascading Style Sheets", "Colored Style Syntax", "Computer Style Script"],
        answer: 1
      }
    ]
  },
  {
    id: 2,
    emoji: "🟢",
    title: "Responsive Design",
    subtitle: "Frameworks & Grid",
    description: "Master advanced CSS layouts, media queries, and Tailwind CSS to build websites that look great on any device.",
    color: "#06b6d4",
    colorLight: "rgba(6,182,212,0.15)",
    topics: [
      "Advanced Flexbox",
      "CSS Grid",
      "Multi-section Layouts",
      "Media Queries & Breakpoints",
      "Mobile-first Design",
      "Desktop-first Design",
      "Tailwind CSS Utility Classes",
      "Responsive Navigation",
      "Card Layouts",
      "Responsive Images"
    ],
    outcomes: [
      "Build fully responsive websites",
      "Create professional layouts using Grid & Flexbox",
      "Design for mobile, tablet, and desktop",
      "Use Tailwind CSS for rapid UI development"
    ],
    quiz: [
      {
        q: "What CSS property makes a container use CSS Grid?",
        options: ["display: flex", "display: grid", "position: grid", "layout: grid"],
        answer: 1
      },
      {
        q: "What does 'mobile-first design' mean?",
        options: [
          "Designing only for mobile phones",
          "Starting with mobile styles and adding larger screen styles using min-width media queries",
          "Using mobile apps instead of websites",
          "Making websites download faster"
        ],
        answer: 1
      },
      {
        q: "Which CSS property creates columns in a grid layout?",
        options: ["grid-template-columns", "grid-columns", "columns", "flex-columns"],
        answer: 0
      },
      {
        q: "What media query targets screens wider than 768px?",
        options: [
          "@media (max-width: 768px)",
          "@media screen-size: tablet",
          "@media (min-width: 768px)",
          "@media width > 768"
        ],
        answer: 2
      },
      {
        q: "In Tailwind CSS, what class makes text extra large?",
        options: ["text-big", "text-xl", "font-large", "size-xl"],
        answer: 1
      },
      {
        q: "Which CSS Grid property places content into specific columns?",
        options: ["grid-column", "column-span", "grid-area", "grid-position"],
        answer: 0
      }
    ]
  },
  {
    id: 3,
    emoji: "🟢",
    title: "JavaScript Fundamentals",
    subtitle: "Core Programming Logic",
    description: "Learn the core of JavaScript — variables, conditions, loops, functions, and how to solve programming problems.",
    color: "#f59e0b",
    colorLight: "rgba(245,158,11,0.15)",
    topics: [
      "Variables: var, let, const",
      "Data Types",
      "Operators",
      "If/Else Conditions",
      "Switch Statements",
      "For & While Loops",
      "Arrays & Array Methods",
      "Strings & String Methods",
      "Objects",
      "Functions",
      "Scope & Closures",
      "Problem Solving"
    ],
    outcomes: [
      "Add logic to web pages",
      "Work with data and conditions",
      "Build reusable functions",
      "Solve basic programming problems"
    ],
    quiz: [
      {
        q: "What is the correct way to declare a constant variable in JavaScript?",
        options: ["var myVar = 5;", "let myVar = 5;", "const myVar = 5;", "constant myVar = 5;"],
        answer: 2
      },
      {
        q: "What does this code output? console.log(typeof 'hello')",
        options: ["string", "text", "String", "char"],
        answer: 0
      },
      {
        q: "How do you add an item to the end of an array?",
        options: ["array.add(item)", "array.push(item)", "array.append(item)", "array.insert(item)"],
        answer: 1
      },
      {
        q: "Which operator checks both value AND type equality?",
        options: ["==", "===", "=", "!=="],
        answer: 1
      },
      {
        q: "What is a function in JavaScript?",
        options: [
          "A variable that stores numbers",
          "A reusable block of code that performs a task",
          "A way to style HTML elements",
          "A type of loop"
        ],
        answer: 1
      },
      {
        q: "What does this code output? console.log(2 + '3')",
        options: ["5", "23", "Error", "undefined"],
        answer: 1
      },
      {
        q: "How do you access the first element of an array called 'fruits'?",
        options: ["fruits[1]", "fruits.first()", "fruits[0]", "fruits.get(0)"],
        answer: 2
      }
    ]
  },
  {
    id: 4,
    emoji: "🟢",
    title: "DOM & Interactive JS",
    subtitle: "Make Websites Come Alive",
    description: "Learn to dynamically manipulate web pages, handle user events, and build interactive UI components.",
    color: "#f97316",
    colorLight: "rgba(249,115,22,0.15)",
    topics: [
      "What is the DOM",
      "Selecting Elements (getElementById, querySelector)",
      "Changing Content & Styles",
      "Creating & Removing Elements",
      "Event Handling (click, input, submit)",
      "Event Bubbling & Delegation",
      "Form Validation",
      "LocalStorage Basics",
      "Dynamic UI Components",
      "Build a Todo App Project"
    ],
    outcomes: [
      "Make websites interactive",
      "Handle user actions (click, input, etc.)",
      "Dynamically update UI without reloading",
      "Build small interactive projects"
    ],
    quiz: [
      {
        q: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Module", "Display Object Map", "Dynamic Object Method"],
        answer: 0
      },
      {
        q: "Which method selects an element by its CSS class?",
        options: [
          "document.getElementById('.myClass')",
          "document.querySelector('.myClass')",
          "document.getElement('.myClass')",
          "document.find('.myClass')"
        ],
        answer: 1
      },
      {
        q: "How do you add a click event listener to a button?",
        options: [
          "button.click = function() {}",
          "button.on('click', function() {})",
          "button.addEventListener('click', function() {})",
          "button.onclick.add(function() {})"
        ],
        answer: 2
      },
      {
        q: "Which property changes the text content of an HTML element?",
        options: ["element.html", "element.innerText", "element.content", "element.text"],
        answer: 1
      },
      {
        q: "How do you create a new HTML element in JavaScript?",
        options: [
          "document.newElement('div')",
          "document.createElement('div')",
          "document.make('div')",
          "new HTMLElement('div')"
        ],
        answer: 1
      },
      {
        q: "What is event bubbling?",
        options: [
          "When events create soap bubbles on screen",
          "When an event on a child element also triggers on parent elements",
          "When multiple events happen at the same time",
          "When events are delayed"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 5,
    emoji: "🟢",
    title: "Modern JavaScript",
    subtitle: "ES6+ & API Integration",
    description: "Master modern JavaScript features and learn to fetch and display real data from APIs.",
    color: "#8b5cf6",
    colorLight: "rgba(139,92,246,0.15)",
    topics: [
      "Arrow Functions",
      "Destructuring (Array & Object)",
      "Spread & Rest Operators",
      "Template Literals",
      "Array Methods: map, filter, reduce",
      "Optional Chaining (?.)",
      "Nullish Coalescing (??)",
      "Promises",
      "Async / Await",
      "The Event Loop",
      "JSON Handling",
      "Fetch API",
      "REST API Integration",
      "Error Handling with try/catch"
    ],
    outcomes: [
      "Write clean, modern JavaScript",
      "Fetch and display API data",
      "Handle asynchronous operations",
      "Debug and optimize code"
    ],
    quiz: [
      {
        q: "What is the arrow function equivalent of: function add(a,b){ return a + b; }",
        options: [
          "arrow add(a,b) => a + b",
          "const add = (a,b) => a + b;",
          "function add = (a,b) => a + b;",
          "let add(a,b) { return a + b }"
        ],
        answer: 1
      },
      {
        q: "What does 'async/await' help with?",
        options: [
          "Making code run faster",
          "Writing asynchronous code that looks synchronous (easier to read)",
          "Avoiding the use of functions",
          "CSS animations"
        ],
        answer: 1
      },
      {
        q: "What does this code do? const {name, age} = person;",
        options: [
          "Creates a copy of the person object",
          "Extracts 'name' and 'age' properties from the person object",
          "Deletes name and age from person",
          "Merges two objects"
        ],
        answer: 1
      },
      {
        q: "Which array method returns a new array with only items that pass a test?",
        options: ["map()", "filter()", "reduce()", "find()"],
        answer: 1
      },
      {
        q: "What is a REST API?",
        options: [
          "A way to make your website rest/sleep",
          "A set of rules for building web services that communicate over HTTP",
          "A database system",
          "A JavaScript framework"
        ],
        answer: 1
      },
      {
        q: "What does fetch() return?",
        options: ["JSON data directly", "A Promise", "A string", "An array"],
        answer: 1
      }
    ]
  },
  {
    id: 6,
    emoji: "⚛️",
    title: "React Fundamentals",
    subtitle: "Modern Frontend Library",
    description: "Build powerful, reusable UI components and manage dynamic data with React.js.",
    color: "#38bdf8",
    colorLight: "rgba(56,189,248,0.15)",
    topics: [
      "What is React & Why Use It",
      "JSX Syntax",
      "Functional Components",
      "Props & PropTypes",
      "State with useState",
      "useEffect Hook",
      "Handling Events in React",
      "Conditional Rendering",
      "Lists & Keys",
      "NPM & Package Management",
      "Fetching Data in React",
      "Data Visualization with Recharts"
    ],
    outcomes: [
      "Build reusable UI components",
      "Manage dynamic data with state",
      "Fetch and display API data in React",
      "Create modern frontend apps"
    ],
    quiz: [
      {
        q: "What is JSX in React?",
        options: [
          "A type of CSS",
          "JavaScript XML — HTML-like syntax inside JavaScript",
          "A React package manager",
          "A database query language"
        ],
        answer: 1
      },
      {
        q: "What hook manages local component state?",
        options: ["useEffect", "useRef", "useState", "useContext"],
        answer: 2
      },
      {
        q: "What are 'props' in React?",
        options: [
          "Properties passed from a parent component to a child component",
          "Internal component state",
          "CSS class names",
          "Database fields"
        ],
        answer: 0
      },
      {
        q: "When does useEffect run by default?",
        options: [
          "Only once when the component mounts",
          "After every render",
          "Only when clicked",
          "Before rendering starts"
        ],
        answer: 1
      },
      {
        q: "How do you correctly render a list of items in React?",
        options: [
          "Using a for loop inside JSX",
          "Using array.map() and giving each item a unique 'key' prop",
          "Using array.forEach() in JSX",
          "Using the <list> HTML tag"
        ],
        answer: 1
      },
      {
        q: "What does useState(0) return?",
        options: [
          "The number 0",
          "An array with the current state value and a setter function",
          "A boolean",
          "A Promise"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 7,
    emoji: "⚛️",
    title: "Advanced React",
    subtitle: "Hooks, Context & Next.js Intro",
    description: "Level up with advanced hooks, global state management, routing, and an introduction to Next.js.",
    color: "#a78bfa",
    colorLight: "rgba(167,139,250,0.15)",
    topics: [
      "useRef Hook",
      "useMemo & useCallback",
      "Custom Hooks",
      "Context API",
      "React Router v6",
      "Nested Routes",
      "Protected Routes",
      "Axios for HTTP requests",
      "Error Boundaries",
      "React Query Basics",
      "Introduction to Next.js",
      "Why Next.js over React"
    ],
    outcomes: [
      "Build scalable React apps",
      "Manage global state with Context",
      "Implement routing systems",
      "Understand Next.js advantages"
    ],
    quiz: [
      {
        q: "What is the Context API used for in React?",
        options: [
          "Styling components",
          "Sharing state globally without prop drilling",
          "Making API calls",
          "Animating elements"
        ],
        answer: 1
      },
      {
        q: "What is a 'custom hook' in React?",
        options: [
          "A hook provided by React's built-in library",
          "A reusable function that uses React hooks and starts with 'use'",
          "A CSS hook for styling",
          "A database hook"
        ],
        answer: 1
      },
      {
        q: "What is 'prop drilling'?",
        options: [
          "A CSS technique",
          "Passing props through multiple levels of components unnecessarily",
          "A way to drill holes in data",
          "A React debugging tool"
        ],
        answer: 1
      },
      {
        q: "What is the main advantage of Next.js over plain React?",
        options: [
          "Next.js has better styling",
          "Next.js provides server-side rendering, file-based routing, and better SEO",
          "Next.js runs faster on mobile",
          "Next.js has more hooks"
        ],
        answer: 1
      },
      {
        q: "What does useRef return?",
        options: [
          "A state value with a setter",
          "A mutable ref object with a .current property that doesn't cause re-renders",
          "A boolean",
          "An event handler"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 8,
    emoji: "⚡",
    title: "Next.js & Authentication",
    subtitle: "Full Power of Next.js",
    description: "Build production-ready applications with Next.js, authentication, SEO, and performance optimization.",
    color: "#ffffff",
    colorLight: "rgba(255,255,255,0.08)",
    topics: [
      "File-based Routing in Next.js",
      "Dynamic Routes ([id].js)",
      "Nested Routes & Layouts",
      "SEO with next/head",
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Incremental Static Regeneration (ISR)",
      "Image Optimization with next/image",
      "API Routes in Next.js",
      "Middleware",
      "NextAuth.js Setup",
      "OAuth (Google, GitHub Login)",
      "JWT Sessions",
      "Role-based Access"
    ],
    outcomes: [
      "Build SEO-friendly Next.js applications",
      "Implement authentication systems",
      "Optimize app performance",
      "Deploy Next.js applications to Vercel"
    ],
    quiz: [
      {
        q: "How does Next.js handle routing?",
        options: [
          "Using React Router like regular React",
          "File-based routing — every file in the pages/ folder becomes a route",
          "Manual route configuration in a config file",
          "URL parameters only"
        ],
        answer: 1
      },
      {
        q: "What is Server-Side Rendering (SSR)?",
        options: [
          "The server renders the page for every request, sending HTML to the browser",
          "The browser renders everything with JavaScript",
          "Pre-rendering pages at build time",
          "Caching static files"
        ],
        answer: 0
      },
      {
        q: "What function enables SSG (Static Site Generation) in Next.js?",
        options: ["getServerSideProps", "getStaticProps", "generateStaticPage", "buildStaticSite"],
        answer: 1
      },
      {
        q: "What does NextAuth.js provide?",
        options: [
          "Database management",
          "Easy-to-implement authentication with providers like Google and GitHub",
          "CSS-in-JS styling",
          "API documentation"
        ],
        answer: 1
      },
      {
        q: "What is the benefit of next/image over a regular <img> tag?",
        options: [
          "It adds filters to images",
          "It automatically optimizes, lazy loads, and resizes images",
          "It allows SVG animations",
          "It adds a border to all images"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 9,
    emoji: "🟣",
    title: "Backend Development",
    subtitle: "Express.js & MongoDB",
    description: "Build powerful backend APIs with Express.js, connect to MongoDB, and implement secure JWT authentication.",
    color: "#ec4899",
    colorLight: "rgba(236,72,153,0.15)",
    topics: [
      "What is a Backend Server",
      "Node.js Basics",
      "Express.js Setup",
      "REST API Design",
      "HTTP Methods (GET, POST, PUT, DELETE)",
      "Route Parameters & Query Strings",
      "MongoDB Atlas Setup",
      "Mongoose ODM",
      "Schema & Model Design",
      "CRUD Operations",
      "JWT Authentication",
      "Password Hashing with bcrypt",
      "Protected Routes Middleware",
      "CORS & Environment Variables",
      "Deploy to Railway/Render"
    ],
    outcomes: [
      "Build backend REST APIs",
      "Connect frontend with backend",
      "Manage databases with MongoDB",
      "Implement secure JWT authentication"
    ],
    quiz: [
      {
        q: "What is Express.js?",
        options: [
          "A frontend JavaScript framework",
          "A minimal Node.js web framework for building APIs and servers",
          "A database system",
          "A CSS framework"
        ],
        answer: 1
      },
      {
        q: "Which HTTP method is used to CREATE a new resource?",
        options: ["GET", "PUT", "POST", "DELETE"],
        answer: 2
      },
      {
        q: "What is MongoDB?",
        options: [
          "A SQL relational database",
          "A NoSQL document database that stores data as JSON-like documents",
          "A JavaScript framework",
          "A cloud hosting service"
        ],
        answer: 1
      },
      {
        q: "What does JWT stand for?",
        options: [
          "JavaScript Web Tool",
          "JSON Web Token",
          "Java Web Transaction",
          "JSON Write Type"
        ],
        answer: 1
      },
      {
        q: "What middleware function is needed to read JSON body in Express?",
        options: [
          "app.use(express.json())",
          "app.readJSON()",
          "app.bodyParser()",
          "app.use(json.parse())"
        ],
        answer: 0
      },
      {
        q: "What is Mongoose?",
        options: [
          "A library for building REST APIs",
          "An ODM library that makes working with MongoDB easier in Node.js",
          "A CSS framework",
          "A testing library"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 10,
    emoji: "🟣",
    title: "Full-Stack Final Project",
    subtitle: "Build & Deploy Everything",
    description: "Apply everything you've learned to build and deploy a complete, production-ready full-stack application.",
    color: "#f43f5e",
    colorLight: "rgba(244,63,94,0.15)",
    topics: [
      "Full-Stack Architecture Planning",
      "Project Folder Structure",
      "Frontend (Next.js) Setup",
      "Backend (Express + MongoDB) Setup",
      "Connecting Frontend to Backend API",
      "Authentication & Authorization",
      "User Roles & Permissions",
      "File Upload (Cloudinary)",
      "Payment Integration (Stripe)",
      "Real-time Features (Socket.io)",
      "Testing with Jest",
      "CI/CD with GitHub Actions",
      "Deployment: Vercel + Railway",
      "Post-Launch Monitoring"
    ],
    outcomes: [
      "Build a production-ready full-stack application",
      "Implement secure login systems",
      "Structure scalable projects",
      "Deploy live applications to production"
    ],
    quiz: [
      {
        q: "What is a typical full-stack application architecture?",
        options: [
          "Only a frontend with no backend",
          "Frontend (React/Next.js) + Backend (Node/Express) + Database (MongoDB)",
          "Only a database with no frontend",
          "WordPress + PHP"
        ],
        answer: 1
      },
      {
        q: "What is the purpose of environment variables (.env files)?",
        options: [
          "To style the application",
          "To store sensitive information (API keys, database URLs) outside of code",
          "To define CSS themes",
          "To configure TypeScript"
        ],
        answer: 1
      },
      {
        q: "What is CORS?",
        options: [
          "A CSS feature",
          "A security policy that controls which domains can access your API",
          "A database backup system",
          "A deployment tool"
        ],
        answer: 1
      },
      {
        q: "What is CI/CD?",
        options: [
          "Code inspection / code delivery",
          "Continuous Integration / Continuous Deployment — automated testing and deployment",
          "Client Interface / Client Design",
          "Component Integration / Component Development"
        ],
        answer: 1
      },
      {
        q: "Which platform is recommended for deploying Next.js apps?",
        options: ["Heroku", "Vercel", "Netlify (frontend only)", "AWS EC2"],
        answer: 1
      }
    ]
  },
  {
    id: 11,
    emoji: "🤖",
    title: "AI-Powered Development",
    subtitle: "Vibe Coding with AI",
    description: "Learn to supercharge your development workflow using AI tools — generate code, debug faster, and build smarter.",
    color: "#7c3aed",
    colorLight: "rgba(124,58,237,0.15)",
    topics: [
      "The AI-Assisted Development Workflow",
      "Prompt Engineering for Developers",
      "Using v0.dev for UI Generation",
      "Using GitHub Copilot",
      "ChatGPT for Coding",
      "AI Debugging Techniques",
      "AI Code Refactoring",
      "Database Design with AI",
      "Generating Tests with AI",
      "AI for Code Review",
      "Building with Cursor IDE",
      "Modern Vibe Coding Workflow"
    ],
    outcomes: [
      "Use AI to speed up development 10x",
      "Generate UI and code efficiently",
      "Debug and optimize projects with AI",
      "Understand modern AI-first development workflows"
    ],
    quiz: [
      {
        q: "What is 'prompt engineering' in the context of AI development?",
        options: [
          "Engineering the AI model itself",
          "Crafting effective instructions/queries to get the best output from AI tools",
          "A type of software testing",
          "Writing HTML prompts"
        ],
        answer: 1
      },
      {
        q: "What can v0.dev help you do?",
        options: [
          "Deploy applications to the cloud",
          "Generate React UI components from text descriptions",
          "Manage your MongoDB database",
          "Write CSS automatically"
        ],
        answer: 1
      },
      {
        q: "What is GitHub Copilot?",
        options: [
          "A GitHub project management tool",
          "An AI pair programmer that suggests code completions in your editor",
          "A code review platform",
          "A CI/CD tool"
        ],
        answer: 1
      },
      {
        q: "What is 'vibe coding'?",
        options: [
          "Coding while listening to music",
          "A development approach that heavily uses AI tools to describe, generate, and iterate on code",
          "A new frontend framework",
          "A dark mode coding style"
        ],
        answer: 1
      },
      {
        q: "How can AI help with debugging?",
        options: [
          "It cannot help with debugging",
          "It can analyze error messages, identify root causes, and suggest fixes",
          "It automatically fixes all bugs without human input",
          "It only works for CSS bugs"
        ],
        answer: 1
      }
    ]
  }
];

// Phase color map for quick access
const PHASE_COLORS = CURRICULUM.reduce((acc, p) => { acc[p.id] = p.color; return acc; }, {});
