/* ============================================================
   Testbook Widget Interactive State & Analytics Engine
   Powers the 4x5 Prime Flagship Widget & Multi-State Simulator
   ============================================================ */

// Mascot Assets generated via Gemini-3.1-Flash-Image
const MASCOT_ASSETS = {
  default: 'assets/mascot/mascot_default.png',
  happy: 'assets/mascot/mascot_happy.png',
  workout: 'assets/mascot/mascot_workout.png',
  urgent: 'assets/mascot/mascot_urgent.png',
  celebration: 'assets/mascot/mascot_celebration.png',
  sleepy: 'assets/mascot/mascot_sleepy.png'
};

// Analytics Data Models
const ANALYTICS_DATA = {
  attempts: {
    title: 'Attempts',
    svgPath: 'M 10 55 L 60 48 L 115 52 L 170 38 L 225 10 L 280 44 L 335 48',
    areaPath: 'M 10 55 L 60 48 L 115 52 L 170 38 L 225 10 L 280 44 L 335 48 L 335 70 L 10 70 Z',
    points: [
      { x: 10, y: 55, val: '1' },
      { x: 60, y: 48, val: '3' },
      { x: 115, y: 52, val: '1' },
      { x: 170, y: 38, val: '4' },
      { x: 225, y: 10, val: '12' },
      { x: 280, y: 44, val: '2' },
      { x: 335, y: 48, val: '1' }
    ],
    dates: ['Jun 29', 'Oct 15', 'May 2', 'Sep 20', 'Jan 22', 'Sep 23', 'Sep 25'],
    metric1: { val: '4%', label: 'Your Avg Score' },
    metric2: { val: '28', label: 'Your Tests' },
    metric3: { val: '4.5h', label: 'Your Study Time' }
  },
  accuracy: {
    title: 'Accuracy',
    svgPath: 'M 10 42 L 60 38 L 115 32 L 170 28 L 225 18 L 280 14 L 335 12',
    areaPath: 'M 10 42 L 60 38 L 115 32 L 170 28 L 225 18 L 280 14 L 335 12 L 335 70 L 10 70 Z',
    points: [
      { x: 10, y: 42, val: '58%' },
      { x: 60, y: 38, val: '62%' },
      { x: 115, y: 32, val: '67%' },
      { x: 170, y: 28, val: '71%' },
      { x: 225, y: 18, val: '78%' },
      { x: 280, y: 14, val: '82%' },
      { x: 335, y: 12, val: '86%' }
    ],
    dates: ['Mock 1', 'Mock 2', 'Mock 3', 'Mock 4', 'Mock 5', 'Mock 6', 'Mock 7'],
    metric1: { val: '74.2%', label: 'Avg Accuracy' },
    metric2: { val: '91.8%', label: 'AIR Percentile' },
    metric3: { val: '+12', label: 'Score Delta' }
  },
  time: {
    title: 'Study Time',
    svgPath: 'M 10 50 L 60 40 L 115 30 L 170 45 L 225 20 L 280 25 L 335 15',
    areaPath: 'M 10 50 L 60 40 L 115 30 L 170 45 L 225 20 L 280 25 L 335 15 L 335 70 L 10 70 Z',
    points: [
      { x: 10, y: 50, val: '1.2h' },
      { x: 60, y: 40, val: '2.5h' },
      { x: 115, y: 30, val: '3.8h' },
      { x: 170, y: 45, val: '2.1h' },
      { x: 225, y: 20, val: '5.2h' },
      { x: 280, y: 25, val: '4.8h' },
      { x: 335, y: 15, val: '6.4h' }
    ],
    dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    metric1: { val: '26.0h', label: 'This Month' },
    metric2: { val: '3.7h', label: 'Daily Avg' },
    metric3: { val: 'Top 5%', label: 'Effort Rank' }
  }
};

