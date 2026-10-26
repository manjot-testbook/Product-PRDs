/* ============================================================
   Testbook Android Home Screen Widget Interactive Engine
   Airy, Lightweight, High-Fidelity Widget Simulator
   ============================================================ */

const MASCOT_ASSETS = {
  default: 'assets/mascot/mascot_default.png',
  happy: 'assets/mascot/mascot_happy.png',
  workout: 'assets/mascot/mascot_workout.png',
  urgent: 'assets/mascot/mascot_urgent.png',
  celebration: 'assets/mascot/mascot_celebration.png',
  sleepy: 'assets/mascot/mascot_sleepy.png'
};

const STATE_CONFIGS = {
  morning: {
    mascot: 'happy',
    greeting: 'Good morning, Santhosh',
    streak: '🔥 6 Days',
    sub: 'Goal: 3 / 5 mocks this week',
    aiCopy: '“Chemistry numericals me 6 marks leak ho rahe hain. 10 Qs ka 5-min drill solve karo.”',
    actionTitle: 'RRB Group D Full Mock 14',
    actionSub: '90 min · 100 Qs · Full Length',
    actionBtn: 'Start ▶',
    isUrgent: false
  },
  workout: {
    mascot: 'workout',
    greeting: 'Keep it going, Santhosh',
    streak: '🔥 6 Days',
    sub: 'Mock 14 submitted today · Secured!',
    aiCopy: '“Reasoning me 100% accuracy recorded. Speed 4.2s per question improve hui.”',
    actionTitle: 'Algebra 10-Q Speed Booster',
    actionSub: '5 min · 10 Qs · Instant feedback',
    actionBtn: 'Practice ▶',
    isUrgent: false
  },
  urgent: {
    mascot: 'urgent',
    greeting: 'Streak at risk!',
    streak: '🔥 6 Days',
    sub: 'Resets at midnight · 3h left',
    aiCopy: '“Sirf 5 min ka Daily Quiz solve karo — Day 6 streak reset hone se bach jayegi!”',
    actionTitle: 'Daily Railway Speed Quiz',
    actionSub: '5 min · 10 Qs · Save Streak',
    actionBtn: 'Save Streak ⚡',
    isUrgent: true
  },
  celebration: {
    mascot: 'celebration',
    greeting: 'Milestone Unlocked!',
    streak: '🏆 7 Days',
    sub: 'Weekly target 100% completed!',
    aiCopy: '“Awesome! You unlocked the Top 100 consistency badge. Outperformed 92% students.”',
    actionTitle: 'Testbook Podium Leaderboard',
    actionSub: 'Check your State & All-India Rank',
    actionBtn: 'Podium 🏆',
    isUrgent: false
  },
  sleepy: {
    mascot: 'sleepy',
    greeting: 'Good night, Santhosh',
    streak: '🌙 Day 6 Secured',
    sub: 'Study goal met for today · Rest well',
    aiCopy: '“Aaj ka target complete hua. Kal subah Reasoning Mock 15 se fresh start karenge.”',
    actionTitle: 'Tomorrow: Reasoning Mock 15',
    actionSub: 'Scheduled for 8:30 AM tomorrow',
    actionBtn: 'Remind ⏰',
    isUrgent: false
  }
};

let currentSize = '4x5';
let currentState = 'morning';
let currentMascot = 'happy';
let currentTheme = 'light';

document.addEventListener('DOMContentLoaded', () => {
  renderWidget();
  setupListeners();
});

