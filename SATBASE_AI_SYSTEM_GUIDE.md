# SATBase (SATBase.uz) — Tizim Arxitekturasi, Dizayn va Texnologik Qo'llanma
> **Ushbu hujjatning maqsadi:** Ushbu fayl har qanday sun'iy intellektga (AI/LLM) loyihaning biznes maqsadi, dizayn falsafasi (Academic Precision + Zen Relax), mikro-qadamli SA-ELO algoritmi, ma'lumotlar tuzilishi va texnologik stekini 100% aniqlik bilan tushuntirish uchun maxsus tuzilgan texnik pasport hisoblanadi.

---

## 1. LOYIHA HAQIDA UMUMIY MA'LUMOT (EXECUTIVE SUMMARY)

* **Loyiha nomi:** SATBase (SATBase.uz)
* **Yo'nalishi:** Digital SAT (College Board Bluebook) formatidagi rasmiy raqamli ta'lim, imtihon simulyatsiyasi va tahliliy platforma.
* **Asosiy falsafasi:** 
  1. **Vizual dizayn:** Stressli va ko'zni toliqtiruvchi kibersport/neon uslubidan voz kechilgan. Buning o'rniga jiddiy, lekin **"no odatiy relax"** (aqlni tinchlantiruvchi, xotirjam Skandinaviya/Kembrij kutubxonasi muhitini yaratuvchi Academic Precision) dizayni joriy etilgan.
  2. **Ilmiy ELO tizimi:** Ballarning sun'iy shishib ketishini oldini oluvchi, Digital SAT spetsifikatsiyasiga moslashtirilgan, 10 barobarga qisqartirilgan mikro-qadamli **SAT-Adaptive ELO (SA-ELO)** algoritmi.
* **Foydalanuvchi turlari:**
  1. **Talabalar (Scholars):** Mashq qilish (Practice Arena), to'liq mock test topshirish (FlashRush Diagnostic), o'z zaif mavzularini tahlil qilish va Sokratik AI Tutor yordamida o'rganish.
  2. **O'qituvchilar/Murabbiylar (Teachers/LMS):** O'quvchilar guruhini real vaqtda kuzatish (focus score, zaif tomonlar tahlili).

---

## 2. DIZAYN TIZIMI: "ACADEMIC PRECISION + NO ODATIY RELAX"

Dizayn talabi: **"Akademik jiddiylik va noan'anaviy xotirjamlik (Zen Scholar Sanctuary)"**. O'quvchining imtihon oldi stressini kamaytirish, diqqatni maksimal jamlash va ko'zni toliqtirmaslik asosiy o'rinda.

### A. Ranglar palitrasi (Serene Academic Palette)
1. **Light Mode (Paper Light & Warm Alabaster):**
   * Asosiy fon: `#F8FAFC` (Alabaster) va `#FAF9F6` (Warm paper).
   * Karta yuzasi: Toza oq (`#FFFFFF`) bilan birga whisper-soft hoshiyalar (`border-slate-200/80`).
   * Matn: Chuqur midnight slate (`#0F172A`, `#1E293B`) va yumshoq mutolaa ranglari (`#475569`).
   * Asosiy akademik ko'k: `#1D4ED8` (Official Royal Academic Blue) va `#2563EB`.
   * Xotirjamlik (Success): Muted Sage Green (`#059669` / `#10B981`) — to'g'ri javoblarda ko'zni qamashtirmaydigan tinchlantiruvchi yashil.
   * Xatolar (Review): Serious Academic Red / Terra Cotta (`#DC2626`) — signal beruvchi emas, mulohazaga chorlovchi qizil.
2. **Dark Mode (Serene Night Study):**
   * Asosiy fon: `#0B0F17` (Deep Serene Midnight Slate) — qora emas, ko'k-kulrang tungi osmon ohangi.
   * Kartalar: `#111827` (Slate-900) va nozik hoshiyalar (`#1F2937`).
   * Neon porlashlar butunlay olib tashlangan, o'rniga mayin tungi mutolaa kontrasti qo'yilgan.

