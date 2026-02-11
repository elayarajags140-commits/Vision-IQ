// VisionIQ - Coding Interview Assistant
// Phase 1: Frontend Implementation

// ====================
// PROBLEM DATABASE
// ====================
const problems = {
  javascript: [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "easy",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      companies: ["Google", "Amazon", "Microsoft"],
      acceptance: 57,
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
        },
      ],
      boilerplate: `function twoSum(nums, target) {
    // Your code here
}`,
      testCases: [
        { input: "[[2,7,11,15], 9]", output: "[0,1]" },
        { input: "[[3,2,4], 6]", output: "[1,2]" },
        { input: "[[3,3], 6]", output: "[0,1]" },
      ],
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "easy",
      description:
        "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      companies: ["Facebook", "Apple", "Adobe"],
      acceptance: 72,
      boilerplate: `function reverseList(head) {
    // Your code here
}`,
      testCases: [
        { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
        { input: "[1,2]", output: "[2,1]" },
        { input: "[]", output: "[]" },
      ],
    },
    {
      id: 3,
      title: "Binary Tree Inorder Traversal",
      difficulty: "medium",
      description:
        "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      companies: ["Google", "Amazon", "Bloomberg"],
      acceptance: 68,
      boilerplate: `function inorderTraversal(root) {
    // Your code here
}`,
      testCases: [
        { input: "[1,null,2,3]", output: "[1,3,2]" },
        { input: "[]", output: "[]" },
        { input: "[1]", output: "[1]" },
      ],
    },
  ],
  python: [
    // Similar structure for Python problems
  ],
  java: [
    // Similar structure for Java problems
  ],
  cpp: [
    // Similar structure for C++ problems
  ],
};

// ====================
// STATE MANAGEMENT
// ====================
let currentState = {
  language: "javascript",
  currentProblemId: 1,
  editorContent: "",
  theme: "dark",
  fontSize: 16,
  autoComplete: true,
  showLineNumbers: true,
};

// ====================
// DOM ELEMENTS
// ====================
const elements = {
  languageSelect: document.getElementById("languageSelect"),
  codeEditor: document.getElementById("codeEditor"),
  problemTitle: document.getElementById("problemTitle"),
  problemDescription: document.getElementById("problemDescription"),
  problemList: document.getElementById("problemList"),
  runCodeBtn: document.getElementById("runCodeBtn"),
  submitCodeBtn: document.getElementById("submitCodeBtn"),
  resetCodeBtn: document.getElementById("resetCodeBtn"),
  hintBtn: document.getElementById("hintBtn"),
  chatToggleBtn: document.getElementById("chatToggleBtn"),
  chatPanel: document.getElementById("chatPanel"),
  chatInput: document.getElementById("chatInput"),
  sendChatBtn: document.getElementById("sendChatBtn"),
  closeChatBtn: document.getElementById("closeChatBtn"),
  settingsBtn: document.getElementById("settingsBtn"),
  settingsPanel: document.getElementById("settingsPanel"),
  closeSettings: document.getElementById("closeSettings"),
  themeToggle: document.getElementById("themeToggle"),
  modeButtons: document.querySelectorAll(".mode-btn"),
  difficultyButtons: document.querySelectorAll(".difficulty-btn"),
  tabButtons: document.querySelectorAll(".tab-btn"),
  tabContents: document.querySelectorAll(".tab-content"),
};

// ====================
// INITIALIZATION
// ====================
function initializeApp() {
  loadProblems();
  loadCurrentProblem();
  setupEventListeners();
  initializeCodeEditor();
  showToast("🚀 VisionIQ Coding Assistant Ready!");
}

// ====================
// PROBLEM MANAGEMENT
// ====================
function loadProblems() {
  const language = currentState.language;
  const problemList = problems[language];

  elements.problemList.innerHTML = "";

  problemList.forEach((problem) => {
    const problemItem = document.createElement("div");
    problemItem.className = `problem-item ${problem.id === currentState.currentProblemId ? "active" : ""}`;
    problemItem.innerHTML = `
            <div class="problem-item-title">${problem.title}</div>
            <div class="problem-item-meta">
                <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
                <span class="acceptance">${problem.acceptance}%</span>
            </div>
        `;

    problemItem.addEventListener("click", () => {
      currentState.currentProblemId = problem.id;
      loadCurrentProblem();
    });

    elements.problemList.appendChild(problemItem);
  });
}

