import os
import json
import base64
import time
import urllib.request
import urllib.error
from PIL import Image

KEY = 'AIzaSyDPHjOQlTgHBxb_RwVTmNNXSmclsHHka8o'
MODEL = 'gemini-3.1-flash-image'
URL = f'https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={KEY}'

BASE_MASCOT_PATH = '/Users/manjotsingh/DataspellProjects/OFFICE/Product PRDs/assets/mascot/mascot_default.png'
OUTPUT_DIR = '/Users/manjotsingh/DataspellProjects/OFFICE/Product PRDs/assets/mascot'

with open(BASE_MASCOT_PATH, 'rb') as f:
    base_b64 = base64.b64encode(f.read()).decode('utf-8')

PREFIX = (
    'Here is the reference mascot character: a standing open book with a navy blue graduation cap (mortarboard), '
    'dual-colored split body (cyan/light blue on left half, navy/dark blue on right half), cute cartoon face with big black round eyes, '
    'and little blue legs/shoes. Generate this exact character in clean 2D vector sticker illustration style on a pure solid white background, '
    'preserving the exact colors and graduation cap: '
)

MASCOTS = {
    # Group A: Habit & Streak
    'mascot_morning_chai.png': PREFIX + 'holding a traditional steaming hot Indian cutting chai glass, welcoming warm morning smile, fresh energized pose.',
    'mascot_streak_flame.png': PREFIX + 'cupping a small gentle glowing cartoon flame in both hands, warm protective proud smile, caring expression.',
    'mascot_urgent.png': PREFIX + 'intense glowing fiery red-orange pupils and embers burning inside its eyes, fierce urgent determined expression, NO laser beam lines, NO diagonal streaks, subtle fiery heat aura around eyes.',
    'mascot_streak_saved_relief.png': PREFIX + 'wiping sweat from its forehead with one hand, giving a big thumbs up with the other hand, relieved joyful happy grin.',
    'mascot_streak_frozen.png': PREFIX + 'wrapped in a cozy blue-and-white winter scarf/muffler around its neck, cute gentle shivering smile, tiny sparkle ice crystals.',

    # Group B: Mock Performance & Analysis
    'mascot_topper_shades.png': PREFIX + 'wearing cool black pixelated sunglasses (thug life shades), arms crossed, confident victorious smirk.',
    'mascot_score_drop.png': PREFIX + 'holding a scorecard paper with a cute disappointed pouting face, thoughtful index finger on chin.',
    'mascot_calculating_nerd.png': PREFIX + 'wearing round wireframe spectacles, holding a mini pocket calculator, scholarly focused expression.',
    'mascot_eureka_bulb.png': PREFIX + 'a bright glowing yellow cartoon lightbulb floating above its graduation cap, eureka excited wide eyes, happy open mouth.',
    'mascot_negative_marking.png': PREFIX + 'a small cute band-aid on its graduation cap, tiny spinning dizzy stars around head, holding a red ballpoint pen with a sheepish wry smile.',
    'mascot_magnifier_inspect.png': PREFIX + 'holding a large cartoon magnifying glass over one eye, inspecting a mock test paper with curious focused eyes.',

    # Group C: Study Modes & Daily Grind
    'mascot_workout.png': PREFIX + 'wearing an orange-red athletic gym sweatband on its graduation cap, flexing its cartoon arm bicep with energetic determined face.',
    'mascot_reading_scroll.png': PREFIX + 'sitting down wearing reading spectacles, highlighting text on an ancient study scroll with a yellow marker pen.',
    'mascot_tea_break.png': PREFIX + 'sipping tea from a ceramic cup and saucer, closed relaxed peaceful happy eyes, steam rising.',
    'mascot_midnight_oil.png': PREFIX + 'sitting beside a warm vintage green banker desk study lamp that glows in the dark, intense focused late night study expression.',
    'mascot_pen_sword.png': PREFIX + 'brandishing a giant blue ballpoint pen like a heroic knight sword, heroic ready-for-battle stance.',
    'mascot_formula_board.png': PREFIX + 'holding up a mini wooden slate/chalkboard with math formulas written on it, pointing with a chalk, teacher pose.',

    # Group D: Exam Countdown & Speed Drills
    'mascot_exam_alarm.png': PREFIX + 'holding a classic double-bell metal alarm clock with cartoon vibration ring lines, wide alert urgent eyes.',
    'mascot_calendar_days.png': PREFIX + 'holding a calendar page showing bold red numbers, urgent focused sprint stance.',
    'mascot_sprinting.png': PREFIX + 'running fast forward with motion blur lines on its little blue legs, graduation tassel flying backward in the wind.',
    'mascot_stopwatch.png': PREFIX + 'holding a round sports countdown stopwatch, thumb pressing the top button, tense focused race against time.',
    'mascot_meditation_calm.png': PREFIX + 'sitting cross-legged in calm zen meditation, hands resting peacefully, serene closed eyes, floating calmly.',

    # Group E: Milestones & Celebrations
    'mascot_celebration.png': PREFIX + 'holding a large shiny golden academic trophy cup high in both hands, colorful festive confetti drifting down, proud happy smile.',
    'mascot_gold_medal.png': PREFIX + 'wearing a gleaming golden award medal around its neck with an Indian tricolor ribbon, chest puffed out with pride.',
    'mascot_ladoo_party.png': PREFIX + 'holding a plate of round golden Indian Motichoor Ladoos, festive party blower/whistle in mouth with uncurling coil.',
    'mascot_party_popper.png': PREFIX + 'pulling a party popper cannon that explodes with colorful streamers, golden stars, and ribbons.',

    # Group F: Emotional Support & Doubt Solving
    'mascot_sleepy.png': PREFIX + 'wearing a cute striped sleeping nightcap tilted over its graduation cap, peaceful sleeping face with floating zzz bubbles.',
    'mascot_samadhan_detective.png': PREFIX + 'wearing a brown tweed Sherlock Holmes deerstalker cap, holding a classic detective magnifying glass, curious sleuth pose.',
    'mascot_thumbs_up_coach.png': PREFIX + 'giving two enthusiastic thumbs up with both hands, warm encouraging friendly wink in one eye, big open smile.',
    'mascot_pass_pro_crown.png': PREFIX + 'wearing a shiny golden royal monarch crown with jewels atop its graduation cap, sparkling glitter sparkles around it.'
}

