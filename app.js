/* ============================================================
   Testbook Android Home Screen Widget Interactive Engine
   Duolingo & Bevel Inspired Premium Light Edition
   Direct Match to User Preferred Layout (Image 1)
   Full 30-Mascot Expression Library (100% Transparent)
   ============================================================ */

const ALL_30_MASCOTS = [
  { id: 'happy', label: 'Joyful Wave', file: 'assets/mascot/mascot_happy.png' },
  { id: 'workout', label: 'Gym Headband', file: 'assets/mascot/mascot_workout.png' },
  { id: 'urgent', label: 'Fiery Eyes', file: 'assets/mascot/mascot_urgent.png' },
  { id: 'celebration', label: 'Trophy Cup', file: 'assets/mascot/mascot_celebration.png' },
  { id: 'sleepy', label: 'Nightcap zzz', file: 'assets/mascot/mascot_sleepy.png' },
  { id: 'default', label: 'Original', file: 'assets/mascot/mascot_default.png' },
  
  { id: 'morning_chai', label: 'Morning Chai', file: 'assets/mascot/mascot_morning_chai.png' },
  { id: 'streak_flame', label: 'Holding Flame', file: 'assets/mascot/mascot_streak_flame.png' },
  { id: 'streak_saved_relief', label: 'Phew Relief', file: 'assets/mascot/mascot_streak_saved_relief.png' },
  { id: 'streak_frozen', label: 'Streak Frozen', file: 'assets/mascot/mascot_streak_frozen.png' },
  { id: 'topper_shades', label: 'Thug Life', file: 'assets/mascot/mascot_topper_shades.png' },
  { id: 'score_drop', label: 'Score Drop', file: 'assets/mascot/mascot_score_drop.png' },
  
  { id: 'calculating_nerd', label: 'Nerd Specs', file: 'assets/mascot/mascot_calculating_nerd.png' },
  { id: 'eureka_bulb', label: 'Eureka Bulb', file: 'assets/mascot/mascot_eureka_bulb.png' },
  { id: 'negative_marking', label: 'Band-Aid', file: 'assets/mascot/mascot_negative_marking.png' },
  { id: 'magnifier_inspect', label: 'Magnifier', file: 'assets/mascot/mascot_magnifier_inspect.png' },
  { id: 'reading_scroll', label: 'Revision Scroll', file: 'assets/mascot/mascot_reading_scroll.png' },
  { id: 'tea_break', label: 'Tea Break', file: 'assets/mascot/mascot_tea_break.png' },
  
  { id: 'midnight_oil', label: 'Desk Lamp', file: 'assets/mascot/mascot_midnight_oil.png' },
  { id: 'pen_sword', label: 'Pen Sword', file: 'assets/mascot/mascot_pen_sword.png' },
  { id: 'formula_board', label: 'Chalkboard', file: 'assets/mascot/mascot_formula_board.png' },
  { id: 'exam_alarm', label: 'Alarm Ringing', file: 'assets/mascot/mascot_exam_alarm.png' },
  { id: 'calendar_days', label: '3 Days Left', file: 'assets/mascot/mascot_calendar_days.png' },
  { id: 'sprinting', label: 'Speed Sprint', file: 'assets/mascot/mascot_sprinting.png' },
  
  { id: 'stopwatch', label: 'Stopwatch', file: 'assets/mascot/mascot_stopwatch.png' },
  { id: 'meditation_calm', label: 'Zen Calm', file: 'assets/mascot/mascot_meditation_calm.png' },
  { id: 'gold_medal', label: 'Gold Medal', file: 'assets/mascot/mascot_gold_medal.png' },
  { id: 'ladoo_party', label: 'Ladoo Feast', file: 'assets/mascot/mascot_ladoo_party.png' },
  { id: 'party_popper', label: 'Party Popper', file: 'assets/mascot/mascot_party_popper.png' },
  { id: 'pass_pro_crown', label: 'Royal Crown', file: 'assets/mascot/mascot_pass_pro_crown.png' }
];