function loadCurrentProblem() {
  const language = currentState.language;
  const problem = problems[language].find(
    (p) => p.id === currentState.currentProblemId,
  );

  if (!problem) return;

  // Update problem display
  elements.problemTitle.textContent = problem.title;
  elements.problemDescription.innerHTML = `
        <p>${problem.description}</p>
        ${
          problem.examples
            ? `
            <div class="example">
                <h4>Example:</h4>
                <pre>Input: ${problem.examples[0].input}\nOutput: ${problem.examples[0].output}</pre>
            </div>
        `
            : ""
        }
    `;

  // Update boilerplate code
  elements.codeEditor.value = problem.boilerplate;
  currentState.editorContent = problem.boilerplate;

  // Update test cases display
  updateTestCasesDisplay(problem.testCases);

  // Refresh problem list highlights
  document.querySelectorAll(".problem-item").forEach((item) => {
    item.classList.toggle(
      "active",
      parseInt(item.querySelector(".problem-item-title").textContent) ===
        problem.id,
    );
  });
}

function updateTestCasesDisplay(testCases) {
  const testCasesContainer = document.getElementById("test-cases");
  testCasesContainer.innerHTML = "";

  testCases.forEach((testCase, index) => {
    const testCaseElement = document.createElement("div");
    testCaseElement.className = "test-case";
    testCaseElement.innerHTML = `
            <div class="test-case-header">
                <span class="test-case-name">Case ${index + 1}</span>
                <span class="test-case-status pending">Pending</span>
            </div>
            <pre class="test-case-input">${testCase.input}</pre>
            <pre class="test-case-expected">Expected: ${testCase.output}</pre>
        `;
    testCasesContainer.appendChild(testCaseElement);
  });
}

// ====================
// CODE EXECUTION
// ====================
function runCode() {
  const code = elements.codeEditor.value;
  const language = currentState.language;
  const problem = problems[language].find(
    (p) => p.id === currentState.currentProblemId,
  );

  showToast("🔄 Running code...");

  // In Phase 1: Simulate execution
  setTimeout(() => {
    const testCasesContainer = document.getElementById("test-cases");
    const testCases = testCasesContainer.querySelectorAll(".test-case");

    testCases.forEach((testCase, index) => {
      const status = testCase.querySelector(".test-case-status");
      if (index === 0) {
        status.textContent = "✓ Passed";
        status.className = "test-case-status passed";
      } else if (index === 1) {
        status.textContent = "✗ Failed";
        status.className = "test-case-status failed";
      } else {
        status.textContent = "⚠ Error";
        status.className = "test-case-status error";
      }
    });

    // Update output tab
    document.getElementById("output").innerHTML = `
            <pre>Running tests...
✅ Test Case 1: Passed
❌ Test Case 2: Failed
⚠ Test Case 3: Error</pre>
        `;

    showToast("✅ Code execution completed!");
  }, 1000);
}

function submitCode() {
  showToast("📤 Submitting code for AI review...");

  // Switch to AI Feedback tab
  switchTab("ai-feedback");

  setTimeout(() => {
    document.getElementById("ai-feedback").innerHTML = `
            <div class="ai-feedback">
                <h4>🤖 AI Analysis</h4>
                <div class="feedback-section">
                    <h5>✅ Correctness: 66%</h5>
                    <p>Your solution passes 2 out of 3 test cases.</p>
                </div>
                <div class="feedback-section">
                    <h5>⏱️ Time Complexity: O(n²)</h5>
                    <p>Consider using a hash map to achieve O(n) time complexity.</p>
                </div>
                <div class="feedback-section">
                    <h5>💾 Space Complexity: O(1)</h5>
                    <p>Good job on constant space usage!</p>
                </div>
                <div class="feedback-section">
                    <h5>💡 Suggestions</h5>
                    <pre>// Optimized solution:
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}</pre>
                </div>
            </div>
        `;

    showToast("🎯 AI feedback generated!");
  }, 2000);
}

function getHint() {
  const problem = problems[currentState.language].find(
    (p) => p.id === currentState.currentProblemId,
  );

  const hints = {
    1: "Try using a hash map to store numbers and their indices.",
    2: "Use three pointers: previous, current, and next.",
    3: "Recursive approach: left → root → right",
  };

  showToast(`💡 Hint: ${hints[problem.id] || "Think about edge cases!"}`);
}

// ====================
// CHAT ASSISTANT
// ====================
function sendChatMessage() {
  const message = elements.chatInput.value.trim();
  if (!message) return;

  // Add user message
  addChatMessage(message, "user");
  elements.chatInput.value = "";

  // Show typing indicator
  showTypingIndicator();

  // Simulate AI response
  setTimeout(() => {
    removeTypingIndicator();
    const aiResponse = generateAIResponse(message);
    addChatMessage(aiResponse, "bot");
  }, 1000);
}

