/* ============================================================
   Testbook Android Home Screen Widget Interactive Engine
   Hybrid Obsidian Edition — Duolingo + Bevel + Nike Synthesis
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
    subline: 'ACTIVE HABIT LOOP',
    streak: '🔥 6',
    unit: 'DAYS',
    score: '142',
    acc: '74.2%',
    mocks: '28',
    time: '4.5h',
    aiFocus: 'Focus: Skip Geometry → Arithmetic first confirms cutoff.',
    ctaTitle: 'RRB Group D Mock 14',
    ctaSub: '90 min · 100 Qs · Full Length',
    ctaBtn: 'START ▶',
    className: 'hybrid-widget-prime'
  },
  workout: {
    mascot: 'workout',
    subline: 'STREAK SECURED TODAY',
    streak: '🔥 6',
    unit: 'DAYS',
    score: '151',
    acc: '81.0%',
    mocks: '29',
    time: '6.0h',
    aiFocus: 'Reasoning speed improved by 4.2s. 10 Algebra PYQs next.',
    ctaTitle: 'Weak Area: Algebra Drill',
    ctaSub: '15 min · 20 Qs · Instant feedback',
    ctaBtn: 'PRACTICE ▶',
    className: 'hybrid-widget-prime'
  },
  urgent: {
    mascot: 'urgent',
    subline: 'STREAK AT RISK · 3H LEFT',
    streak: '⚡ 6',
    unit: 'RESET AT 12',
    score: '142',
    acc: '74.2%',
    mocks: '28',
    time: '4.5h',
    aiFocus: '5-min Daily Quiz will prevent Day 6 streak wipeout.',
    ctaTitle: 'Daily Railway Speed Quiz',
    ctaSub: '5 min · 10 Qs · Save Streak',
    ctaBtn: 'SAVE STREAK ⚡',
    className: 'hybrid-widget-prime urgent'
  },
  celebration: {
    mascot: 'celebration',
    subline: 'WEEKLY TARGET 100% MET',
    streak: '🏆 7',
    unit: 'TOP 100',
    score: '164',
    acc: '88.5%',
    mocks: '30',
    time: '8.2h',
    aiFocus: 'Milestone reached! You outperformed 92% students this week.',
    ctaTitle: 'Testbook Podium Leaderboard',
    ctaSub: 'Check your State & All-India Rank',
    ctaBtn: 'PODIUM 🏆',
    className: 'hybrid-widget-prime celebration'
  },
  sleepy: {
    mascot: 'sleepy',
    subline: 'DAY 6 SECURED · REST UP',
    streak: '🌙 6',
    unit: 'RESTED',
    score: '151',
    acc: '81.0%',
    mocks: '29',
    time: '6.0h',
    aiFocus: 'Daily goal complete. Tomorrow 8:30 AM: Reasoning Mock 15.',
    ctaTitle: 'Tomorrow: Reasoning Mock 15',
    ctaSub: 'Scheduled for 8:30 AM tomorrow',
    ctaBtn: 'REMIND ⏰',
    className: 'hybrid-widget-prime'
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
  const mount = document.getElementById('widgetMount');
  if (!mount) return;

  const cfg = STATE_CONFIGS[currentState];
  const mascotSrc = MASCOT_ASSETS[currentMascot] || MASCOT_ASSETS[cfg.mascot];

  if (currentSize === '4x5') {
    // 4x5 Hybrid Prime Cockpit
    mount.innerHTML = `
      <div class="${cfg.className}" id="primeWidget">
        
        <!-- 1. Header Row -->
        <div class="hw-header-row">
          <div class="hw-exam-pill" id="examPill" title="Click to switch target exam">
            <span class="hw-dot"></span>
            <span id="examTitle">RRB GROUP D</span>
            <span style="font-size:0.55rem; opacity:0.6;">▾</span>
          </div>
          <div class="hw-sync-tag">
            <span></span> LIVE SYNC
          </div>
        </div>

        <!-- 2. Hero Zone: Mascot & Streak (Duolingo Soul) -->
        <div class="hw-hero-zone">
          <div class="hw-hero-left">
            <span class="hw-micro-label">${cfg.subline}</span>
            <div class="hw-streak-display">
              <span class="hw-streak-number">${cfg.streak}</span>
              <span class="hw-streak-unit">${cfg.unit}</span>
            </div>
            <!-- 7-Day Floating Habit Pills -->
            <div class="hw-habit-trail">
              <div class="hw-habit-bubble done">✓</div>
              <div class="hw-habit-bubble done">✓</div>
              <div class="hw-habit-bubble done">✓</div>
              <div class="hw-habit-bubble done">✓</div>
              <div class="hw-habit-bubble today">●</div>
              <div class="hw-habit-bubble">○</div>
              <div class="hw-habit-bubble">○</div>
            </div>
          </div>
          <div class="hw-mascot-anchor">
            <img src="${mascotSrc}" id="heroMascot" class="hw-mascot-img" alt="Testbook Mascot" />
          </div>
        </div>

        <!-- 3. Bevel Quantified Readiness Zone -->
        <div class="hw-quantified-card" onclick="alert('Opening Comprehensive Mock Analysis Screen (SCR_31)...')">
          <div class="hw-cutoff-row">
            <span class="hw-micro-label">PROJECTED SCORE</span>
            <div>
              <span class="hw-score-num">${cfg.score}</span>
              <span class="hw-score-total">/ 200</span>
            </div>
          </div>

          <!-- Glowing Cutoff Spectrum Slider -->
          <div class="hw-spectrum-line">
            <div class="hw-spectrum-pin" style="left: ${cfg.score > 150 ? '78%' : '65%'};"></div>
          </div>

          <div class="hw-spectrum-meta">
            <span>DANGER (110)</span>
            <span style="color:#00f2fe; font-weight:900;">CUTOFF: 138</span>
            <span style="color:#10b981;">SAFE (155+)</span>
          </div>

          <!-- 3 Stats Trio -->
          <div class="hw-stats-trio">
            <div class="hw-stat-item">
              <span class="hw-stat-val highlight">${cfg.acc}</span>
              <span class="hw-stat-tag">ACCURACY</span>
            </div>
            <div class="hw-stat-item">
              <span class="hw-stat-val">${cfg.mocks}</span>
              <span class="hw-stat-tag">MOCKS</span>
            </div>
            <div class="hw-stat-item">
              <span class="hw-stat-val">${cfg.time}</span>
              <span class="hw-stat-tag">STUDY TIME</span>
            </div>
          </div>
        </div>

        <!-- 4. Tactical AI Anchor (Ahead Style) -->
        <div class="hw-ai-nudge-pill">
          <span class="hw-ai-spark">⚡</span>
          <span>${cfg.aiFocus}</span>
        </div>

        <!-- 5. 1-Tap Fast-Path Launcher (Nike Training Club Style) -->
        <div class="hw-launcher-cta" onclick="alert('Launching TEST_INSTRUCTIONS_SCREEN (SCR_17) directly...')">
          <div class="hw-cta-info">
            <div class="hw-cta-title">${cfg.ctaTitle}</div>
            <div class="hw-cta-sub">${cfg.ctaSub}</div>
          </div>
          <div class="hw-cta-btn">${cfg.ctaBtn}</div>
        </div>

        <!-- 6. Quick Actions (Perplexity Style) -->
        <div class="hw-action-pills">
          <div class="hw-quick-btn" onclick="alert('Opening Global Search Discovery Screen (SCR_09)...')">
            <span>🔍</span> Search PYQs
          </div>
          <div class="hw-quick-btn" onclick="alert('Opening Samadhan AI Doubt Solver (SCR_07)...')">
            <span>🤖</span> Ask Samadhan AI
          </div>
        </div>

      </div>
    `;
    setupExamToggle();
  } else if (currentSize === '4x2-duo') {
    // 4x2 Duolingo Streak Card
    mount.innerHTML = `
      <div class="hw-4x2-card ${cfg.className.includes('urgent') ? 'urgent' : ''}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <span class="hw-micro-label" style="color:rgba(255,255,255,0.7);">${cfg.subline}</span>
            <div style="font-size:2.1rem; font-weight:900; letter-spacing:-0.03em; margin:0.2rem 0; line-height:1;">
              ${cfg.streak} <span style="font-size:0.9rem; color:#00f2fe;">DAYS</span>
            </div>
            <span style="font-size:0.75rem; font-weight:750; opacity:0.85;">Goal: 3 / 5 Mocks this week</span>
          </div>
        </div>
        <img src="${mascotSrc}" class="hw-4x2-mascot" alt="Mascot" />
        <div class="hw-habit-trail" style="z-index:2; margin:0;">
          <div class="hw-habit-bubble done">✓</div>
          <div class="hw-habit-bubble done">✓</div>
          <div class="hw-habit-bubble done">✓</div>
          <div class="hw-habit-bubble done">✓</div>
          <div class="hw-habit-bubble today">●</div>
        </div>
      </div>
    `;
  } else if (currentSize === '2x2-duo') {
    // 2x2 Mascot Tile
    mount.innerHTML = `
      <div class="hw-2x2-wrapper">
        <div class="hw-2x2-tile ${cfg.className.includes('urgent') ? 'urgent' : ''}" onclick="alert('Opening TESTS_DASHBOARD_SCREEN (SCR_12)...')">
          <div>
            <div class="hw-micro-label" style="font-size:0.58rem; color:rgba(255,255,255,0.65);">THIS WEEK</div>
            <div style="font-size:1.85rem; font-weight:900; line-height:1.1; margin-top:0.2rem;">${cfg.streak}</div>
            <span style="font-size:0.65rem; font-weight:800; color:#00f2fe;">${cfg.unit}</span>
          </div>
          <img src="${mascotSrc}" class="hw-2x2-mascot" alt="Mascot" />
        </div>
      </div>
    `;
  } else if (currentSize === 'bevel') {
    // 4x2 Bevel Analytics
    mount.innerHTML = `
      <div class="hybrid-widget-prime" style="padding:1.15rem; gap:0.8rem; cursor:pointer;" onclick="alert('Opening Mock Analysis Screen (SCR_31)...')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="hw-micro-label">CUTOFF READINESS</span>
          <span style="font-size:0.85rem; font-weight:900; color:#00f2fe;">${cfg.score} / 200</span>
        </div>
        <div class="hw-spectrum-line" style="margin:0.25rem 0;">
          <div class="hw-spectrum-pin" style="left:65%;"></div>
        </div>
        <div class="hw-spectrum-meta">
          <span>DANGER (110)</span>
          <span style="color:#00f2fe; font-weight:900;">CUTOFF: 138</span>
          <span style="color:#10b981;">SAFE (155+)</span>
        </div>
        <div class="hw-stats-trio" style="padding-top:0.5rem;">
          <div class="hw-stat-item">
            <span class="hw-stat-val highlight">${cfg.acc}</span>
            <span class="hw-stat-tag">ACCURACY</span>
          </div>
          <div class="hw-stat-item">
            <span class="hw-stat-val">${cfg.mocks}</span>
            <span class="hw-stat-tag">MOCKS</span>
          </div>
          <div class="hw-stat-item">
            <span class="hw-stat-val">${cfg.time}</span>
            <span class="hw-stat-tag">STUDY TIME</span>
          </div>
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

  // Wallpaper switcher
  document.querySelectorAll('.wp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wp = btn.dataset.wp;
      const surface = document.getElementById('wallpaperSurface');
      if (surface) {
        surface.className = 'phone-wallpaper wp-' + wp;
      }
      document.querySelectorAll('.wp-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
