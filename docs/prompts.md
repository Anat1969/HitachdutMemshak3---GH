# פרומפטים למפגש א

כל פרומפט עצמאי: אפשר להעתיק אותו לכל כלי AI בלי קבצים נוספים. העברית היא הגרסה הראשית, והאנגלית היא עותק לשימוש בכלים שמעדיפים אנגלית.

## שלב 1: מיפוי זכויות

### עברית
אתה מנתח תב"ע ישראלית. קלט: כל מסמכי התכנית שהועלו (הוראות, תשריט, טבלת זכויות, נספחים) ומספר המגרש או תא השטח.
1. אתר ופענח את המגרש בטבלת הזכויות ובתשריט. אם הם לא מסכימים, עצור והצג את הסתירה.
2. חלץ לכל מגרש: שטח מגרש; תכסית מרבית; אחוזי בנייה מרביים (ציין אם מוגדרים כשטח כולל או מפוצלים לעיקרי ושירות, לפי תקנות חישוב השטחים, התשנ"ב-1992); מספר קומות מרבי מעל ומתחת לקרקע; גובה מרבי והגדרתו; קווי בניין קדמי, צדדי ואחורי; מספר יח"ד מרבי וצפיפות; שימושים מותרים; דרישות חניה.
3. לכל ערך החזר: ערך, יחידה, מקור (מסמך, עמוד, סעיף או תא), ורמת ודאות: מלאה, חלקית או חסרה.
4. בצע בדיקות עקביות: רכיבי השטח מסתכמים לסה"כ; אחוזי הבנייה תואמים לשטחים; שטח השייפ תואם לשטח הטבלה בסטייה עד 0.5%.
5. אל תנחש ערך חסר. סמן "לא נמצא" ורשום איזה מסמך לבדוק.
6. הפלט: טבלה אחת, וממצאי עקביות בסוף.

### English
You are an analyst of Israeli detailed plans (TABA). Input: all uploaded plan documents (ordinances, zoning map, rights table, appendices) and the plot or sub-plot number.
1. Locate the plot in the rights table and on the map. If they disagree, stop and show the conflict.
2. Extract and decode, for this plot: plot area; maximum coverage; maximum building rights (state whether expressed as total area or split into main and service areas under the 1992 area-calculation regulations); maximum floors above and below ground; maximum height and its definition; front, side and rear setbacks; maximum dwelling units and density; permitted uses; parking requirements.
3. For each value return: value, unit, source (document, page, section or table cell), and confidence (full, partial or missing).
4. Run consistency checks: components sum to the total; percentages match the areas; plot shape area matches the table area within 0.5%.
5. Never guess a missing value. Mark it "not found" and name the document to check.
6. Output one table, followed by the consistency findings.

## שלב 2: מודל וחלופות

### עברית
בנה מודל מסה תלת-ממדי מתוך הזכויות שחולצו בשלב 1 בלבד. קלט: גבולות המגרש, קווי הבניין, התכסית המרבית, מספר הקומות, הגובה המרבי, ושלוש חלופות שמוגדרות לפי שטח קומה ומספר קומות.
1. בנה את חלופות א', ב' ו-ג' כנפחים שנשארים בתוך אזור הבנייה המותר, ומפה כל אחת מהן מול קווי הבניין.
2. הצג שלוש תצוגות: איזומטרית, תוכנית על וחזית. במודל התלת-ממדי אפשר לסובב, להזיז ולזום בעכבר.
3. רמת פירוט בינונית: רצפות, רצועות חלונות, גג וקו מגרש מסומן.
4. לכל חלופה חשב: תכסית באחוזים, אחוזי בנייה, מספר קומות, גובה ושטח כולל. גובה קומה 3.2 מ', אלא אם המסמכים קובעים אחרת.
5. חשוף כל חריגה מקו בניין או מתכסית, וסמן אותה באדום עם המספר המדויק.
6. כל המספרים נפתחים בפאנלים מתקפלים, כדי שהמסך לא יהיה צפוף.

### English
Build a 3D massing model from the rights extracted in stage 1 only. Inputs: plot boundary, setbacks, maximum coverage, floors, maximum height, and three alternatives defined by footprint area and floor count.
1. Build alternatives A, B and C as extruded footprints, and map each one against the permitted building zone.
2. Show isometric, plan and elevation views. The 3D view supports orbit, pan and zoom with the mouse (three.js OrbitControls).
3. Medium detail: slabs, window bands, roof, and a marked plot boundary.
4. For each alternative calculate coverage %, building rights %, floors, height and gross area. Floor-to-floor height is 3.2 m unless the documents state otherwise.
5. Expose any setback or coverage breach, and mark it in red with the exact figure.
6. Place all numbers in collapsible panels so the screen stays uncluttered.

## שלב 3: בדיקת התאמה

### עברית
בחן כל חלופה לאורך שני צירים.
ציר תב"ע ועירייה: כל פרמטר מהשלב הראשון מול החלופה. ירוק: עומד בתנאי עם מרווח של לפחות 5%. צהוב: עומד בתנאי עם מרווח קטן מ-5%. אדום: חורג.
ציר יזם: שטח נטו למכירה מתוך השטח הכולל (ברירת מחדל 80%, ניתן לשינוי); מספר יח"ד מול יעד היזם (שדה קלט); שטח יח"ד ממוצע (ברירת מחדל 90 מ"ר); ניצול זכויות מתוך המותר. ניצול מעל 90% ירוק, בין 75% ל-90% צהוב, מתחת ל-75% אדום.
חשב אחוזי התאמה: ירוק = 1, צהוב = 0.5, אדום = 0, ממוצע על כל הבדיקות כפול 100.
לכל חלופה: טבלה, אחוזי התאמה, יתרון אחד, חיסרון אחד, ומה לבדוק מול הרשות. אם נתון מהשלב הראשון חסר, זקק את הפער וסמן אותו, ואל תשלים אותו.

### English
Examine each alternative on two axes.
Planning axis: each parameter from stage 1 against the alternative. Green: meets the limit with at least 5% margin. Yellow: meets the limit with less than 5% margin. Red: exceeds the limit.
Developer axis: net sellable share of gross area (default 80%, editable); unit count against the developer target (input field); average unit size (default 90 sqm, editable); rights utilization as a share of permitted rights: green above 90%, yellow 75% to 90%, red below 75%.
Fit score: green = 1, yellow = 0.5, red = 0, averaged over all checks, times 100.
For each alternative show the table, the score, one advantage, one disadvantage, and what to verify with the planning authority. Distill the gap if a stage 1 value is missing, and do not fill it in.

## דוח השוואה

### עברית
סנתז דוח השוואה בין החלופות. מבנה הדוח:
1. מסקנה: החלופה המומלצת בשלושה משפטים.
2. טבלת השוואה: פרמטר, חלופה א', ב', ג', סטטוס.
3. יתרונות וחסרונות לכל חלופה.
4. המלצה, וההנחות שעליה היא נשענת. חשוף במפורש כל הנחה שלא הגיעה ממסמך.
5. מקור לכל מספר.
כתוב בעברית תקינה ורציפה, בלי הקדמות. אל תציג מסקנה בלי לציין את הנתונים שעליה היא נשענת.

### English
Synthesize a comparison report for the alternatives. Structure: 1. Conclusion: the recommended alternative in three sentences. 2. Comparison table: parameter, A, B, C, status. 3. Advantages and disadvantages per alternative. 4. Recommendation and the assumptions behind it; expose every assumption not taken from a document. 5. Source for every number. Write plainly, with no preamble. Do not present a conclusion without naming the data it rests on.