const STATE_CONFIGS = {
  morning: {
    mascot: 'happy',
    themeClass: '',
    streakTitle: '🔥 6 days',
    streakSub: 'Get started early!',
    score: '142 / 200',
    thumbLeft: '65%',
    acc: '74.2%',
    mocks: '28',
    cardTitle: 'RRB Group D Mock 14',
    cardSub: '90 min · 100 Qs · Full Length',
    cardBtn: 'START ▶',
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
    thumbLeft: '75%',
    acc: '81.0%',
    mocks: '29',
    cardTitle: 'Algebra 10-Q Speed Drill',
    cardSub: '15 min · 20 Qs · Instant feedback',
    cardBtn: 'PRACTICE ▶',
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
    streakSub: 'Save your streak! (Resets at 12)',
    score: '142 / 200',
    thumbLeft: '65%',
    acc: '74.2%',
    mocks: '28',
    cardTitle: 'Daily Railway Speed Quiz',
    cardSub: '5 min · 10 Qs · Save Streak',
    cardBtn: 'SAVE STREAK ⚡',
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
    thumbLeft: '82%',
    acc: '88.5%',
    mocks: '30',
    cardTitle: 'Testbook Podium Leaderboard',
    cardSub: 'Check your State & All-India Rank',
    cardBtn: 'PODIUM 🏆',
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
    thumbLeft: '75%',
    acc: '81.0%',
    mocks: '29',
    cardTitle: 'Tomorrow: Reasoning Mock 15',
    cardSub: 'Scheduled for 8:30 AM tomorrow',
    cardBtn: 'REMIND ⏰',
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
let currentMascotId = 'happy';

document.addEventListener('DOMContentLoaded', () => {
  renderMascotGrid();
  renderWidget();
  setupListeners();
});

function renderMascotGrid() {
  const grid = document.getElementById('mascotGrid');
  if (!grid) return;
  grid.innerHTML = '';

  ALL_30_MASCOTS.forEach(m => {
    const card = document.createElement('div');
    card.className = `mascot-card ${m.id === currentMascotId ? 'active' : ''}`;
    card.dataset.mascot = m.id;
    card.title = m.label;
    card.innerHTML = `
      <img src="${m.file}" alt="${m.label}" />
      <span>${m.label}</span>
    `;
    card.addEventListener('click', () => {
      currentMascotId = m.id;
      document.querySelectorAll('.mascot-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderWidget();
    });
    grid.appendChild(card);
  });
}

function getMascotSrc() {
  const found = ALL_30_MASCOTS.find(m => m.id === currentMascotId);
  return found ? found.file : 'assets/mascot/mascot_happy.png';
}

function renderWidget() {
  const mount = document.getElementById('widgetMountArea');
  if (!mount) return;

  const cfg = STATE_CONFIGS[currentState];
  const mascotSrc = getMascotSrc();

  if (currentSize === '4x5') {
    // 4x5 Prime Cockpit (Exact Image 1 layout)
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

        <!-- 4. Bevel Quantified Readiness Pod (Direct User Image 1 Spec) -->
        <div class="dw-readiness-pod" onclick="alert('Opening Comprehensive Mock Analysis Screen (SCR_31)...')">
          <div class="dw-pod-header">
            <span class="dw-pod-label">EXAM READINESS</span>
            <span class="dw-score-val">${cfg.score}</span>
          </div>

          <!-- Spectrum Track Slider -->
          <div class="dw-spectrum-track">
            <div class="dw-spectrum-thumb" style="left: ${cfg.thumbLeft};"></div>
          </div>

          <div class="dw-spectrum-legend">
            <span>DANGER (110)</span>
            <span style="font-weight:900;">CUTOFF: 138</span>
            <span>SAFE (155+)</span>
          </div>

          <!-- 2 Large Glanceable Stats Divided by Subtle Line -->
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

        <!-- 5. Pure White Tactile Action Card (Direct User Image 1 Spec) -->
        <div class="dw-white-action-card" onclick="alert('Launching TEST_INSTRUCTIONS_SCREEN (SCR_17) directly from home screen...')">
          <div class="dw-card-left">
            <div class="dw-card-title">${cfg.cardTitle}</div>
            <div class="dw-card-sub">${cfg.cardSub}</div>
          </div>
          <div class="dw-card-pill-btn">${cfg.cardBtn}</div>
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
      currentMascotId = STATE_CONFIGS[currentState].mascot;
      document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.mascot-card').forEach(c => {
        c.classList.toggle('active', c.dataset.mascot === currentMascotId);
      });
      renderWidget();
    });
  });
}
