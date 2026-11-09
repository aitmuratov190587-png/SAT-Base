# SATBase Admin Console

SATBase’dan alohida ishlaydigan, administrator uchun mo‘ljallangan monitoring ilovasi. Vite + React + TypeScript ishlatadi va SATBase Supabase loyihasiga ulanadi.

## Rejada bajarilgan ishlar

- Mavjud React/Vite/Supabase stack qayta ishlatildi; admin UI alohida ilova papkasida.
- Dashboard Edge Function JWT’dan `app_metadata.role === 'admin'` talab qiladi; role `user_metadata`dan olinmaydi.
- Sana oralig‘i filtrlari, foydalanuvchi o‘sishi, yig‘ilgan study time grafiklari, 10 soniyalik real-time polling va user detail mavjud.
- Jonli panel mavjud `study_sessions` yozuvlaridan oxirgi 3 daqiqadagi faollikni, `flashrush_attempts`dan so‘nggi 24 soatdagi yakunlangan mocklarni ko‘rsatadi.
- Dashboard asosiy SATBase ilovasiga yozuv kiritmaydi; faqat mavjud jadvallarni o‘qiydi.

## Ishga tushirish

1. `admin-dashboard` papkasida `npm install` bajaring. Agar Windows’da `npm` PATH’da bo‘lmasa, workspace’dagi `node.exe` bilan Vite’ni chaqirish mumkin:
2. `.env.example` faylidan `.env.local` nusxasini yarating va Supabase publishable key qiymatini kiriting:

   ```env
   VITE_SUPABASE_URL=https://qkobxopqcmyoqxrklpvg.supabase.co
   VITE_SUPABASE_ANON_KEY=sb_publishable_...
   ```

3. `npm run dev` bajaring; ilova `http://localhost:4174` da ochiladi.
4. Google orqali tizimga kiring. Auth sozlamalaridagi Redirect URLs ro‘yxatida `http://localhost:4174/**` bo‘lishi kerak.

   ```powershell
   $node = "C:\Users\MINUR\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
   & $node "..\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 4174
   ```

Asosiy repodagi `../supabase/migrations/20261107_admin_monitoring_telemetry.sql` migratsiyasi qo‘llangan. Admin dashboard Edge Function’i asosiy sayt tracking hooklariga tayanmaydi; `profiles`, `study_sessions`, `flashrush_attempts` jadvallaridagi mavjud ma’lumotlarni o‘qiydi.

## Himoya modeli

- Brauzerda faqat Supabase publishable key ishlatiladi. Secret/service-role key klientga kiritilmaydi.
- `supabase/functions/admin-monitoring/index.ts` Edge Function JWT’ni Auth orqali tekshiradi va `app_metadata.role = admin` bo‘lganlargagina ruxsat beradi.
- Administrator tekshirilgach, server tomonida service-role orqali profil, o‘qish sessiyalari, Flashrush, javoblar, xatolar ro‘yxati va reja vazifalarini o‘qiydi.
- Mijozdan kelgan foydalanuvchi ID faqat student jadvalidan bitta profil tanlash uchun qo‘llanadi. Service key yoki barcha foydalanuvchi ma’lumotlari brauzerga yuborilmaydi.
- Edge Function `verify_jwt: true` bilan deploy qilinishi shart. Hozircha funksiyani Supabase loyihasiga deploy qilingandan keyin dashboard to‘liq ishlaydi.

## Deploy

`20261107_admin_monitoring_telemetry.sql` migratsiyasini qo‘llang, `admin-monitoring` funksiyasini SATBase Supabase loyihasiga deploy qiling (`verify_jwt: true`) va administrator JWT claim’ida `app_metadata.role = admin` ekanini tekshiring. Supabase Auth Google provider faol bo‘lishi hamda hosting manzili Auth Redirect URLs ro‘yxatiga kiritilishi kerak. Frontendni istalgan statik hostingga joylashtirish mumkin; har bir hosting manzili uchun Auth Redirect URL’ni qo‘shing.

### Netlify

1. Git repozitoriyni Netlify’ga ulang. Root’dagi `netlify.toml` base directory’ni `admin-dashboard` qilib belgilaydi.
2. Netlify → **Site configuration → Environment variables** bo‘limiga `VITE_SUPABASE_URL` va `VITE_SUPABASE_ANON_KEY` ni kiriting. `ANON_KEY` qiymati `sb_publishable_...` bo‘lsin; service-role yoki secret key’ni hech qachon qo‘ymang.
3. Deploy bo‘lgach Netlify bergan `https://<site>.netlify.app` domenini Supabase → **Authentication → URL Configuration → Redirect URLs** ro‘yxatiga `https://<site>.netlify.app/**` ko‘rinishida qo‘shing.
4. Admin claim deploydan avvalgi sessiyada bo‘lmasligi mumkin. Google hisobidan chiqib, qaytadan kiring.

Netlify SPA fallback нь `netlify.toml`-д тохируулагдсан тул `/admin/dashboard` route refresh хийхэд 404 болохгүй. Supabase migrations болон `admin-monitoring` Edge Function нь Netlify-гаас тусдаа Supabase орчинд ажиллана.

## Ko‘rsatkichlar

- Overview: o‘quvchilar ro‘yxati, oxirgi login, joriy va maqsad ballari, SAT sanasi, faollik va 90 kunlik o‘qish vaqti.
- Profil: boshlang‘ich / joriy / maqsad ballari, real study sessionlardan hisoblangan umumiy vaqt va streak, Flashrush mock natijalari, mavzu kesimidagi javob aniqligi, xatolar ro‘yxati va reja vazifalari.
- Profil jadvalidagi eskirib qolishi mumkin bo‘lgan `streak` va `total_study_hours` qiymatlarini haqiqat deb olmaydi; streak va vaqtni `study_sessions` yozuvlaridan hisoblaydi.
