// EXPANDED MODE CONFIGURATION WITH MORE CARDS
const modes = {
  student: {
    name: "Student Mode",
    greeting:
      "🎓 Hello! I'm your study buddy! Need help with homework, exams, or learning new subjects?",
    accentColor: "#8b5cf6",
    cards: [
      {
        icon: "📚",
        title: "Homework Help",
        desc: "Get help with any subject",
        category: "homework",
      },
      {
        icon: "📝",
        title: "Exam Prep",
        desc: "Study guides & practice tests",
        category: "exams",
      },
      {
        icon: "📖",
        title: "Study Plans",
        desc: "Create study schedules",
        category: "planning",
      },
      {
        icon: "🔬",
        title: "Science Help",
        desc: "Physics, Chemistry, Biology",
        category: "science",
      },
      {
        icon: "🧮",
        title: "Math Tutor",
        desc: "Algebra, Calculus, Statistics",
        category: "math",
      },
      {
        icon: "📝",
        title: "Essay Writing",
        desc: "Improve writing skills",
        category: "writing",
      },
      {
        icon: "🌍",
        title: "History & Geography",
        desc: "Explore world knowledge",
        category: "social",
      },
      {
        icon: "💻",
        title: "Computer Science",
        desc: "Programming basics",
        category: "computers",
      },
      {
        icon: "🎨",
        title: "Arts & Creativity",
        desc: "Creative subjects help",
        category: "arts",
      },
      {
        icon: "🏃",
        title: "Physical Education",
        desc: "Health & fitness guidance",
        category: "pe",
      },
    ],
    suggestions: [
      "Help with math homework",
      "Create a study schedule",
      "Explain photosynthesis",
      "Practice for exams",
      "Improve essay writing",
    ],
  },
  career: {
    name: "Career Mode",
    greeting:
      "💼 Hello! Ready to boost your career? Let's prepare for interviews and job search!",
    accentColor: "#10b981",
    cards: [
      {
        icon: "🎤",
        title: "Interview Prep",
        desc: "Practice mock interviews",
        category: "interviews",
      },
      {
        icon: "📄",
        title: "Resume Builder",
        desc: "Create professional resumes",
        category: "resume",
      },
      {
        icon: "🔍",
        title: "Job Search",
        desc: "Find opportunities",
        category: "jobs",
      },
      {
        icon: "💬",
        title: "Cover Letters",
        desc: "Write compelling letters",
        category: "letters",
      },
      {
        icon: "🚀",
        title: "Career Growth",
        desc: "Skill development",
        category: "growth",
      },
      {
        icon: "🤝",
        title: "Networking",
        desc: "Build professional connections",
        category: "networking",
      },
      {
        icon: "💼",
        title: "Portfolio Building",
        desc: "Showcase your work",
        category: "portfolio",
      },
      {
        icon: "🎯",
        title: "Career Planning",
        desc: "Set career goals",
        category: "planning",
      },
      {
        icon: "💰",
        title: "Salary Negotiation",
        desc: "Get better compensation",
        category: "salary",
      },
      {
        icon: "📈",
        title: "Skill Assessment",
        desc: "Identify strengths",
        category: "assessment",
      },
    ],
    suggestions: [
      "Practice interview questions",
      "Review my resume",
      "Job search tips",
      "Career change advice",
      "Networking strategies",
    ],
  },
  pro: {
    name: "Professional Mode",
    greeting:
      "⚡ Welcome! I'm your skill upgrade partner! Let's learn new technologies and advance your career!",
    accentColor: "#3b82f6",
    cards: [
      {
        icon: "💻",
        title: "Coding Skills",
        desc: "Learn programming",
        category: "coding",
      },
      {
        icon: "📊",
        title: "Data Analysis",
        desc: "Excel, SQL, Python",
        category: "data",
      },
      {
        icon: "🎨",
        title: "Design Skills",
        desc: "UI/UX, Graphics",
        category: "design",
      },
      {
        icon: "📈",
        title: "Business Skills",
        desc: "Management, Marketing",
        category: "business",
      },
      {
        icon: "🔧",
        title: "Tech Skills",
        desc: "Latest technologies",
        category: "tech",
      },
      {
        icon: "🗣️",
        title: "Communication",
        desc: "Presentation skills",
        category: "communication",
      },
      {
        icon: "🤖",
        title: "AI & ML",
        desc: "Artificial Intelligence",
        category: "ai",
      },
      {
        icon: "☁️",
        title: "Cloud Computing",
        desc: "AWS, Azure, GCP",
        category: "cloud",
      },
      {
        icon: "📱",
        title: "Mobile Development",
        desc: "iOS & Android",
        category: "mobile",
      },
      {
        icon: "🔒",
        title: "Cybersecurity",
        desc: "Security best practices",
        category: "security",
      },
    ],
    suggestions: [
      "Learn Python programming",
      "Improve presentation skills",
      "Project management tips",
      "Latest tech trends",
      "Cloud computing basics",
    ],
  },
  hobby: {
    name: "Hobby Mode",
    greeting:
      "🌟 Hey! I'm your learning companion! What new hobby or skill would you like to explore today?",
    accentColor: "#f59e0b",
    cards: [
      {
        icon: "🎵",
        title: "Music",
        desc: "Learn instruments & theory",
        category: "music",
      },
      {
        icon: "🎨",
        title: "Art & Design",
        desc: "Drawing, painting, design",
        category: "art",
      },
      {
        icon: "🍳",
        title: "Cooking",
        desc: "Recipes & techniques",
        category: "cooking",
      },
      {
        icon: "🏋️",
        title: "Fitness",
        desc: "Workouts & nutrition",
        category: "fitness",
      },
      {
        icon: "🌍",
        title: "Languages",
        desc: "Learn new languages",
        category: "languages",
      },
      {
        icon: "📸",
        title: "Photography",
        desc: "Camera skills & editing",
        category: "photography",
      },
      {
        icon: "🌿",
        title: "Gardening",
        desc: "Plant care & design",
        category: "gardening",
      },
      {
        icon: "✍️",
        title: "Writing",
        desc: "Creative writing skills",
        category: "writing",
      },
      {
        icon: "🎮",
        title: "Gaming",
        desc: "Game strategies & skills",
        category: "gaming",
      },
      {
        icon: "🧵",
        title: "Crafts",
        desc: "DIY projects & crafts",
        category: "crafts",
      },
    ],
    suggestions: [
      "Learn guitar chords",
      "Cooking recipes",
      "Fitness workout plan",
      "Language learning tips",
      "Photography techniques",
    ],
  },
};