function addChatMessage(content, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `msg ${sender}`;
  msgDiv.textContent = content;
  elements.chatPanel.querySelector(".chat-body").appendChild(msgDiv);

  // Scroll to bottom
  const chatBody = elements.chatPanel.querySelector(".chat-body");
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "msg bot typing";
  typingDiv.innerHTML = `
        <div class="typing-indicator">
            <span>AI is typing</span>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
  elements.chatPanel.querySelector(".chat-body").appendChild(typingDiv);
}

function removeTypingIndicator() {
  const typing = elements.chatPanel.querySelector(".typing");
  if (typing) typing.remove();
}

function generateAIResponse(message) {
  const lowerMsg = message.toLowerCase();

  if (
    lowerMsg.includes("complexity") ||
    lowerMsg.includes("time") ||
    lowerMsg.includes("space")
  ) {
    return "The optimal solution for Two Sum has O(n) time complexity and O(n) space complexity using a hash map.";
  } else if (
    lowerMsg.includes("solution") ||
    lowerMsg.includes("solve") ||
    lowerMsg.includes("answer")
  ) {
    return "Here's a solution for Two Sum:\n```javascript\nfunction twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n}\n```";
  } else if (
    lowerMsg.includes("explain") ||
    lowerMsg.includes("how") ||
    lowerMsg.includes("why")
  ) {
    return "The Two Sum problem can be solved efficiently using a hash map. Store each number's index as you iterate. For each number, check if its complement (target - current) exists in the map.";
  } else {
    return "I can help you with algorithm explanations, code reviews, complexity analysis, and solution approaches. What specific aspect would you like help with?";
  }
}

// ====================
// UI CONTROLS
// ====================
function switchTab(tabName) {
  // Update tab buttons
  elements.tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  // Update tab contents
  elements.tabContents.forEach((content) => {
    content.classList.toggle("active", content.id === tabName);
  });
}

function toggleChatPanel() {
  elements.chatPanel.classList.toggle("show");
}

function toggleSettingsPanel() {
  elements.settingsPanel.classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("light");
  elements.themeToggle.textContent = document.body.classList.contains("light")
    ? "🌕"
    : "🌑";
  showToast(
    `Theme changed to ${document.body.classList.contains("light") ? "light" : "dark"} mode`,
  );
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ====================
// EVENT LISTENERS
// ====================
function setupEventListeners() {
  // Mode selection (languages)
  elements.modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      elements.modeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentState.language = btn.dataset.mode;
      elements.languageSelect.value = currentState.language;
      loadProblems();
      loadCurrentProblem();
    });
  });

  // Language selection in editor
  elements.languageSelect.addEventListener("change", (e) => {
    currentState.language = e.target.value;
    elements.modeButtons.forEach((b) => b.classList.remove("active"));
    document
      .querySelector(`.mode-btn.${currentState.language}`)
      .classList.add("active");
    loadProblems();
    loadCurrentProblem();
  });

  // Code execution buttons
  elements.runCodeBtn.addEventListener("click", runCode);
  elements.submitCodeBtn.addEventListener("click", submitCode);
  elements.resetCodeBtn.addEventListener("click", () => {
    elements.codeEditor.value = problems[currentState.language].find(
      (p) => p.id === currentState.currentProblemId,
    ).boilerplate;
    showToast("Code reset to boilerplate");
  });
  elements.hintBtn.addEventListener("click", getHint);

  // Chat controls
  elements.chatToggleBtn.addEventListener("click", toggleChatPanel);
  elements.closeChatBtn.addEventListener("click", () =>
    elements.chatPanel.classList.remove("show"),
  );
  elements.sendChatBtn.addEventListener("click", sendChatMessage);
  elements.chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatMessage();
  });

  // Settings controls
  elements.settingsBtn.addEventListener("click", toggleSettingsPanel);
  elements.closeSettings.addEventListener("click", () =>
    elements.settingsPanel.classList.remove("active"),
  );
  elements.themeToggle.addEventListener("click", toggleTheme);

  // Tab switching
  elements.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // Difficulty filtering
  elements.difficultyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      elements.difficultyButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      // Filter problems by difficulty
    });
  });

  // Close settings when clicking outside
  document.addEventListener("click", (e) => {
    if (
      elements.settingsPanel.classList.contains("active") &&
      !elements.settingsPanel.contains(e.target) &&
      !elements.settingsBtn.contains(e.target)
    ) {
      elements.settingsPanel.classList.remove("active");
    }
  });

  // Save code on change
  elements.codeEditor.addEventListener("input", (e) => {
    currentState.editorContent = e.target.value;
  });
}

function initializeCodeEditor() {
  // CodeMirror integration can be added here in Phase 2
  // For now, using textarea
}

// ====================
// START APPLICATION
// ====================
document.addEventListener("DOMContentLoaded", initializeApp);