// Widget State Presets
const STATE_PRESETS = {
  morning: {
    title: 'Morning Greeting',
    mascot: 'happy',
    greeting: 'Good Morning,',
    userName: 'Santhosh',
    streakTarget: '3 / 5 Tests Attempted',
    streakBadge: '🔥 Day 6 · Active',
    aiNudge: '“General Science me Physics strong hai, Chemistry numericals leak hai. 10 Qs attempt karo.”',
    upNextTitle: 'RRB Group D Full Mock 14',
    upNextSub: '90 min · 100 Qs · Full Length',
    upNextBtn: 'Start Mock ▶',
    widgetClass: 'state-normal',
    pills: ['done', 'done', 'done', 'done', 'today', 'upcoming', 'upcoming']
  },
  workout: {
    title: 'Study Workout (Completed Today)',
    mascot: 'workout',
    greeting: 'Great Momentum,',
    userName: 'Santhosh',
    streakTarget: '4 / 5 Tests Attempted',
    streakBadge: '🔥 Day 6 · Secured',
    aiNudge: '“Mock 14 submitted: 82% Accuracy. Speed on Reasoning improved by 4.2 sec/question.”',
    upNextTitle: 'Weak Area: Algebra PYQ Booster',
    upNextSub: '15 min · 20 Qs · Sectional Speed Test',
    upNextBtn: 'Practice Now ▶',
    widgetClass: 'state-workout',
    pills: ['done', 'done', 'done', 'done', 'done', 'upcoming', 'upcoming']
  },
  urgent: {
    title: 'Evening Urgency (At Risk > 8 PM)',
    mascot: 'urgent',
    greeting: 'Streak At Risk,',
    userName: 'Santhosh',
    streakTarget: '3 / 5 Tests Attempted',
    streakBadge: '⚡ Midnight Reset · 3h Left',
    aiNudge: '“Sirf 5 minute ka Daily Quiz solve karo — Day 6 streak reset hone se bach jayega!”',
    upNextTitle: 'Daily Railway Speed Quiz',
    upNextSub: '5 min · 10 Qs · Instant Result',
    upNextBtn: 'Save Streak ⚡',
    widgetClass: 'state-urgent',
    pills: ['done', 'done', 'done', 'done', 'today', 'upcoming', 'upcoming']
  },
  celebration: {
    title: 'Milestone Unlocked (Badge Earned)',
    mascot: 'celebration',
    greeting: 'Badge Unlocked!',
    userName: 'Top 100 Achiever',
    streakTarget: '5 / 5 Tests Completed',
    streakBadge: '🏆 Top 100 Consistency',
    aiNudge: '“Congratulations! Weekly target 100% complete. You outperformed 92% aspirants this week.”',
    upNextTitle: 'Testbook Podium Leaderboard',
    upNextSub: 'Check your State & All-India Rank',
    upNextBtn: 'View Podium 🏆',
    widgetClass: 'state-celebration',
    pills: ['done', 'done', 'done', 'done', 'done', 'done', 'done']
  },
  sleepy: {
    title: 'Night Rest (Streak Secured)',
    mascot: 'sleepy',
    greeting: 'Good Night,',
    userName: 'Santhosh',
    streakTarget: 'Day 6 Secured ✓',
    streakBadge: '🌙 Rest & Recharge',
    aiNudge: '“Aaj ka study goal pura hua. Kal subah Reasoning Mock 15 se fresh start karenge.”',
    upNextTitle: 'Tomorrow’s Target: Reasoning Mock 15',
    upNextSub: 'Scheduled for 8:30 AM tomorrow',
    upNextBtn: 'Set Reminder ⏰',
    widgetClass: 'state-normal',
    pills: ['done', 'done', 'done', 'done', 'done', 'upcoming', 'upcoming']
  }
};

let currentTab = 'attempts';
let currentState = 'morning';
let currentTheme = 'light';
let currentExam = 'RRB Group D';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderState(currentState);
  renderAnalytics(currentTab);
  setupEventListeners();
});

function renderState(stateKey) {
  const state = STATE_PRESETS[stateKey];
  if (!state) return;
  currentState = stateKey;

  // Mascot Image update
  const mascotImg = document.getElementById('mascotImg');
  if (mascotImg) {
    mascotImg.src = MASCOT_ASSETS[state.mascot] || MASCOT_ASSETS.default;
  }

  // Text fields
  document.getElementById('greetingTitle').innerHTML = `${state.greeting} <span>${state.userName}</span>`;
  document.getElementById('streakTarget').textContent = state.streakTarget;
  document.getElementById('streakBadge').textContent = state.streakBadge;
  document.getElementById('aiNudgeText').textContent = state.aiNudge;
  document.getElementById('upNextTitle').textContent = state.upNextTitle;
  document.getElementById('upNextSub').textContent = state.upNextSub;
  document.getElementById('upNextBtn').textContent = state.upNextBtn;

  // Widget container styling
  const widgetEl = document.getElementById('primeWidget');
  if (widgetEl) {
    widgetEl.className = 'tb-widget-prime ' + state.widgetClass;
  }

  // 7-day pills update
  const daysContainer = document.getElementById('daysPills');
  if (daysContainer) {
    const letters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    daysContainer.innerHTML = '';
    state.pills.forEach((pStatus, idx) => {
      const pill = document.createElement('div');
      pill.className = `w-day-pill ${pStatus}`;
      const checkIcon = pStatus === 'done' ? '✓' : (pStatus === 'today' ? '●' : '○');
      pill.innerHTML = `
        <span class="w-day-letter">${letters[idx]}</span>
        <span class="w-day-check">${checkIcon}</span>
      `;
      daysContainer.appendChild(pill);
    });
  }

  // Update active state in sidebar
  document.querySelectorAll('.state-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.state === stateKey);
  });
}

