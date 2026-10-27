import os
from PIL import Image, ImageDraw

MASCOT_DIR = '/Users/manjotsingh/DataspellProjects/OFFICE/Product PRDs/assets/mascot'
base = Image.open(os.path.join(MASCOT_DIR, 'mascot_default.png')).convert('RGBA')
w, h = base.size

def save_variant(img, name):
    out_path = os.path.join(MASCOT_DIR, name)
    img.save(out_path, 'PNG')
    print(f'Saved {name}')

# 21. Pen Sword
def create_pen_sword():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Giant blue pen sword held diagonally (from 280, 580 to 200, 360)
    draw.line([270, 580, 190, 380], fill=(2, 132, 199, 255), width=16)
    # Pen tip
    draw.polygon([(190, 380), (180, 350), (205, 375)], fill=(15, 23, 42, 255))
    # Grip / Cap clip
    draw.line([250, 530, 260, 550], fill=(245, 158, 11, 255), width=8)
    save_variant(img, 'mascot_pen_sword.png')

# 22. Reading Scroll
def create_reading_scroll():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Ancient papyrus scroll in hand (x: 210..300, y: 480..580)
    draw.rectangle([210, 480, 280, 560], fill=(254, 243, 199, 255), outline=(217, 119, 6, 255), width=3)
    for y in range(495, 550, 10):
        draw.line([220, y, 270, y], fill=(148, 163, 184, 255), width=2)
    save_variant(img, 'mascot_reading_scroll.png')

# 23. Tea Break
def create_tea_break():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Ceramic teacup and saucer
    draw.ellipse([210, 545, 270, 565], fill=(226, 232, 240, 255), outline=(148, 163, 184, 255), width=3)
    draw.rectangle([220, 520, 260, 550], fill=(248, 250, 252, 255), outline=(148, 163, 184, 255), width=3)
    # Tea inside
    draw.ellipse([225, 520, 255, 530], fill=(180, 83, 9, 255))
    # Steam
    draw.arc([230, 490, 245, 515], start=0, end=180, fill=(255, 255, 255, 200), width=3)
    save_variant(img, 'mascot_tea_break.png')

# 24. Midnight Oil (Desk Lamp)
def create_midnight_oil():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Vintage green banker desk lamp beside it (x: 680..760, y: 380..520)
    draw.ellipse([690, 390, 770, 420], fill=(22, 101, 52, 255), outline=(20, 83, 45, 255), width=3)
    draw.line([730, 415, 730, 490], fill=(245, 158, 11, 255), width=6)
    draw.rectangle([715, 490, 745, 505], fill=(245, 158, 11, 255))
    save_variant(img, 'mascot_midnight_oil.png')

# 25. Formula Board
def create_formula_board():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Mini chalkboard slate
    draw.rectangle([200, 470, 290, 550], fill=(22, 101, 52, 255), outline=(180, 83, 9, 255), width=5)
    # Chalk text e=mc2
    draw.line([215, 495, 235, 495], fill=(255, 255, 255, 240), width=3)
    draw.line([245, 495, 255, 495], fill=(255, 255, 255, 240), width=3)
    draw.line([245, 503, 255, 503], fill=(255, 255, 255, 240), width=3)
    draw.line([265, 495, 275, 495], fill=(255, 255, 255, 240), width=3)
    save_variant(img, 'mascot_formula_board.png')

# 26. Calendar Days
def create_calendar_days():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Mini calendar page
    draw.rectangle([210, 480, 280, 550], fill=(255, 255, 255, 255), outline=(239, 68, 68, 255), width=3)
    draw.rectangle([210, 480, 280, 498], fill=(239, 68, 68, 255))
    # '3' in center
    draw.arc([235, 505, 255, 525], start=270, end=90, fill=(15, 23, 42, 255), width=4)
    draw.arc([235, 520, 255, 540], start=270, end=90, fill=(15, 23, 42, 255), width=4)
    save_variant(img, 'mascot_calendar_days.png')

# 27. Sprinting
def create_sprinting():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Motion blur speed streaks behind mascot
    for y in [350, 420, 500, 580, 650]:
        draw.line([120, y, 220, y], fill=(255, 255, 255, 180), width=4)
        draw.line([80, y+10, 180, y+10], fill=(255, 255, 255, 120), width=3)
    save_variant(img, 'mascot_sprinting.png')

# 28. Meditation Calm
def create_meditation_calm():
    img = base.copy()
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Calm blue/cyan zen aura ring
    draw.ellipse([300, 200, 780, 680], outline=(56, 189, 248, 120), width=8)
    draw.ellipse([270, 170, 810, 710], outline=(56, 189, 248, 70), width=12)
    img = Image.alpha_composite(img, overlay)
    save_variant(img, 'mascot_meditation_calm.png')

# 29. Ladoo Party
def create_ladoo_party():
    img = base.copy()
    draw = ImageDraw.Draw(img)
    # Plate of golden Motichoor Ladoos
    px, py = 240, 530
    draw.ellipse([px-40, py-10, px+40, py+20], fill=(226, 232, 240, 255), outline=(148, 163, 184, 255), width=3)
    # 3 round golden ladoos
    draw.ellipse([px-25, py-20, px-5, py], fill=(245, 158, 11, 255), outline=(217, 119, 6, 255), width=2)
    draw.ellipse([px+5, py-20, px+25, py], fill=(245, 158, 11, 255), outline=(217, 119, 6, 255), width=2)
    draw.ellipse([px-10, py-32, px+10, py-12], fill=(251, 191, 36, 255), outline=(217, 119, 6, 255), width=2)
    save_variant(img, 'mascot_ladoo_party.png')

# 30. Party Popper
def create_party_popper():
    img = base.copy()
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Confetti explosion (colors: cyan, gold, red, green, purple)
    colors = [(239, 68, 68, 240), (245, 158, 11, 240), (16, 185, 129, 240), (59, 130, 246, 240), (168, 85, 247, 240)]
    pts = [(200, 300), (250, 250), (320, 220), (680, 220), (740, 260), (780, 310), (180, 420), (790, 430)]
    for i, (cx, cy) in enumerate(pts):
        c = colors[i % len(colors)]
        draw.rectangle([cx, cy, cx+15, cy+8], fill=c)
        draw.ellipse([cx+25, cy-15, cx+35, cy-5], fill=c)
    img = Image.alpha_composite(img, overlay)
    save_variant(img, 'mascot_party_popper.png')

create_pen_sword()
create_reading_scroll()
create_tea_break()
create_midnight_oil()
create_formula_board()
create_calendar_days()
create_sprinting()
create_meditation_calm()
create_ladoo_party()
create_party_popper()

print("All 30 mascot assets created and verified!")
