import os
from PIL import Image, ImageDraw, ImageFilter

MASCOT_DIR = '/Users/manjotsingh/DataspellProjects/OFFICE/Product PRDs/assets/mascot'
base = Image.open(os.path.join(MASCOT_DIR, 'mascot_default.png')).convert('RGBA')
w, h = base.size

def save_variant(img, name):
    out_path = os.path.join(MASCOT_DIR, name)
    img.save(out_path, 'PNG')
    print(f'Saved {name}')

# Helper to draw props
def create_topper_shades():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Draw pixelated sunglasses across eye area (x: 400..680, y: 390..450)
    # Left lens
    draw.rectangle([410, 395, 520, 445], fill=(15, 23, 42, 250))
    # Right lens
    draw.rectangle([560, 395, 670, 445], fill=(15, 23, 42, 250))
    # Bridge
    draw.rectangle([520, 410, 560, 425], fill=(15, 23, 42, 250))
    # Pixel white glints
    draw.rectangle([425, 405, 445, 415], fill=(255, 255, 255, 240))
    draw.rectangle([575, 405, 595, 415], fill=(255, 255, 255, 240))
    save_variant(img, 'mascot_topper_shades.png')

def create_nerd_glasses():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Round spectacles
    draw.ellipse([410, 380, 525, 465], outline=(30, 41, 59, 255), width=7)
    draw.ellipse([555, 380, 670, 465], outline=(30, 41, 59, 255), width=7)
    # Bridge
    draw.line([525, 420, 555, 420], fill=(30, 41, 59, 255), width=7)
    # Glint
    draw.arc([430, 395, 505, 445], start=45, end=135, fill=(255, 255, 255, 200), width=4)
    draw.arc([575, 395, 650, 445], start=45, end=135, fill=(255, 255, 255, 200), width=4)
    save_variant(img, 'mascot_calculating_nerd.png')

def create_eureka_bulb():
    img = base.copy()
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Draw yellow glowing bulb above graduation cap (center 540, y: 70)
    bx, by = 540, 90
    draw.ellipse([bx-45, by-45, bx+45, by+45], fill=(253, 224, 71, 255), outline=(234, 179, 8, 255), width=5)
    # Bulb base
    draw.rectangle([bx-18, by+40, bx+18, by+65], fill=(148, 163, 184, 255))
    # Filament
    draw.arc([bx-15, by-20, bx+15, by+10], start=0, end=180, fill=(202, 138, 4, 255), width=4)
    # Glow rays
    for angle, (dx, dy) in enumerate([(-70, 0), (70, 0), (0, -70), (-50, -50), (50, -50)]):
        draw.line([bx + dx*0.7, by + dy*0.7, bx + dx, by + dy], fill=(250, 204, 21, 230), width=6)
    img = Image.alpha_composite(img, overlay)
    save_variant(img, 'mascot_eureka_bulb.png')

def create_negative_marking():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Cute band-aid on graduation cap
    draw.rectangle([460, 220, 560, 255], fill=(254, 215, 170, 255), outline=(251, 146, 60, 255), width=3)
    draw.rectangle([495, 225, 525, 250], fill=(255, 237, 213, 255))
    # Dizzy stars around head
    draw.polygon([(360, 210), (370, 230), (390, 230), (375, 245), (380, 265), (360, 250), (340, 265), (345, 245), (330, 230), (350, 230)], fill=(250, 204, 21, 255))
    draw.polygon([(690, 200), (697, 215), (712, 215), (700, 225), (705, 240), (690, 230), (675, 240), (680, 225), (668, 215), (683, 215)], fill=(250, 204, 21, 255))
    save_variant(img, 'mascot_negative_marking.png')

def create_gold_crown():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Golden royal crown atop cap (x: 460..620, y: 130..220)
    crown_pts = [(460, 220), (450, 150), (500, 180), (540, 130), (580, 180), (630, 150), (620, 220)]
    draw.polygon(crown_pts, fill=(245, 158, 11, 255), outline=(217, 119, 6, 255))
    # Jewels
    draw.ellipse([445, 145, 455, 155], fill=(239, 68, 68, 255))
    draw.ellipse([535, 125, 545, 135], fill=(16, 185, 129, 255))
    draw.ellipse([625, 145, 635, 155], fill=(59, 130, 246, 255))
    save_variant(img, 'mascot_pass_pro_crown.png')

def create_streak_flame():
    img = base.copy()
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Cute flame held in hands (center 540, y: 550)
    fx, fy = 540, 560
    draw.ellipse([fx-35, fy-20, fx+35, fy+40], fill=(239, 68, 68, 230))
    draw.ellipse([fx-25, fy-35, fx+25, fy+25], fill=(245, 158, 11, 240))
    draw.ellipse([fx-15, fy-45, fx+15, fy+10], fill=(253, 224, 71, 255))
    img = Image.alpha_composite(img, overlay)
    save_variant(img, 'mascot_streak_flame.png')

