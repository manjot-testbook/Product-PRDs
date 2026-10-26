# Testbook Android Home Screen Widget — PRD & System Specification

| Document Metadata | Specification |
|---|---|
| **Status** | In Review / Interactive Prototype Live |
| **Version** | 2.0 (Flagship 4×5 Prime Edition) |
| **Owner** | Product Core Team (Manjot Singh) |
| **Target App** | Testbook Android (`minSdk 23`, `targetSdk 36`) |
| **Surface** | Android Home Screen Widget (Jetpack Glance / AppWidgetProvider) |
| **Primary Artifact** | 4×5 Prime Cockpit Widget, 4×2 Action Widget, 2×2 Streak Tile |
| **Live Local Prototype** | Deployed locally on port 4242 |
| **Repository** | `manjot-testbook/Product-PRDs` |

---

## 1. Executive Summary & Problem Statement

Testbook currently engages users primarily through **Push Notifications** (which suffer from high mute rates and notification fatigue) and **WhatsApp Communication** (which has high operational friction and pulls users out of app context). 

Cold test starts currently require an exhausting 6-screen journey:
$$\text{Home Feed} \longrightarrow \text{Tests Tab} \longrightarrow \text{Test Series Overview} \longrightarrow \text{Exam Level Modal} \longrightarrow \text{Section List} \longrightarrow \text{Instructions} \longrightarrow \text{Start Test}$$

The **4×5 Prime Flagship Widget** converts Testbook from an app opened only with deliberate effort into a permanent, high-value cockpit on the student's launcher. It delivers:
1. **Zero-Friction Fast-Path:** 1-tap launcher bypassing 5 navigation layers directly into the test interface.
2. **Persistent Visual Eyebright:** The student sees their preparation status every time they unlock their phone.
3. **Commitment Loop:** Weekly target (`3/5 Tests`) + Daily habit loop (`🔥 Day 6`) + 7-Day interactive checkmark trail.
4. **Diagnostic Micro-Coach ("Aaj Ka Focus"):** Daily tactical nudge converting test anxiety into actionable 10-minute drills.
5. **Samadhan AI Doubt Search:** Immediate home screen search box deep-linking into `SAMADHAN_AI_DOUBT_SOLVER_SCREEN` (`SCR_07`).

---

## 2. Platform Feasibility: Audio & Vibration Resolution

| Proposed Feature | Android Platform Constraint | Architecture Decision |
|---|---|---|
| **Audio playback ("Testbook Pass ab 499 me")** | `RemoteViews` and `AppWidgetProvider` cannot stream background audio directly on launcher without foreground windows. | **1. Voice on App Entry:** Playing motivational greeting/TTS upon clicking widget into app.<br>**2. Daily Brief Notification Audio:** Custom Testbook chime on 7:30 PM push.<br>**3. Value Renewal Strip:** Non-intrusive renewal banner on widget for expired users. |
| **Vibration on data update** | Android battery optimization/Doze mode blocks background `Vibrator` services from background workers. | **Evening Alert Pairing:** Haptics paired with the **7:30 PM Daily Brief** and **Android 16 Live Update (9 PM - Midnight)** when streak is actively at risk. |

---

## 3. The 4×5 Prime Widget: Core Anatomy

The flagship 4×5 widget occupies the complete home screen grid height (~360dp × ~480dp) and brings together 6 core product components:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  4×5 PRIME WIDGET — FULL-CANVAS EXAM COCKPIT                           │
├────────────────────────────────────────────────────────────────────────┤
│  [🏷️ RRB Group D ▾]                                🔍 Search    📅 Mocks │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Good Morning, Santhosh                       (\__/)              │  │
│  │                                              ( •ᴗ•)  [MASCOT]    │  │
│  │ [ + Start Chat with Samadhan AI ]            / >🎓   (Book Buddy)│  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  THIS WEEK'S TARGET                    🔥 DAY 6 · STREAK ACTIVE        │
│  ◯ 3 / 5 Tests Attempted               M   T   W   T   F   S   S       │
│  Progress: [████████████░░░░░░] 60%   [✓] [✓] [✓] [✓] [●] [ ] [ ]     │
│                                                                        │
│  YOUR PREPARATION                       View Full Analytics (SCR_31) → │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  [Attempts ✓]          [Accuracy]                [Study Time]    │  │
│  │                                                                  │  │
│  │   12 ┤             ╭───●                                         │  │
│  │    6 ┤       ╭─●───╯                                             │  │
│  │    0 ┼───●───╯                                                   │  │
│  │     Jun 29  Oct 15  May 2  Sep 20  Jan 22  Sep 23  Sep 25        │  │
│  │                                                                  │  │
│  │       74%                   28                      4.5h         │  │
│  │    AVG SCORE            YOUR TESTS               STUDY TIME      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  UP NEXT: RECOMMENDED FOR TODAY                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 📝 RRB Group D Full Mock 14 • 90 min · 100 Qs      [ Start Mock ▶]│  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  AAJ KA FOCUS                                                          │
│  “General Science me Physics strong hai, Chemistry numericals leak    │
│   hai. 10 Qs ka mini-test attempt karo.”                               │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 💬 Ask Samadhan AI anything...                             [ ↑ ] │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Gemini-Generated Mascot Expressions