function renderWidget() {
  const slot = document.getElementById('widgetSlot');
  if (!slot) return;
  const cfg = STATE_CONFIGS[currentState];
  const mascotSrc = MASCOT_ASSETS[currentMascot] || MASCOT_ASSETS[cfg.mascot];

  if (currentSize === '4x5') {
    // Render Airy 4x5 Prime Cockpit
    slot.innerHTML = `
      <div class="widget-prime" id="primeWidget">
        
        <!-- 1. Header Row -->
        <div class="w-header">
          <div class="w-exam-tag" id="examTag">
            <span class="w-exam-dot"></span>
            <span id="examText">RRB Group D</span>
            <span style="font-size:0.6rem; color:var(--w-muted);">▾</span>
          </div>
          <span class="w-live-badge">Updated 5m ago</span>
        </div>

        <!-- 2. Hero Mascot & Streak -->
        <div class="w-hero-zone">
          <div class="w-hero-copy">
            <span class="w-hero-greeting">${cfg.greeting}</span>
            <span class="w-hero-streak">${cfg.streak}</span>
            <span class="w-hero-sub">${cfg.sub}</span>
          </div>
          <div class="w-mascot-frame">
            <img src="${mascotSrc}" class="w-mascot-art" alt="Testbook Buddy" />
          </div>
        </div>

        <!-- 3. 5-Day Habit Circles -->
        <div class="w-streak-pills">
          <div class="w-pill-item done"><span class="w-pill-day">THU</span><span class="w-pill-circle">✓</span></div>
          <div class="w-pill-item done"><span class="w-pill-day">FRI</span><span class="w-pill-circle">✓</span></div>
          <div class="w-pill-item done"><span class="w-pill-day">SAT</span><span class="w-pill-circle">✓</span></div>
          <div class="w-pill-item done"><span class="w-pill-day">SUN</span><span class="w-pill-circle">✓</span></div>
          <div class="w-pill-item today"><span class="w-pill-day">TODAY</span><span class="w-pill-circle">●</span></div>
          <div class="w-pill-item upcoming"><span class="w-pill-day">TUE</span><span class="w-pill-circle"></span></div>
          <div class="w-pill-item upcoming"><span class="w-pill-day">WED</span><span class="w-pill-circle"></span></div>
        </div>

        <!-- 4. Bevel-Style Score Spectrum & Stats -->
        <div class="w-data-zone" onclick="alert('Opening Comprehensive Mock Analysis Screen (SCR_31)...')">
          <div class="w-gauge-row">
            <span class="w-gauge-lbl">Projected Score</span>
            <span class="w-gauge-val">142 / 200</span>
          </div>
          
          <div class="w-spectrum-track">
            <div class="w-spectrum-thumb"></div>
          </div>
          
          <div class="w-spectrum-labels">
            <span>Danger (110)</span>
            <span style="color:#0284c7; font-weight:850;">Cutoff: 138</span>
            <span style="color:#10b981;">Safe (155+)</span>
          </div>

          <div class="w-stats-pair">
            <div class="w-stat-col">
              <span class="w-stat-num">74.2%</span>
              <span class="w-stat-caption">Avg Accuracy (↑ 3%)</span>
            </div>
            <div class="w-stat-col">
              <span class="w-stat-num">28 Mocks</span>
              <span class="w-stat-caption">Total Attempted</span>
            </div>
          </div>
        </div>

        <!-- 5. Action Row -->
        <div class="w-action-row" onclick="alert('Launching TEST_INSTRUCTIONS_SCREEN (SCR_17) directly...')">
          <div class="w-action-text">
            <div class="w-action-title">${cfg.actionTitle}</div>
            <div class="w-action-sub">${cfg.actionSub}</div>
          </div>
          <div class="w-action-btn-pill">${cfg.actionBtn}</div>
        </div>

        <!-- 6. Ahead-Style AI Card -->
        <div class="w-ai-card">
          <span>⚡</span>
          <span>${cfg.aiCopy}</span>
        </div>

      </div>
    `;
  } else if (currentSize === '4x2-duo') {
    // 4x2 Duolingo-style Streak Widget
    const isUrgent = cfg.isUrgent;
    slot.innerHTML = `
      <div class="widget-4x2 ${isUrgent ? 'urgent' : ''}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
        <div class="widget-4x2-top">
          <div>
            <div class="w-4x2-streak">${cfg.streak}</div>
            <div class="w-4x2-sub">${cfg.sub}</div>
          </div>
        </div>
        <img src="${mascotSrc}" class="w-4x2-mascot" alt="Mascot" />
        <div class="w-4x2-pills">
          <div class="w-4x2-pill done">✓</div>
          <div class="w-4x2-pill done">✓</div>
          <div class="w-4x2-pill done">✓</div>
          <div class="w-4x2-pill done">✓</div>
          <div class="w-4x2-pill">●</div>
        </div>
      </div>
    `;
  } else if (currentSize === '2x2-duo') {
    // 2x2 Mascot Streak Tile
    slot.innerHTML = `
      <div class="widget-2x2-wrapper">
        <div class="widget-2x2 ${cfg.isUrgent ? 'urgent' : ''}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
          <div>
            <div class="w-2x2-streak">${cfg.streak}</div>
            <div class="w-2x2-sub">${cfg.isUrgent ? 'Save streak!' : 'Keep it up!'}</div>
          </div>
          <img src="${mascotSrc}" class="w-2x2-mascot" alt="Mascot" />
        </div>
      </div>
    `;
  } else if (currentSize === 'bevel') {
    // 4x2 Bevel Readiness Widget
    slot.innerHTML = `
      <div class="widget-prime" style="padding:1rem; gap:0.75rem;" onclick="alert('Opening Comprehensive Mock Analysis Screen (SCR_31)...')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.7rem; font-weight:850; text-transform:uppercase; color:var(--w-muted);">Exam Readiness Spectrum</span>
          <span style="font-size:0.8rem; font-weight:900; color:#0284c7;">Score: 142 / 200</span>
        </div>
        <div class="w-spectrum-track" style="margin:0.2rem 0;">
          <div class="w-spectrum-thumb" style="left:64%;"></div>
        </div>
        <div class="w-spectrum-labels">
          <span>Danger (110)</span>
          <span style="color:#0284c7; font-weight:850;">Cutoff: 138</span>
          <span style="color:#10b981;">Safe (155+)</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem; text-align:center; padding-top:0.4rem; border-top:1px solid rgba(0,0,0,0.05);">
          <div>
            <div style="font-size:1.15rem; font-weight:900; color:#0284c7;">74%</div>
            <div style="font-size:0.6rem; font-weight:750; color:var(--w-muted); text-transform:uppercase;">Accuracy</div>
          </div>
          <div>
            <div style="font-size:1.15rem; font-weight:900; color:#f59e0b;">35/50</div>
            <div style="font-size:0.6rem; font-weight:750; color:var(--w-muted); text-transform:uppercase;">Daily Qs</div>
          </div>
          <div>
            <div style="font-size:1.15rem; font-weight:900; color:#10b981;">91.8</div>
            <div style="font-size:0.6rem; font-weight:750; color:var(--w-muted); text-transform:uppercase;">Percentile</div>
          </div>
        </div>
      </div>
    `;
  } else if (currentSize === 'ahead') {
    // 4x2 Ahead AI Mindset Card
    slot.innerHTML = `
      <div style="background:#fef08a; border-radius:28px; padding:1.25rem; color:#713f12; display:flex; flex-direction:column; justify-content:space-between; height:185px; box-shadow:0 12px 30px rgba(234, 179, 8, 0.25); cursor:pointer;" onclick="alert('Opening Samadhan AI (SCR_07)...')">
        <div style="font-size:0.65rem; font-weight:850; text-transform:uppercase; letter-spacing:0.05em; opacity:0.8;">
          AAJ KA FOCUS · TESTBOOK AI
        </div>
        <div style="font-size:0.95rem; font-weight:750; line-height:1.45;">
          “Chemistry numericals me 6 marks leak ho rahe hain. Formulas revise karne ke baad 10 Qs ka mini drill solve karo — cutoff pakka nikal jayega.”
        </div>
        <div style="font-size:0.72rem; font-weight:800; display:flex; align-items:center; gap:0.35rem; color:#854d0e;">
          Practice 10 Questions Now ➔
        </div>
      </div>
    `;
  }
}

function setupListeners() {
  // Size Chips
  document.querySelectorAll('.size-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSize = btn.dataset.size;
      document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWidget();
    });
  });

  // State Chips
  document.querySelectorAll('.state-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      currentState = btn.dataset.state;
      currentMascot = STATE_CONFIGS[currentState].mascot;
      document.querySelectorAll('.state-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.mascot-chip').forEach(b => {
        b.classList.toggle('active', b.dataset.mascot === currentMascot);
      });
      renderWidget();
    });
  });

  // Mascot Chips
  document.querySelectorAll('.mascot-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMascot = btn.dataset.mascot;
      document.querySelectorAll('.mascot-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWidget();
    });
  });

  // Theme Chips
  document.querySelectorAll('.theme-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = btn.dataset.theme;
      document.body.setAttribute('data-theme', currentTheme);
      document.querySelectorAll('.theme-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWidget();
    });
  });
}
