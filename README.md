# SATBase

React, TypeScript, Vite, Tailwind CSS, and Supabase SAT practice application.

## Run locally

Use Node.js 20.19 or newer.

```sh
npm ci
```

Copy `.env.example` to `.env.local` and set the Supabase project URL and **public** publishable/anon key. Never put a service-role key, OAuth client secret, or database password in a `VITE_` variable.

```sh
npm run dev
npm test
npm run typecheck
npm run build
```

The development server listens on port 3000. Add your development and production origins to Supabase Auth redirect URLs. Configure Google OAuth in the Supabase dashboard; email sign-in depends on the project's email settings.

## Database setup

For a new database, run `supabase/schema.sql`, then `supabase/migrations/20260912_reliability.sql`, `supabase/migrations/20261029_security_and_progress_hardening.sql`, `supabase/migrations/20261029_function_execute_permissions.sql`, `supabase/migrations/20261104_real_activity_statistics.sql`, `supabase/migrations/20261104_sync_statistics_counters.sql`, `supabase/migrations/20261104_statistics_write_security.sql`, and `supabase/migrations/20261104_daily_study_time_buckets.sql` in that order in the Supabase SQL Editor. These migrations add active study-time tracking, idempotent test results, and statistics derived from saved practice and test activity.

For an existing database, run `supabase/migrations/20260912_reliability.sql`, `supabase/migrations/20261029_security_and_progress_hardening.sql`, `supabase/migrations/20261029_function_execute_permissions.sql`, `supabase/migrations/20261104_real_activity_statistics.sql`, `supabase/migrations/20261104_sync_statistics_counters.sql`, `supabase/migrations/20261104_statistics_write_security.sql`, and `supabase/migrations/20261104_daily_study_time_buckets.sql` in that order. They track visible study time, keep completed test attempts from being counted twice, derive streak and accuracy from recorded activity, prevent students from changing their own role, and repair progress deletion. Apply them through an administrator connection, never through the frontend.

The statistics functions read each signed-in user's own rows. Study time is recorded in short increments while the app is visible; streak days use the `Asia/Tashkent` calendar. A finished FlashRush attempt is saved once by its attempt ID, and dashboard totals combine those attempts with saved topic practice.

## Available functionality

- Google and email link authentication, profile creation, SAT goal setup, and light/dark themes.
- 248 Cross-Text Connections practice questions with answer review, elimination, flags, keyboard shortcuts, and per-question timing.
- A 20-question FlashRush diagnostic with two timed sections, randomized choices, calculator, answer review, and profile score saving.
- Question bank progress reflects this account's local practice history. Topics without question data are marked as coming soon.

Practice history is saved in local browser storage by account. An active FlashRush test and its latest result are saved in session storage by account, so a refresh restores them. Closing the tab may clear the active test. Practice history does not yet synchronize between devices.

The FlashRush score uses a weighted practice rubric. It is **not an official SAT score**, an adaptive assessment, or a validated prediction of a real SAT result. Official scoring uses a different methodology: https://satsuite.collegeboard.org/scores/what-scores-mean/how-scores-calculated.

The classroom roster, radar chart, and study-guide responses are previews or preset examples. Other curriculum topics, full-length adaptive tests, live classroom operations, several sidebar pages, and a connected AI tutor require further implementation.

## Validation

`npm test` checks data integrity, shuffled answer scoring, deadline expiration, latest-answer retention, refresh restoration, invalid stored data, and calendar dates. Browser validation should also cover authentication errors, setup errors, timer pause/resume, result saving, both themes, and phone widths.

When hosting, configure SPA fallback so deep links such as `/practice/cross-text` serve `index.html`. Keep `.env.local`, `CREDENTIALS.txt`, and build caches out of source control.