// CURRENT MODE MANAGEMENT
let currentMode = "student";

// DOM Elements
const modeButtons = document.querySelectorAll(".mode-btn");
const mainGrid = document.getElementById("mainGrid");
const welcomeSuggestions = document.getElementById("welcomeSuggestions");
const greetingText = document.getElementById("greetingText");
const centerChat = document.getElementById("centerChat");
const centerCard = document.getElementById("centerCard");
const cardTitle = document.getElementById("cardTitle");
const cardContent = document.getElementById("cardContent");
const centerChatInput = document.getElementById("centerChatInput");
const centerChatBody = document.getElementById("centerChatBody");
const centerSendBtn = document.getElementById("centerSendBtn");
const chatToggleBtn = document.getElementById("chatToggleBtn");
const particlesContainer = document.getElementById("particlesContainer");
const themeToggle = document.getElementById("themeToggle");

// Initialize Modes
function initializeModes() {
  updateMode("student");
  setupModeEventListeners();
}

function setupModeEventListeners() {
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      updateMode(mode);
    });
  });
}

function updateMode(mode) {
  currentMode = mode;

  // Update active button
  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  // Update cards
  updateCards();

  // Update welcome message and suggestions
  updateWelcomeContent();

  // Update accent color
  updateAccentColor(modes[mode].accentColor);

  showToast(`Switched to ${modes[mode].name}`);
}

function updateCards() {
  const modeData = modes[currentMode];
  mainGrid.innerHTML = "";

  modeData.cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card floating-animation";
    cardElement.dataset.category = card.category;
    cardElement.innerHTML = `
            <div class="card-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
            <div class="badge">NEW</div>
          `;
    mainGrid.appendChild(cardElement);
  });

  // Reattach card click events
  attachCardEvents();
}

function updateWelcomeContent() {
  const modeData = modes[currentMode];

  // Update greeting text
  greetingText.textContent = modeData.greeting;

  // Update suggestions
  welcomeSuggestions.innerHTML = "";
  modeData.suggestions.forEach((suggestion) => {
    const btn = document.createElement("div");
    btn.className = "welcome-btn";
    btn.textContent = suggestion;
    btn.dataset.prompt = suggestion;
    welcomeSuggestions.appendChild(btn);
  });
}