### B. Rasmiy Akademik Darajalar (Academic Tiers)
Kibersport unvonlari (Apex Challenger, Grandmaster va Faceit) butunlay bekor qilingan. Rasmiy SAT ELO shkalasi (400–1600) bo'yicha 5 ta akademik daraja:
* **400–900:** `Foundational` (Boshlang'ich tushunchalar va diagnostika bosqichi)
* **910–1100:** `Developing Scholar` (Grammatik chegaralar va asosiy chiziqli algebra)
* **1110–1300:** `Proficient Candidate` (Barqaror va ishonchli yechimlar koridori)
* **1310–1450:** `Advanced Competitor` (Murakkab algebra va chuqur inferensiya mahorati)
* **1460–1600:** `Ivy League / Elite Tier` (Top-1% xalqaro oliygohlar darajasi)

### C. Tipografiya
* **Inter (`font-sans`):** Asosiy interfeys, navigatsiya, tugmalar.
* **JetBrains Mono / Geist Mono (`font-mono`):** Vaqt hisoblagichlari, ELO raqamlari, SA-ELO deltalari va formulalar.
* **Merriweather (`font-serif`):** Reading passages (uzun o'qish matnlari) va daraja sarlavhalari.

### D. Bluebook Test UI Parity (1:1 Nusxa)
Test paytida chalg'ituvchi barcha elementlar yashiriladi:
* Chap panel: Passage / Matn yoki Desmos / Formula sheet.
* O'ng panel: Savol sharti, variantlar, strikethrough (variantni o'chirish) va "Mark for Review".
* Markaziy taymer: Yashirish / ko'rsatish imkoniyati bilan tinch sur'atda ishlaydi.

---

## 3. MIKRO-ELO ALGORITMI: SAT-ADAPTIVE ELO (SA-ELO)
Foydalanuvchi minglab savol yechganda uning bali shiftga (800 ga) urilib ketmasligi va o'zining tabiiy bilim koridorida harakatlanishi uchun barcha ELO qadamlari 10 barobarga qisqartirilgan:

* **Shkala:** Math va Reading & Writing uchun alohida 200.0 dan 800.0 gacha (Database'da `float/decimal`, UI'da yaxlitlangan `integer`). Composite ball: 400 – 1600.
* **Savol qiyinlik bazasi ($R_{savol}$):**
  - Easy: 360
  - Medium: 520
  - Hard: 680
* **Logistik ehtimollik ($E$):**
  $$E = \frac{1}{1 + 10^{(R_{savol} - R_{user}) / 400}}$$
* **Mikro K-Factor:**
  - $< 50$ ta savol yechgan yangi foydalanuvchilar: $K = 4.8$ (Kalibratsiya)
  - $50 \le \text{savol} \le 200$: $K = 3.2$ (Aniqlashtirish)
  - $> 200$ ta savol yechganlar: $K = 1.6$ (Mustahkamlash)
* **Pacing Factor (Vaqt multiplikatori $P$):**
  - Math maqsadli vaqti: ~80 sek, R&W maqsadli vaqti: ~65 sek.
  - Shoshilib ($< 15$ sek) yechilsa va xato bo'lsa $P = 1.3$, to'g'ri bo'lsa $P = 0.7$ (tasodifiy topish ehtimoli).
  - Juda sekin yechilsa ($> 1.7 \times \text{target}$): $P = 0.85$.
  - Normal vaqt oralig'i: $P = 1.0$.
* **Delta va Clamping:**
  $$\Delta = K \times P \times (S - E)$$
  - Bitta savol uchun maksimal delta: $\pm 2.5$ ball.
  - Har qanday to'g'ri javobga minimal: $+0.1$ ball.
  - Har qanday xato javobga minimal: $-0.1$ ball.
  - Reyting chegarasi: $200.0 \le R_{user} \le 800.0$.
* **Koddagi implementatsiya:** `src/lib/saEloService.ts`

---

## 4. TEXNOLOGIK STEK (TECH STACK)

| Qatlam | Texnologiya | Vazifasi |
| :--- | :--- | :--- |
| **Frontend** | **React 18.3 + TypeScript 5.6** | SPA, tiplashtirilgan komponentlar |
| **Build & Dev** | **Vite 6.0** | Tezkor HMR va ESM bundle |
| **CSS & Design** | **Tailwind CSS 3.4** | Maxsus academic surface va calm shadow tokenlar |
| **Routing** | **React Router DOM v6** | Marshrutlash va ProtectedRoute |
| **Backend & DB** | **Supabase JS (v2)** | PostgreSQL, Auth, RLS xavfsizlik qoidalari |
| **Matematika** | **Desmos API / Embed** | Rasmiy Bluebook Graphing Calculator simulyatsiyasi |
| **ELO Dvijogi** | **saEloService.ts** | Matematik mikro-SA-ELO hisoblash mexanizmi |

---

## 5. LOYIHANING PAPKA TUZILISHI (DIRECTORY TREE)

```
e:/SAT-Base/
├── supabase/
│   └── schema.sql              # Profiles, question progress, test results jadvallari
├── src/
│   ├── App.tsx                 # Marshrutlar va layout ulash
│   ├── index.css               # Serene academic card, soft scrollbar, typography
│   ├── components/
│   │   ├── ai/AITutorDrawer.tsx # Sokratik uslubdagi AI maslahatchi
│   │   ├── bluebook/           # Desmos, Formula Sheet, Header, Footer, Review modal
│   │   ├── calculator/         # DesmosCalculator moduli
│   │   ├── gamification/
│   │   │   ├── HexRankBadge.tsx   # Serene Academic Tier (Ivy League/Foundational)
│   │   │   └── RadarPacingChart.tsx # Cognitive & Pacing telemetriya radari
│   │   ├── navigation/
│   │   │   ├── EsportsHeader.tsx  # Academic Topbar (SA-ELO, streak, theme)
│   │   │   └── EsportsSidebar.tsx # Academic Sidebar (Overview, Diagnostics, QB)
│   │   ├── CountdownTimer.tsx  # SAT imtihon sanasigacha xotirjam teskari hisoblagich
│   │   └── ThemeToggle.tsx     # Paper Light <-> Serene Night Study almashtirgich
│   ├── contexts/
│   │   ├── AuthContext.tsx     # Supabase Auth
│   │   └── AppContext.tsx      # UserProfile, TargetScore, CurrentScore (Math/English)
│   ├── data/
│   │   ├── math/               # 1 050+ ta Algebra savollari (5 ta mavzu)
│   │   ├── crossTextQuestions.ts # 248 ta Craft & Structure savollari
│   │   ├── flashRushMock.ts    # 2 modulli to'liq Bluebook Mock testi
│   │   └── questionRegistry.ts # Barcha bo'limlar katalogi
│   ├── lib/
│   │   ├── saEloService.ts     # Mikro SA-ELO algoritmi va Tiers
│   │   ├── supabaseClient.ts   # Supabase klient
│   │   └── progressService.ts  # Savollar natijalarini Supabase'ga saqlash
│   └── pages/
│       ├── Dashboard.tsx       # Boshqaruv paneli (Sanctuary HUD)
│       ├── QuestionBank.tsx    # Mavzular daraxti va aniqlik tahlili
│       ├── TopicPracticeArena.tsx # Split-screen real vaqtli mashq maydoni (SA-ELO ulangan)
│       ├── FlashRushMockTest.tsx  # Rasmiy Bluebook imtihon simulyatori
│       └── FlashRushResults.tsx   # Shkalalangan ball va xatolar tahlili
```

---

## 6. HOZIRGI HOLAT VA KEYINGI BOSQICHLAR (ROADMAP)

1. **Academic Precision & Zen Relax:** To'liq joriy etildi (barcha neonlar yo'qotildi, tinchlantiruvchi alabaster/slate, xotirjam vaqt hisoblagichlari, akademik unvonlar o'rnatildi).
2. **SA-ELO integratsiyasi:** `saEloService.ts` yaratildi, `TopicPracticeArena.tsx` da har bir savol yechilganda ball $\pm 2.5$ doirasida mikro-yangilanadi va profilga yoziladi.
3. **Keyingi vazifalar:**
   * `/saved` (Review / Error Vault): Xato qilingan savollarni alohida mashq qilish darchasi.
   * `/analytics` (Skill Telemetry): Bo'limlar bo'yicha kuchli va zaif tomonlar grafigi.
   * Word (`.docx`) fayllardagi Geometry, Advanced Math savollarini JSON/TS ga o'tkazish.

---

## 7. AI BILAN ISHLASHDA USHBU HUJJATNI QANDAY ISHLATISH KERAK?
Boshqa har qanday AI modeliga loyiha haqida topshiriq bermoqchi bo'lsangiz, quyidagi promptdan foydalaning:

> *"Mana bizning SATBase platformamizning to'liq arxitektura, 'Academic Precision (Zen Relax)' dizayn tizimi va mikro-qadamli SA-ELO algoritmi qo'llanmasi (`SATBASE_AI_SYSTEM_GUIDE.md`). Saytimizga yangi kod yoki funksiya yozayotganda ushbu qoidalar, ranglar va formulalarga 100% rioya qilgan holda toza TypeScript va Tailwind CSS kod yozib ber."*
