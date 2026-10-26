/* ============================================================
   Testbook Android Home Screen Widget Interactive Engine
   Duolingo & Bevel Inspired Premium Light Edition
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
    streakTitle: '🔥 6 days',
    streakSub: 'Get started early!',
    score: '142 / 200',
    acc: '74.2%',
    mocks: '28',
    actionTitle: 'RRB Group D Mock 14',
    actionSub: '90 min · 100 Qs · Full Length',
    actionBtn: 'START ▶',
    isUrgent: false,
    days: [
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'M', status: 'today' }
    ]
  },
  workout: {
    mascot: 'workout',
    streakTitle: '🔥 6 days',
    streakSub: 'Mock 14 secured today!',
    score: '151 / 200',
    acc: '81.0%',
    mocks: '29',
    actionTitle: 'Algebra 10-Q Booster',
    actionSub: '15 min · 20 Qs · Speed Drill',
    actionBtn: 'PRACTICE ▶',
    isUrgent: false,
    days: [
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'M', status: 'done' }
    ]
  },
  urgent: {
    mascot: 'urgent',
    streakTitle: '🔥 6 days',
    streakSub: 'Save your streak! (Resets at 12)',
    score: '142 / 200',
    acc: '74.2%',
    mocks: '28',
    actionTitle: 'Daily Railway Speed Quiz',
    actionSub: '5 min · 10 Qs · Save Streak',
    actionBtn: 'SAVE STREAK ⚡',
    isUrgent: true,
    days: [
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'M', status: 'today' }
    ]
  },
  celebration: {
    mascot: 'celebration',
    streakTitle: '🏆 7 days',
    streakSub: 'Top 100 Consistency Unlocked!',
    score: '164 / 200',
    acc: '88.5%',
    mocks: '30',
    actionTitle: 'Testbook Podium Leaderboard',
    actionSub: 'Check your State & All-India Rank',
    actionBtn: 'PODIUM 🏆',
    isUrgent: false,
    days: [
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'M', status: 'done' }
    ]
  },
  sleepy: {
    mascot: 'sleepy',
    streakTitle: '🌙 6 days',
    streakSub: 'Streak secured · Rest well',
    score: '151 / 200',
    acc: '81.0%',
    mocks: '29',
    actionTitle: 'Tomorrow: Reasoning Mock 15',
    actionSub: 'Scheduled for 8:30 AM tomorrow',
    actionBtn: 'REMIND ⏰',
    isUrgent: false,
    days: [
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'M', status: 'done' }
    ]
  }
};

let currentSize = '4x5';
let currentState = 'morning';
let currentMascot = 'happy';

document.addEventListener('DOMContentLoaded', () => {
  renderWidget();
  setupListeners();
});

function renderWidget() {
  const mount = document.getElementById('widgetMountArea');
  if (!mount) return;

  const cfg = STATE_CONFIGS[currentState];
  const mascotSrc = MASCOT_ASSETS[currentMascot] || MASCOT_ASSETS[cfg.mascot];

  if (currentSize === '4x5') {
    // 4x5 Prime Cockpit
    mount.innerHTML = `
      <div class="duo-widget-prime ${cfg.isUrgent ? 'urgent' : ''}" id="primeWidget">
        
        <!-- 1. Header Row -->
        <div class="dw-header">
          <div class="dw-exam-pill" id="examPill" title="Click to toggle exam goal">
            <span class="dw-exam-dot"></span>
            <span id="examTitle">RRB GROUP D</span>
            <span style="font-size:0.55rem; opacity:0.8;">▾</span>
          </div>
          <div class="dw-live-sync">
            <span></span> LIVE SYNC
          </div>
        </div>

        <!-- 2. Hero Zone: Streak & Floating Mascot -->
        <div class="dw-hero-zone">
          <div class="dw-hero-left">
            <div class="dw-streak-title">${cfg.streakTitle}</div>
            <div class="dw-streak-sub">${cfg.streakSub}</div>
          </div>
          <div class="dw-mascot-box">
            <img src="${mascotSrc}" class="dw-mascot-img" alt="Testbook Mascot" />
          </div>
        </div>

        <!-- 3. Days of the Week Row (Direct 1:1 Match to Duolingo Image 1) -->
        <div class="dw-days-row">
          ${cfg.days.map(d => `
            <div class="dw-day-column ${d.status}">
              <span class="dw-day-letter">${d.letter}</span>
              <div class="dw-day-capsule">${d.status === 'done' ? '✓' : (d.status === 'today' ? '●' : '')}</div>
            </div>
          `).join('')}
        </div>

        <!-- 4. Bevel Quantified Readiness Pod -->
        <div class="dw-readiness-pod" onclick="alert('Opening Comprehensive Mock Analysis Screen (SCR_31)...')">
          <div class="dw-pod-header">
            <span class="dw-pod-label">EXAM READINESS</span>
            <span class="dw-score-val">${cfg.score}</span>
          </div>

          <div class="dw-spectrum-track">
            <div class="dw-spectrum-thumb" style="left: ${cfg.score.startsWith('16') ? '78%' : '65%'};"></div>
          </div>

          <div class="dw-spectrum-legend">
            <span>DANGER (110)</span>
            <span style="font-weight:900;">CUTOFF: 138</span>
            <span>SAFE (155+)</span>
          </div>

          <div class="dw-stats-row">
            <div class="dw-stat-item">
              <span class="dw-stat-number">${cfg.acc}</span>
              <span class="dw-stat-caption">ACCURACY (↑ 3%)</span>
            </div>
            <div class="dw-stat-item">
              <span class="dw-stat-number">${cfg.mocks}</span>
              <span class="dw-stat-caption">MOCKS ATTEMPTED</span>
            </div>
          </div>
        </div>

        <!-- 5. Pure White Tactile Action Button -->
        <div class="dw-action-btn" onclick="alert('Launching TEST_INSTRUCTIONS_SCREEN (SCR_17) directly from home screen...')">
          <div class="dw-btn-info">
            <div class="dw-btn-title">${cfg.actionTitle}</div>
            <div class="dw-btn-sub">${cfg.actionSub}</div>
          </div>
          <div class="dw-btn-pill">${cfg.actionBtn}</div>
        </div>

      </div>
    `;
    setupExamToggle();
  } else if (currentSize === '4x2-duo') {
    // 4x2 Duolingo Streak Card (Exact 1:1 Image 1)
    mount.innerHTML = `
      <div class="dw-4x2-card ${cfg.isUrgent ? 'urgent' : ''}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
        <div>
          <div style="font-size:2.1rem; font-weight:900; letter-spacing:-0.03em; line-height:1;">
            ${cfg.streakTitle}
          </div>
          <div style="font-size:0.8rem; font-weight:750; opacity:0.95; margin-top:0.25rem;">
            ${cfg.streakSub}
          </div>
        </div>
        <img src="${mascotSrc}" class="dw-4x2-mascot" alt="Mascot" />
        <div class="dw-days-row" style="width:60%; z-index:2; margin:0;">
          ${cfg.days.map(d => `
            <div class="dw-day-column ${d.status}">
              <span class="dw-day-letter" style="font-size:0.6rem;">${d.letter}</span>
              <div class="dw-day-capsule" style="width:26px; height:26px; font-size:0.75rem;">
                ${d.status === 'done' ? '✓' : (d.status === 'today' ? '●' : '')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentSize === '2x2-duo') {
    // 2x2 Duolingo Mascot Tile (Exact 1:1 Image 1)
    mount.innerHTML = `
      <div class="dw-2x2-wrapper">
        <div class="dw-2x2-tile ${cfg.isUrgent ? 'urgent' : ''}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
          <div>
            <div style="font-size:1.85rem; font-weight:900; line-height:1;">${cfg.streakTitle}</div>
            <div style="font-size:0.68rem; font-weight:750; opacity:0.9; margin-top:0.2rem;">${cfg.streakSub}</div>
          </div>
          <img src="${mascotSrc}" class="dw-2x2-mascot" alt="Mascot" />
        </div>
      </div>
    `;
  }
}

function setupExamToggle() {
  const pill = document.getElementById('examPill');
  if (pill) {
    const list = ['RRB GROUP D', 'SSC CGL 2026', 'RRB NTPC', 'SBI CLERK'];
    let idx = 0;
    pill.addEventListener('click', () => {
      idx = (idx + 1) % list.length;
      document.getElementById('examTitle').textContent = list[idx];
    });
  }
}

function setupListeners() {
  // Size switcher
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSize = btn.dataset.size;
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWidget();
    });
  });

  // State switcher
  document.querySelectorAll('.state-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentState = btn.dataset.state;
      currentMascot = STATE_CONFIGS[currentState].mascot;
      document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.mascot-card').forEach(c => {
        c.classList.toggle('active', c.dataset.mascot === currentMascot);
      });
      renderWidget();
    });
  });

  // Mascot switcher
  document.querySelectorAll('.mascot-card').forEach(card => {
    card.addEventListener('click', () => {
      currentMascot = card.dataset.mascot;
      document.querySelectorAll('.mascot-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderWidget();
    });
  });
}