function updateAccentColor(color) {
  document.documentElement.style.setProperty("--accent", color);
}

function attachCardEvents() {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      const title = card.querySelector("h3").textContent;
      showCardPanel(title, category);
    });
  });
}

function showCardPanel(title, category) {
  cardTitle.textContent = title;

  // Dynamic content based on mode and category
  const contentTemplates = {
    student: {
      homework:
        "Get personalized help with your homework assignments across all subjects. I can explain concepts, help solve problems, and provide study resources.",
      exams:
        "Access comprehensive study guides, practice tests, and exam preparation strategies tailored to your learning style.",
      planning:
        "Create customized study schedules and time management plans to maximize your academic performance.",
      science:
        "Explore scientific concepts with interactive explanations, experiments, and real-world applications.",
      math: "Step-by-step math solutions and concept explanations from basic arithmetic to advanced calculus.",
      writing:
        "Improve your essay writing skills with structure guidance, grammar tips, and creative writing techniques.",
      social:
        "Explore historical events, geographical concepts, and social studies with engaging content.",
      computers:
        "Learn programming basics, computer literacy, and digital skills for the modern world.",
      arts: "Develop creative skills in visual arts, music, drama, and other creative subjects.",
      pe: "Get guidance on physical fitness, sports techniques, and health education topics.",
    },
    career: {
      interviews:
        "Practice with realistic interview questions and get instant feedback on your responses and body language.",
      resume:
        "Build professional resumes with AI-powered suggestions, templates, and industry-specific keywords.",
      jobs: "Discover job opportunities and optimize your job search strategy with personalized recommendations.",
      letters:
        "Write compelling cover letters that stand out to employers and highlight your unique qualifications.",
      growth:
        "Develop essential skills and plan your career advancement path with clear milestones.",
      networking:
        "Learn effective networking strategies to build valuable professional connections.",
      portfolio:
        "Create impressive portfolios to showcase your work and achievements effectively.",
      planning:
        "Set clear career goals and create actionable plans to achieve your professional aspirations.",
      salary:
        "Master salary negotiation techniques to get the compensation you deserve.",
      assessment:
        "Identify your strengths and areas for improvement with comprehensive skill assessments.",
    },
    pro: {
      coding:
        "Learn programming languages and develop coding skills with practical projects and real-world applications.",
      data: "Master data analysis tools and techniques for business intelligence and data-driven decision making.",
      design:
        "Develop design skills and create stunning visual presentations, user interfaces, and graphics.",
      business:
        "Enhance your business acumen and professional capabilities with management and leadership skills.",
      tech: "Stay updated with the latest technology trends, tools, and best practices in your industry.",
      communication:
        "Improve your presentation, public speaking, and professional communication skills.",
      ai: "Explore Artificial Intelligence and Machine Learning concepts with practical applications.",
      cloud:
        "Learn cloud computing platforms like AWS, Azure, and Google Cloud with hands-on projects.",
      mobile:
        "Develop mobile applications for iOS and Android platforms with modern development practices.",
      security:
        "Understand cybersecurity principles and implement security best practices in your work.",
    },
    hobby: {
      music:
        "Learn musical instruments, theory, and develop your musical talents with structured lessons.",
      art: "Explore various art forms and develop your creative expression through different mediums.",
      cooking:
        "Discover recipes, techniques, and culinary skills from around the world with step-by-step guidance.",
      fitness:
        "Create personalized workout plans and learn about nutrition, exercise techniques, and wellness.",
      languages:
        "Start learning new languages with interactive lessons, vocabulary building, and conversation practice.",
      photography:
        "Master camera skills, composition techniques, and photo editing for stunning images.",
      gardening:
        "Learn plant care, garden design, and sustainable gardening practices for beautiful spaces.",
      writing:
        "Develop creative writing skills, storytelling techniques, and author best practices.",
      gaming:
        "Improve gaming strategies, learn new skills, and understand game mechanics and design.",
      crafts:
        "Explore DIY projects, crafting techniques, and creative hands-on activities.",
    },
  };

  const content =
    contentTemplates[currentMode]?.[category] ||
    `Explore ${title} features in ${modes[currentMode].name}.`;

  cardContent.innerHTML = `
          <div style="margin-bottom: 15px; line-height: 1.6;">
            <p>${content}</p>
          </div>
          <button class="start-action" style="
            background: linear-gradient(90deg, var(--accent), #3b82f6);
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            color: white;
            cursor: pointer;
            font-weight: 600;
            margin-right: 10px;
          ">Start ${title}</button>
          <button class="ask-visioniq" style="
            background: rgba(16, 185, 129, 0.2);
            border: 1px solid rgba(16, 185, 129, 0.4);
            padding: 10px 20px;
            border-radius: 8px;
            color: #10b981;
            cursor: pointer;
            font-weight: 600;
          ">Ask VisionIQ</button>
        `;

  // Add event listeners to buttons
  const askButton = cardContent.querySelector(".ask-visioniq");
  askButton.onclick = () => {
    hidePanel(centerCard);
    showPanel(centerChat);
    centerChatInput.value = `Tell me about ${title}`;
    centerChatInput.focus();
  };

  // Show the card panel
  hidePanel(centerChat);
  showPanel(centerCard);
}

