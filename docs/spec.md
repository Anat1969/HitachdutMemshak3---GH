# אפיון: קורס בינה מלאכותית לאדריכלים

## המטרה
**בנייה של אפליקציה אחודה, ממשקית שלמה** להנחיית קורס בעיצוב מכוונה בינה מלאכותית. האפליקציה תציג 4 מודולים חינוך (מפגשים) בדרך שמסתירה עומס, מאפשרת גלילה מינימלית, והחשפת תוכן בהדרגה.

---

## קהל משתמש
- **סטודנטים לאדריכלות** (0-5 שנים ניסיון)
- **קורס בחינוך המשך** (מתקדמים)
- **תרחיש**: קריאה בדפדפן, בטלסקופ / בנייד, בזמן ההרצאה או בחזרה ביתה

---

## מבנה המידע

### 4 מודולים ראשיים (Lessons)
1. **אודות הקורס** — מי זה, מה זה, למה עכשיו
2. **מפגש א: זכויות בנייה** — מיפוי זכויות, מודל וחלופות, בדיקת התאמה
3. **מפגש ב: הצעות וניתוח** — בנייה על זכויות, משפחות הצעות, דוח השפעות
4. **סדר בבאלגן** — כלים לארגון בעיות מורכבות

### תתי-סעיפים בתוך כל מודול
כל מודול מחולק ל-**3 או יותר tabs/sections**, כל אחת עם תוכן אחר:
- **סקירה** / **Intro** — מה יש בחלק
- **נלמד** / **Learn** — תאוריה ו-5 שאלות עיקריות
- **נעשה** / **Do** — תרגול, אתגר, צעד בא

---

## דרישות ממשק

### Navigation & Structure
- ✓ **Sidebar קבוע בצד** (אם desktop) או **bottom nav** (אם mobile)
- ✓ **Breadcrumb / Stage indicator** — היכן אני עכשיו בקורס
- ✓ **Smooth transitions** בין סעיפים (לא "refresh")
- ✓ **RTL עברית מלא** — כל אלמנט יישור לימין, קריאה מימין לשמאל

### Lazy Loading & Progressive Disclosure
- ✓ **כל tab נטען דינמי** (לא הכל בודף אחד בעלות)
- ✓ **תוכן מתגלה בהדרגה** — כשמשתמש מקליק על tab, הוא מופיע בsmooth fade/slide
- ✓ **ללא עומס ראשוני** — בעומס אתחול, נטען רק מודול זה (אודות)

### Design
- ✓ **Clean, Professional, Inspired** — עיצוב אדריכלי (לא tech)
- ✓ **Color: Green/Gold/Red** for status (ירוק/זהב/אדום בהוראות בדיקה)
- ✓ **Typography**: system stack (San Francisco / Segoe UI / Arial)
- ✓ **Spacing**: 4/8/16/24/32/48 scale
- ✓ **Dark mode support** (prefers-color-scheme)
- ✓ **No emoji**, No intro fluff

### Accessibility
- ✓ **WCAG AA minimum** (contrasts, font sizes, keyboard nav)
- ✓ **Semantic HTML** (nav, section, article, heading hierarchy)
- ✓ **ARIA labels** where needed (expanded/collapsed, current page)
- ✓ **Respects prefers-reduced-motion**

---

## Architecture

### Static Application (No Backend)
- אין שרת, אין database בשלב זה
- כל התוכן בממיסוד: HTML + CSS + JavaScript
- ערכי דמו בקבוע בתוך ה-JS

### Layers (per master-app-builder)
```
01-spec/           ← אפיון זה
02-content/        ← texts, headings, sections
03-design-system/  ← CSS tokens, colors, typography, spacing
04-components/     ← reusable UI blocks (NavBar, TabContainer, etc.)
05-logic/          ← JS: routing, state, event handlers
06-data/           ← demo data constants
```

---

## Design System

### Colors
```
--bg:              #ffffff        (light mode) / #0d0d0d (dark)
--fg:              #0f0f0f                    / #f5f5f5
--fg-secondary:    #555555                    / #aaaaaa
--fg-tertiary:     #888888                    / #777777
--edge:            #e0e0e0                    / #2a2a2a
--accent-primary:  #2d7a4a (green)            / #5ed47d
--accent-secondary:#d4a017 (gold)             / #e8b923
--accent-tertiary: #b83a2e (red)              / #cc5a4a
```

### Typography
- **Font**: `-apple-system, "Segoe UI", Arial, sans-serif`
- **Headings**: 700/800 weight, 1.1-1.15 line-height
- **Body**: 400 weight, 1.6 line-height
- **Font sizes**: clamp() for scalable sizing

### Spacing Scale
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

---

## Content Mapping (to extract)

### Module 1: About
- File: `about.html` + `guide.html`
- Hero: small photo + bio
- Sections: Goal, Manifesto

### Module 2: Session A (Rights)
- File: `index.html`
- 3 tabs: Intro, Learn (5 questions), Do

### Module 3: Session B (Proposals)
- File: `session-b.html`
- 3 tabs: Intro, Learn, Do

### Module 4: Chaos (Organization)
- File: `order-in-chaos.html`
- 3 tabs: Intro, Learn (6 tools), Do

---

## Definition of Done (Phase 1)

✓ Single `public/index.html` file  
✓ All 4 lessons visible and navigable  
✓ All 3+ tabs per lesson working  
✓ RTL Hebrew perfect  
✓ Dark mode working  
✓ Mobile responsive (375px+)  
✓ Deployed and live  
✓ **Anat's approval on UX before merge**

---

**v1.0 · 2026-11-09**