def remove_bg(img_path):
    img = Image.open(img_path).convert('RGBA')
    datas = img.getdata()
    newData = []
    for item in datas:
        # Check if near white background
        if item[0] > 238 and item[1] > 238 and item[2] > 238:
            min_val = min(item[0], item[1], item[2])
            if min_val > 248:
                newData.append((255, 255, 255, 0))
            else:
                alpha = int((255 - min_val) * 25.5)
                newData.append((item[0], item[1], item[2], max(0, min(255, alpha))))
        else:
            newData.append(item)
    img.putdata(newData)
    img.save(img_path, 'PNG')

def generate(filename, prompt):
    out_path = os.path.join(OUTPUT_DIR, filename)
    print(f'Generating {filename}...')
    payload = json.dumps({
        'contents': [{
            'parts': [
                {'inlineData': {'mimeType': 'image/png', 'data': base_b64}},
                {'text': prompt}
            ]
        }],
        'generationConfig': {
            'responseModalities': ['IMAGE']
        }
    }).encode('utf-8')

    req = urllib.request.Request(URL, data=payload, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            for c in data.get('candidates', []):
                for p in c.get('content', {}).get('parts', []):
                    if 'inlineData' in p:
                        raw = base64.b64decode(p['inlineData']['data'])
                        with open(out_path, 'wb') as f:
                            f.write(raw)
                        remove_bg(out_path)
                        print(f'✓ Successfully generated and cleaned {filename}')
                        return True
            print(f'✗ No image data returned for {filename}')
    except urllib.error.HTTPError as e:
        print(f'✗ HTTP Error {e.code} for {filename}: {e.read().decode()[:200]}')
    except Exception as e:
        print(f'✗ Exception for {filename}: {e}')
    return False

if __name__ == '__main__':
    print(f'Starting batch generation of {len(MASCOTS)} mascots...')
    success_count = 0
    for fn, pr in MASCOTS.items():
        if generate(fn, pr):
            success_count += 1
        time.sleep(1.0) # Graceful pacing
    print(f'Done! Successfully generated {success_count}/{len(MASCOTS)} mascots.')