// VISIONIQ AI PERSONALITY
const visionIQPersonality = {
  getResponse: function (message) {
    const lowerMsg = message.toLowerCase();
    const modeData = modes[currentMode];

    // Mode-specific responses
    if (currentMode === "student") {
      if (lowerMsg.includes("homework") || lowerMsg.includes("assignment")) {
        return "I can help with your homework! Which subject are you working on? 📚";
      }
      if (lowerMsg.includes("exam") || lowerMsg.includes("test")) {
        return "Let's prepare for your exams! I can create study guides and practice questions. 📝";
      }
      if (lowerMsg.includes("math") || lowerMsg.includes("calculate")) {
        return "I can help with math problems! Share the question and I'll explain step by step. 🧮";
      }
    }

    if (currentMode === "career") {
      if (lowerMsg.includes("interview")) {
        return "Great! Let's practice interview questions. What role are you applying for? 🎤";
      }
      if (lowerMsg.includes("resume")) {
        return "I can help improve your resume! Share your experience or ask for formatting tips. 📄";
      }
      if (lowerMsg.includes("job") || lowerMsg.includes("career")) {
        return "I can assist with job search strategies and career planning. What field interests you? 💼";
      }
    }

    if (currentMode === "pro") {
      if (lowerMsg.includes("code") || lowerMsg.includes("programming")) {
        return "Let's work on coding skills! Which language or concept would you like to learn? 💻";
      }
      if (lowerMsg.includes("data") || lowerMsg.includes("analysis")) {
        return "I can help with data analysis techniques and tools. What specific area? 📊";
      }
      if (lowerMsg.includes("design") || lowerMsg.includes("ui")) {
        return "Let's explore design principles and create amazing user experiences! 🎨";
      }
    }

    if (currentMode === "hobby") {
      if (
        lowerMsg.includes("music") ||
        lowerMsg.includes("guitar") ||
        lowerMsg.includes("piano")
      ) {
        return "I love music! What instrument or musical concept would you like to learn? 🎵";
      }
      if (lowerMsg.includes("cook") || lowerMsg.includes("recipe")) {
        return "Let's explore cooking! What type of cuisine or dish interests you? 🍳";
      }
      if (lowerMsg.includes("fitness") || lowerMsg.includes("workout")) {
        return "I can help with fitness goals! What type of workout or fitness level? 🏋️";
      }
      if (lowerMsg.includes("language")) {
        return "Language learning is amazing! Which language would you like to start with? 🌍";
      }
    }

    // Default intelligent response based on mode
    return `I'm here to help with your ${modeData.name.toLowerCase()} needs! What specific area would you like to explore?`;
  },
};

// UI FUNCTIONS
function showPanel(panel) {
  panel.style.display = "flex";
  panel.classList.add("show");
}

