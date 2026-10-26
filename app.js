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
    themeClass: '',
    streakTitle: '🔥 6 days',
    streakSub: 'Get started early!',
    score: '142 / 200',
    fillPct: '71%',
    cutoffTag: '+4 ABOVE CUTOFF ✓',
    acc: '74.2%',
    mocks: '28',
    actionTitle: 'RRB Group D Mock 14',
    actionSub: '90 min · 100 Qs · Full Length',
    actionBtn: 'START ▶',
    isUrgent: false,
    days: [
      { letter: 'M', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'W', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'today' },
      { letter: 'S', status: 'upcoming' },
      { letter: 'S', status: 'upcoming' }
    ]
  },
  workout: {
    mascot: 'workout',
    themeClass: 'workout',
    streakTitle: '🔥 6 days',
    streakSub: 'Mock 14 secured today!',
    score: '151 / 200',
    fillPct: '75.5%',
    cutoffTag: '+13 ABOVE CUTOFF ✓',
    acc: '81.0%',
    mocks: '29',
    actionTitle: 'Algebra 10-Q Speed Drill',
    actionSub: '15 min · 20 Qs · Instant feedback',
    actionBtn: 'PRACTICE ▶',
    isUrgent: false,
    days: [
      { letter: 'M', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'W', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'upcoming' },
      { letter: 'S', status: 'upcoming' }
    ]
  },
  urgent: {
    mascot: 'urgent',
    themeClass: 'urgent',
    streakTitle: '⚡ 6 days',
    streakSub: 'Save your streak! 3h left',
    score: '142 / 200',
    fillPct: '71%',
    cutoffTag: 'AT RISK · 3H LEFT ⚡',
    acc: '74.2%',
    mocks: '28',
    actionTitle: 'Daily Railway Speed Quiz',
    actionSub: '5 min · 10 Qs · Save Streak',
    actionBtn: 'SAVE STREAK ⚡',
    isUrgent: true,
    days: [
      { letter: 'M', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'W', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'today' },
      { letter: 'S', status: 'upcoming' },
      { letter: 'S', status: 'upcoming' }
    ]
  },
  celebration: {
    mascot: 'celebration',
    themeClass: 'celebration',
    streakTitle: '🏆 7 days',
    streakSub: 'Top 100 Consistency Unlocked!',
    score: '164 / 200',
    fillPct: '82%',
    cutoffTag: '+26 ABOVE CUTOFF 🏆',
    acc: '88.5%',
    mocks: '30',
    actionTitle: 'Testbook Podium Leaderboard',
    actionSub: 'Check your State & All-India Rank',
    actionBtn: 'PODIUM 🏆',
    isUrgent: false,
    days: [
      { letter: 'M', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'W', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'done' },
      { letter: 'S', status: 'done' }
    ]
  },
  sleepy: {
    mascot: 'sleepy',
    themeClass: 'sleepy',
    streakTitle: '🌙 6 days',
    streakSub: 'Streak secured · Rest well',
    score: '151 / 200',
    fillPct: '75.5%',
    cutoffTag: 'DAY 6 SECURED ✓',
    acc: '81.0%',
    mocks: '29',
    actionTitle: 'Tomorrow: Reasoning Mock 15',
    actionSub: 'Scheduled for 8:30 AM tomorrow',
    actionBtn: 'REMIND ⏰',
    isUrgent: false,
    days: [
      { letter: 'M', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'W', status: 'done' },
      { letter: 'T', status: 'done' },
      { letter: 'F', status: 'done' },
      { letter: 'S', status: 'upcoming' },
      { letter: 'S', status: 'upcoming' }
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
      <div class="duo-widget-prime ${cfg.themeClass}" id="primeWidget">
        
        <!-- 1. Header Row (Exam on the Right, Live Sync Removed) -->
        <div class="dw-header">
          <div class="dw-brand-tag">
            <span class="dw-brand-dot"></span>
            <span>testbook</span>
          </div>
          <div class="dw-exam-pill" id="examPill" title="Click to toggle exam goal">
            <span id="examTitle">RRB GROUP D</span>
            <span style="font-size:0.55rem; opacity:0.8;">▾</span>
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

        <!-- 3. Full Monday to Sunday Week (7 Days) -->
        <div class="dw-days-row">
          ${cfg.days.map(d => `
            <div class="dw-day-column ${d.status}">
              <span class="dw-day-letter">${d.letter}</span>
              <div class="dw-day-capsule">${d.status === 'done' ? '✓' : (d.status === 'today' ? '●' : '')}</div>
            </div>
          `).join('')}
        </div>

        <!-- 4. Bevel Quantified Readiness Pod (Frosted Glass, No Skeuomorphic Rainbows) -->
        <div class="dw-readiness-pod" onclick="alert('Opening Comprehensive Mock Analysis Screen (SCR_31)...')">
          <div class="dw-pod-header">
            <span class="dw-pod-label">EXAM READINESS</span>
            <span class="dw-score-val">${cfg.score}</span>
          </div>

          <!-- Clean Dual-Tone Cutoff Track -->
          <div class="dw-cutoff-track-wrapper">
            <div class="dw-cutoff-track-bg">
              <div class="dw-cutoff-track-fill" style="width: ${cfg.fillPct};"></div>
              <div class="dw-cutoff-notch"></div>
            </div>
          </div>

          <div class="dw-cutoff-meta-row">
            <span>${cfg.score.split('/')[0].trim()} SCORE</span>
            <span style="color:#ffffff; font-weight:900;">CUTOFF: 138</span>
            <span class="dw-cutoff-tag">${cfg.cutoffTag}</span>
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

        <!-- 5. Integrated Frosted Action Pill (Belongs to the Card! No Disjointed White Cutout) -->
        <div class="dw-action-pill-row" onclick="alert('Launching TEST_INSTRUCTIONS_SCREEN (SCR_17) directly from home screen...')">
          <div class="dw-action-text-group">
            <div class="dw-action-title">${cfg.actionTitle}</div>
            <div class="dw-action-sub">${cfg.actionSub}</div>
          </div>
          <div class="dw-pill-button">${cfg.actionBtn}</div>
        </div>

      </div>
    `;
    setupExamToggle();
  } else if (currentSize === '4x2-duo') {
    // 4x2 Duolingo Streak Card (Exact 1:1 Image 1)
    mount.innerHTML = `
      <div class="dw-4x2-card ${cfg.themeClass}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
        <div>
          <div style="font-size:2.1rem; font-weight:900; letter-spacing:-0.03em; line-height:1;">
            ${cfg.streakTitle}
          </div>
          <div style="font-size:0.8rem; font-weight:750; opacity:0.95; margin-top:0.25rem;">
            ${cfg.streakSub}
          </div>
        </div>
        <img src="${mascotSrc}" class="dw-4x2-mascot" alt="Mascot" />
        <div class="dw-days-row" style="width:72%; z-index:2; margin:0;">
          ${cfg.days.map(d => `
            <div class="dw-day-column ${d.status}">
              <span class="dw-day-letter" style="font-size:0.58rem;">${d.letter}</span>
              <div class="dw-day-capsule" style="width:24px; height:24px; font-size:0.72rem;">
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
        <div class="dw-2x2-tile ${cfg.themeClass}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
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