function renderAnalytics(tabKey) {
  const data = ANALYTICS_DATA[tabKey];
  if (!data) return;
  currentTab = tabKey;

  // SVG Chart path update
  const chartLine = document.getElementById('chartLine');
  const chartArea = document.getElementById('chartArea');
  const chartPoints = document.getElementById('chartPoints');
  const chartDates = document.getElementById('chartDates');

  if (chartLine) chartLine.setAttribute('d', data.svgPath);
  if (chartArea) chartArea.setAttribute('d', data.areaPath);

  if (chartPoints) {
    chartPoints.innerHTML = '';
    data.points.forEach(pt => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', pt.x);
      circle.setAttribute('cy', pt.y);
      circle.setAttribute('class', 'w-chart-point');
      chartPoints.appendChild(circle);
    });
  }

  if (chartDates) {
    chartDates.innerHTML = '';
    data.dates.forEach(d => {
      const span = document.createElement('span');
      span.textContent = d;
      chartDates.appendChild(span);
    });
  }

  // Metrics Row
  document.getElementById('metricVal1').textContent = data.metric1.val;
  document.getElementById('metricLbl1').textContent = data.metric1.label;

  document.getElementById('metricVal2').textContent = data.metric2.val;
  document.getElementById('metricLbl2').textContent = data.metric2.label;

  document.getElementById('metricVal3').textContent = data.metric3.val;
  document.getElementById('metricLbl3').textContent = data.metric3.label;

  // Active tab button styling
  document.querySelectorAll('.w-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabKey);
  });
}

function setupEventListeners() {
  // State Buttons in sidebar
  document.querySelectorAll('.state-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderState(btn.dataset.state);
    });
  });

  // Mascot Card Items in sidebar
  document.querySelectorAll('.mascot-card-item').forEach(item => {
    item.addEventListener('click', () => {
      const mascotKey = item.dataset.mascot;
      const mascotImg = document.getElementById('mascotImg');
      if (mascotImg && MASCOT_ASSETS[mascotKey]) {
        mascotImg.src = MASCOT_ASSETS[mascotKey];
      }
      document.querySelectorAll('.mascot-card-item').forEach(c => c.classList.remove('selected'));
      item.classList.add('selected');
    });
  });

  // Analytics Tabs inside widget
  document.querySelectorAll('.w-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderAnalytics(btn.dataset.tab);
    });
  });

  // Theme Toggles
  document.querySelectorAll('.theme-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = btn.dataset.theme;
      document.getElementById('primeWidget').setAttribute('data-widget-theme', currentTheme);
      document.querySelectorAll('.theme-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Exam Selector
  const examBadge = document.getElementById('examBadge');
  if (examBadge) {
    const exams = ['RRB Group D', 'SSC CGL 2026', 'RRB NTPC', 'SBI PO / Clerk'];
    let examIdx = 0;
    examBadge.addEventListener('click', () => {
      examIdx = (examIdx + 1) % exams.length;
      document.getElementById('examName').textContent = exams[examIdx];
    });
  }

  // Doubt Bar Prompt Simulator
  const doubtBar = document.getElementById('doubtBar');
  if (doubtBar) {
    doubtBar.addEventListener('click', () => {
      const q = prompt('Ask Samadhan AI anything (e.g. "Explain Lenz Law in Hindi" or "Solve Quant PYQ"):', 'Railway cut-off marks for General Science?');
      if (q) {
        alert(`🤖 Samadhan AI (Connecting to Testbook Engine)...\n\nAnalyzing query: "${q}"\n\nDirecting to SAMADHAN_AI_DOUBT_SOLVER_SCREEN (SCR_07)...`);
      }
    });
  }
}