The Testbook Book Mascot (`/tpl-web/src/tb-ai`) serves as the emotional anchor on the widget. Using the **`gemini-3.1-flash-image`** model with image-to-image reference conditioning, 5 distinct situational expressions were synthesized:

| Asset Name | Expression Description | Trigger State |
|---|---|---|
| `mascot_happy.png` | Cheerful smile, waving right hand, graduation cap tilted cute. | **Morning Greeting (`ACTIVE_MORNING`)** (6 AM – 12 PM) |
| `mascot_workout.png` | Red gym sweatband over graduation cap, flexing bicep confidently. | **Study In Progress (`WORKOUT_SECURED`)** (After 1+ test completed today) |
| `mascot_urgent.png` | Intense glowing red/amber laser eyes (Duolingo style), fiery glow. | **Urgency (`AT_RISK_EVENING`)** (8 PM – 11:59 PM with streak at risk) |
| `mascot_celebration.png` | 8-bit black pixel sunglasses, holding shiny gold trophy cup, confetti. | **Milestone Unlocked (`BADGE_UNLOCKED`)** (Weekly 5/5 target reached) |
| `mascot_sleepy.png` | Striped sleeping nightcap over graduation cap, peaceful sleeping face `zzz`. | **Night Rest (`STREAK_SECURED_NIGHT`)** (Post-10 PM with daily goal met) |
| `mascot_default.png` | Original transparent RGBA source asset from `tpl-web`. | Fallback default |

---

## 5. Navigation Router Map (Mapped to `TBAppScreens`)

Every interactive element on the widget deep-links directly into specific production screens:

| Element | User Action | Deep Link URL | Target Screen in `TBAppScreens` | ID |
|---|---|---|---|---|
| **Goal Chip** | Tap `[RRB Group D ▾]` | `testbook://tbapp/exams/enrolled` | `ENROLLED_EXAMS_MODAL` | `SCR_06` |
| **Start Chat** | Tap `[+ Start Chat]` | `testbook://tbapp/samadhan_ai` | `SAMADHAN_AI_DOUBT_SOLVER_SCREEN` | `SCR_07` |
| **Search Icon**| Tap `🔍` | `testbook://tbapp/search` | `GLOBAL_SEARCH_DISCOVERY_SCREEN` | `SCR_09` |
| **Streak Badge**| Tap `🔥 Day 6` | `testbook://tbapp/tests/dashboard` | `TESTS_DASHBOARD_SCREEN` | `SCR_12` |
| **View Dashboard**| Tap `View Dashboard >` | `testbook://tbapp/tests/analysis` | `TEST_ANALYSIS_SCREEN` | `SCR_31` |
| **Start Mock** | Tap `[ Start Mock ▶ ]` | `testbook://tbapp/test/{testId}/instructions` | `TEST_INSTRUCTIONS_SCREEN` | `SCR_17` |
| **AI Focus Box**| Tap diagnostic advice | `testbook://tbapp/weak_areas` | `WEAK_AREAS_IMPROVEMENT_SCREEN` | `SCR_16` |
| **Doubt Input** | Tap `Ask anything...` | `testbook://tbapp/samadhan_ai?focus_input=true` | `SAMADHAN_AI_DOUBT_SOLVER_SCREEN` | `SCR_07` |

---

## 6. End-to-End Analytics & Telemetry Spec

### 6.1 Event Taxonomy

| Event Name | When Fired | Key Attributes |
|---|---|---|
| `widget_added` | User pins widget to launcher | `widget_size` (`4x5`, `4x2`, `2x2`), `first_install` (bool), `launcher_pkg` |
| `widget_removed` | User deletes widget from launcher | `lifetime_days`, `total_taps`, `final_streak` |
| `widget_tapped` | User clicks any element on widget | `element_id` (`chat_cta`, `mock_start`, `doubt_bar`), `widget_state`, `target_screen`, `mascot_expression` |
| `widget_updated` | WorkManager / silent FCM refreshes data | `update_source` (`workmanager`, `fcm_silent`, `app_open`), `data_age_sec`, `battery_pct` |
| `widget_tab_switched` | User switches Attempts/Accuracy/Time | `tab_name` (`attempts`, `accuracy`, `time`) |

### 6.2 Deep Link Attribution Schema
```text
testbook://tbapp/test/1234?utm_source=home_widget&utm_medium=android_glance&utm_campaign=prime_4x5&widget_size=4x5&widget_state=morning&mascot=happy&ai_id=m_rrb_chem_10
```

---

## 7. Technical Implementation Architecture

* **UI Layer:** Jetpack Glance (`androidx.glance:glance-appwidget:1.1.+`) targeting `minSdk 23` and `targetSdk 36`.
* **Data Layer:** `WidgetSnapshotManager` backed by Room DB for zero-latency instant rendering from cache (< 50ms).
* **Refresh Strategy:** 
  1. App Open: Syncs if cache > 15 minutes old.
  2. Test Submission: Immediate event-driven push to Glance.
  3. WorkManager: 4 periodic background syncs/day (Doze-safe).
  4. Silent FCM: Triggered upon live quiz publication or midnight streak reset warning.
EOF