def create_gold_medal():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Tricolor ribbon
    draw.line([490, 480, 530, 560], fill=(249, 115, 22, 255), width=8)
    draw.line([590, 480, 550, 560], fill=(34, 197, 94, 255), width=8)
    # Shiny gold medal
    draw.ellipse([515, 550, 565, 600], fill=(245, 158, 11, 255), outline=(217, 119, 6, 255), width=4)
    draw.ellipse([523, 558, 557, 592], fill=(251, 191, 36, 255))
    save_variant(img, 'mascot_gold_medal.png')

def create_winter_muffler():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Blue winter muffler around neck (x: 430..650, y: 530..580)
    draw.rectangle([440, 520, 640, 565], fill=(56, 189, 248, 255), outline=(2, 132, 199, 255), width=3)
    # Muffler tail
    draw.rectangle([570, 565, 610, 640], fill=(56, 189, 248, 255), outline=(2, 132, 199, 255), width=3)
    # Snowflakes
    draw.ellipse([370, 360, 385, 375], fill=(224, 242, 254, 220))
    draw.ellipse([690, 340, 705, 355], fill=(224, 242, 254, 220))
    save_variant(img, 'mascot_streak_frozen.png')

def create_alarm_clock():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Alarm clock beside hand (x: 230, y: 480)
    cx, cy = 250, 500
    draw.ellipse([cx-40, cy-40, cx+40, cy+40], fill=(239, 68, 68, 255), outline=(185, 28, 28, 255), width=4)
    draw.ellipse([cx-30, cy-30, cx+30, cy+30], fill=(255, 255, 255, 255))
    # Clock hands
    draw.line([cx, cy, cx, cy-18], fill=(15, 23, 42, 255), width=4)
    draw.line([cx, cy, cx+12, cy], fill=(15, 23, 42, 255), width=4)
    # Ring bells
    draw.arc([cx-45, cy-45, cx-25, cy-25], start=0, end=180, fill=(239, 68, 68, 255), width=5)
    draw.arc([cx+25, cy-45, cx+45, cy-25], start=0, end=180, fill=(239, 68, 68, 255), width=5)
    # Vibration lines
    draw.arc([cx-60, cy-20, cx-45, cy+20], start=90, end=270, fill=(245, 158, 11, 240), width=4)
    draw.arc([cx+45, cy-20, cx+60, cy+20], start=270, end=90, fill=(245, 158, 11, 240), width=4)
    save_variant(img, 'mascot_exam_alarm.png')

def create_magnifier():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Big magnifying glass
    mx, my = 680, 480
    draw.ellipse([mx-50, my-50, mx+50, my+50], outline=(148, 163, 184, 255), width=8)
    # Handle
    draw.line([mx+35, my+35, mx+80, my+80], fill=(100, 116, 139, 255), width=14)
    save_variant(img, 'mascot_magnifier_inspect.png')

def create_stopwatch():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    sx, sy = 240, 520
    draw.ellipse([sx-35, sy-35, sx+35, sy+35], fill=(30, 41, 59, 255), outline=(56, 189, 248, 255), width=4)
    draw.ellipse([sx-26, sy-26, sx+26, sy+26], fill=(248, 250, 252, 255))
    draw.line([sx, sy, sx+10, sy-14], fill=(239, 68, 68, 255), width=3)
    draw.rectangle([sx-6, sy-45, sx+6, sy-35], fill=(148, 163, 184, 255))
    save_variant(img, 'mascot_stopwatch.png')

def create_chai():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Cutting chai glass (x: 240, y: 520)
    gx, gy = 240, 540
    draw.polygon([(gx-18, gy-30), (gx+18, gy-30), (gx+14, gy+20), (gx-14, gy+20)], fill=(217, 119, 6, 255), outline=(255, 255, 255, 200), width=3)
    # Steam
    draw.arc([gx-10, gy-50, gx, gy-30], start=180, end=360, fill=(255, 255, 255, 180), width=3)
    draw.arc([gx, gy-60, gx+10, gy-40], start=0, end=180, fill=(255, 255, 255, 180), width=3)
    save_variant(img, 'mascot_morning_chai.png')

def create_relief_sweat():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Sweat drop on forehead (x: 630, y: 370)
    draw.ellipse([620, 365, 635, 385], fill=(56, 189, 248, 255))
    draw.polygon([(620, 375), (635, 375), (627, 355)], fill=(56, 189, 248, 255))
    save_variant(img, 'mascot_streak_saved_relief.png')

def create_score_drop():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Tear drop
    draw.ellipse([420, 460, 432, 478], fill=(56, 189, 248, 255))
    draw.polygon([(420, 468), (432, 468), (426, 452)], fill=(56, 189, 248, 255))
    save_variant(img, 'mascot_score_drop.png')

create_topper_shades()
create_nerd_glasses()
create_eureka_bulb()
create_negative_marking()
create_gold_crown()
create_streak_flame()
create_gold_medal()
create_winter_muffler()
create_alarm_clock()
create_magnifier()
create_stopwatch()
create_chai()
create_relief_sweat()
create_score_drop()

print("All programmatic mascot asset additions completed!")
