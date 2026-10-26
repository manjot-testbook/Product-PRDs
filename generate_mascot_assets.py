import os
import json
import base64
import urllib.request
import urllib.error

KEY = 'AIzaSyDPHjOQlTgHBxb_RwVTmNNXSmclsHHka8o'
MODEL = 'gemini-3.1-flash-image'
URL = f'https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={KEY}'

BASE_MASCOT_PATH = '/Users/manjotsingh/DataspellProjects/OFFICE/Product PRDs/assets/mascot/mascot_default.png'
OUTPUT_DIR = '/Users/manjotsingh/DataspellProjects/OFFICE/Product PRDs/assets/mascot'

with open(BASE_MASCOT_PATH, 'rb') as f:
    base_b64 = base64.b64encode(f.read()).decode('utf-8')

PROMPTS = {
    'mascot_happy.png': (
        'Here is the reference mascot character: a standing open book with a navy blue graduation cap (mortarboard), '
        'dual-colored split body (cyan/light blue on left half, navy/dark blue on right half), cute cartoon face with big black round eyes, '
        'and little blue legs/shoes. '
        'Generate this exact character standing with a bright joyful smile, waving right hand friendly, clean solid white background, '
        'clean vector sticker illustration style, 2D flat design, preserving the exact colors and graduation cap.'
    ),
    'mascot_workout.png': (
        'Here is the reference mascot character: a standing open book with a navy blue graduation cap, '
        'dual-colored split body (cyan on left, navy on right), cartoon face, and little blue legs. '
        'Generate this exact character wearing an orange-red athletic gym sweatband across its graduation cap, '
        'flexing its cartoon arm bicep with a determined confident energetic expression, '
        'clean solid white background, clean vector sticker illustration, 2D flat style.'
    ),
    'mascot_urgent.png': (
        'Here is the reference mascot character: a standing open book with a navy blue graduation cap, '
        'dual-colored split body (cyan on left, navy on right), cartoon face, and little blue legs. '
        'Generate this exact character with intense glowing red-orange laser beams firing from its eyes, '
        'fierce dramatic urgent expression (like Duolingo streak at risk), subtle flame glow around it, '
        'clean solid white background, clean vector sticker style, 2D flat illustration.'
    ),
    'mascot_celebration.png': (
        'Here is the reference mascot character: a standing open book with a navy blue graduation cap, '
        'dual-colored split body (cyan on left, navy on right), cartoon face, and little blue legs. '
        'Generate this exact character wearing cool black pixelated thig-life sunglasses, holding a shiny golden academic trophy cup, '
        'colorful celebratory confetti floating around, proud happy smile, '
        'clean solid white background, clean vector sticker illustration.'
    ),
    'mascot_sleepy.png': (
        'Here is the reference mascot character: a standing open book with a navy blue graduation cap, '
        'dual-colored split body (cyan on left, navy on right), cartoon face, and little blue legs. '
        'Generate this exact character wearing a cozy striped sleeping nightcap tilted over its graduation cap, '
        'peaceful cute sleeping closed eyes with small zzz floating, happy relaxed gentle smile, '
        'clean solid white background, clean vector sticker illustration.'
    )
}

def generate_image(name, prompt):
    print(f'Generating {name} with {MODEL}...')
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
                        img_data = base64.b64decode(p['inlineData']['data'])
                        out_path = os.path.join(OUTPUT_DIR, name)
                        with open(out_path, 'wb') as out_f:
                            out_f.write(img_data)
                        print(f'Successfully saved {name} ({len(img_data)} bytes)')
                        return True
            print(f'No image returned for {name}')
    except urllib.error.HTTPError as e:
        print(f'Error for {name}: HTTP {e.code}: {e.read().decode()[:200]}')
    except Exception as e:
        print(f'Unexpected error for {name}: {e}')
    return False

for name, prompt in PROMPTS.items():
    generate_image(name, prompt)

print('All generation attempts finished.')