function hidePanel(panel) {
  panel.style.display = "none";
  panel.classList.remove("show");
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// CHAT FUNCTIONALITY
async function sendMessage() {
  const val = centerChatInput.value.trim();
  if (!val) return;

  // Show user message
  const userDiv = document.createElement("div");
  userDiv.className = "msg user slide-in";
  userDiv.textContent = val;
  userDiv.innerHTML += `<span class="chat-time">${getCurrentTime()}</span>`;
  centerChatBody.appendChild(userDiv);
  centerChatInput.value = "";
  centerChatBody.scrollTop = centerChatBody.scrollHeight;

  // Show VisionIQ typing with animated dots
  const botDiv = document.createElement("div");
  botDiv.className = "msg bot typing";

  const typingIndicator = document.createElement("div");
  typingIndicator.className = "typing-indicator";
  typingIndicator.innerHTML = `
          VisionIQ is thinking
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        `;

  botDiv.appendChild(typingIndicator);
  centerChatBody.appendChild(botDiv);
  centerChatBody.scrollTop = centerChatBody.scrollHeight;

  // Simulate AI thinking time with VisionIQ personality
  setTimeout(() => {
    botDiv.classList.remove("typing");
    botDiv.innerHTML = "";

    // Use VisionIQ personality for responses
    const visionIQResponse = visionIQPersonality.getResponse(val);
    botDiv.textContent = visionIQResponse;
    botDiv.innerHTML += `<span class="chat-time">${getCurrentTime()}</span>`;

    centerChatBody.scrollTop = centerChatBody.scrollHeight;
  }, 1500 + Math.random() * 1000);
}

// PARTICLE EFFECTS
function createParticles() {
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${8 + Math.random() * 4}s`;
    particlesContainer.appendChild(particle);
  }
}

// EVENT LISTENERS
function setupEventListeners() {
  // Chat toggle
  chatToggleBtn.onclick = () => {
    if (centerChat.style.display === "flex") {
      hidePanel(centerChat);
    } else {
      hidePanel(centerCard);
      showPanel(centerChat);
      centerChatInput.focus();
    }
  };

  // Send message
  centerSendBtn.onclick = sendMessage;
  centerChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
      e.preventDefault();
    }
  });

  // Welcome button handlers
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("welcome-btn")) {
      const prompt = e.target.getAttribute("data-prompt");
      centerChatInput.value = prompt;
      sendMessage();
    }
  });

  // SETTINGS PANEL
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsPanel = document.getElementById("settingsPanel");
  const closeSettings = document.getElementById("closeSettings");
  settingsBtn.onclick = () => settingsPanel.classList.toggle("active");
  closeSettings.onclick = () => settingsPanel.classList.remove("active");
  document.addEventListener("click", (e) => {
    if (
      settingsPanel.classList.contains("active") &&
      !settingsPanel.contains(e.target) &&
      !settingsBtn.contains(e.target)
    ) {
      settingsPanel.classList.remove("active");
    }
  });

  // THEME TOGGLE
  themeToggle.onclick = () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light")
      ? "🌕"
      : "🌑";
    showToast(
      `Theme changed to ${
        document.body.classList.contains("light") ? "light" : "dark"
      } mode`
    );
  };

  // FONT CHANGING
  document.getElementById("fontSelect").addEventListener("change", (e) => {
    const selectedFont = e.target.value;
    document.documentElement.style.setProperty("--font-family", selectedFont);
    showToast(
      `Font changed to ${e.target.options[e.target.selectedIndex].text}`
    );
  });

  // BACKGROUND SETTINGS
  document.getElementById("bgImagePicker").onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      document.body.style.background = `url(${URL.createObjectURL(
        file
      )}) center/cover no-repeat`;
      showToast("Background image updated");
    }
  };

  document.querySelectorAll(".bgPreset").forEach((btn) => {
    btn.onclick = () => {
      document.body.style.background = btn.style.background;
      showToast("Background color updated");
    };
  });

  // RESET SETTINGS
  document.getElementById("resetSettings").onclick = () => {
    document.body.style.background = "";
    document.documentElement.style.setProperty(
      "--font-family",
      "'Inter', system-ui, Arial, sans-serif"
    );
    document.body.classList.remove("light");
    themeToggle.textContent = "🌑";
    document.getElementById("fontSelect").value = "'Inter', system-ui";
    showToast("Settings reset to defaults");
  };

  // Auto-focus chat input when panel opens
  centerChat.addEventListener("transitionend", () => {
    if (centerChat.classList.contains("show")) {
      centerChatInput.focus();
    }
  });
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", function () {
  initializeModes();
  setupEventListeners();
  createParticles();
  showToast("Welcome to VisionIQ! Your universal learning companion 🚀");
});
