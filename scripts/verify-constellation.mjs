import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const PREVIEW_PORT = 4173;
const CHROME_PORT = 9999;
const OUT_DIR = path.join(process.cwd(), 'scratch', 'verification');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('Spawning Chrome for verification...');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profileDir = path.join(os.tmpdir(), 'verify-constellation-prof-' + Date.now());
fs.mkdirSync(profileDir, { recursive: true });

const chromeProcess = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9999',
  '--user-data-dir=' + profileDir,
  '--disable-extensions',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  'about:blank',
], { stdio: 'ignore' });

let wsUrl = '';
for (let i = 0; i < 30; i++) {
  await new Promise((r) => setTimeout(r, 100));
  try {
    const res = await fetch('http://127.0.0.1:9999/json/list');
    if (res.ok) {
      const list = await res.json();
      const page = list.find((t) => t.type === 'page' && !t.url.startsWith('chrome-extension://')) || list.find(t => t.type === 'page');
      if (page?.webSocketDebuggerUrl) {
        wsUrl = page.webSocketDebuggerUrl;
        break;
      }
    }
  } catch {}
}

if (!wsUrl) {
  console.error('Could not connect to Chrome debugging port.');
  process.exit(1);
}

const ws = new WebSocket(wsUrl);
await new Promise((res) => {
  if (ws.readyState === 1) return res();
  ws.addEventListener('open', res);
});

let id = 1;
const callbacks = new Map();
ws.addEventListener('message', (e) => {
  const data = JSON.parse(e.data);
  if (data.id && callbacks.has(data.id)) {
    callbacks.get(data.id)(data.result);
    callbacks.delete(data.id);
  }
});

function send(method, params = {}) {
  return new Promise((resolve) => {
    const reqId = id++;
    callbacks.set(reqId, resolve);
    ws.send(JSON.stringify({ id: reqId, method, params }));
  });
}

await send('Page.enable');
await send('Runtime.enable');

const mockSession = {
  access_token: 'dummy-token',
  refresh_token: 'dummy-refresh',
  expires_in: 360000,
  expires_at: Math.floor(Date.now() / 1000) + 360000,
  token_type: 'bearer',
  user: {
    id: 'demo-student-id-123',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'scholar@satbase.internal',
    user_metadata: { full_name: 'Scholar User', name: 'Scholar' },
    app_metadata: { provider: 'email' },
    created_at: '2026-09-01T00:00:00.000Z',
  },
};

// ── TEST 1: EMPTY ACCOUNT (NEW USER, NO ANSWERS) ──
console.log('Testing Empty Account on Desktop 1280px...');
await send('Emulation.setDeviceMetricsOverride', {
  width: 1280,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false,
});

await send('Page.navigate', { url: `http://127.0.0.1:${PREVIEW_PORT}/welcome` });
await new Promise((r) => setTimeout(r, 600));

await send('Runtime.evaluate', {
  expression: `
    localStorage.setItem('sb-qkobxopqcmyoqxrklpvg-auth-token', JSON.stringify(${JSON.stringify(mockSession)}));
    localStorage.removeItem('satbase_progress_cache_demo-student-id-123');
    localStorage.setItem('satbase_theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  `,
});

await send('Page.navigate', { url: `http://127.0.0.1:${PREVIEW_PORT}/` });
await new Promise((r) => setTimeout(r, 1500));

// Scroll down to the constellation section
const secRect = await send('Runtime.evaluate', {
  expression: `(() => {
    const el = document.querySelector('[data-section="star-map-step-4b"]') || document.querySelector('.skill-constellation-container');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { top: Math.round(r.top + window.scrollY), height: Math.round(r.height), width: Math.round(r.width) };
  })()`,
  returnByValue: true,
});

console.log('Constellation Rect:', secRect.result.value);
const rect = secRect.result.value || { top: 400, height: 600, width: 1280 };

await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, rect.top - 40)})` });
await new Promise((r) => setTimeout(r, 400));

// Screenshot 1: Empty Desktop Light
let shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-empty-1280-light.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-empty-1280-light.png');

// Screenshot 2: Empty Desktop Dark
await send('Runtime.evaluate', {
  expression: `
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  `,
});
await new Promise((r) => setTimeout(r, 300));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-empty-1280-dark.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-empty-1280-dark.png');

// Screenshot 3: Empty Mobile 375px
await send('Emulation.setDeviceMetricsOverride', {
  width: 375,
  height: 812,
  deviceScaleFactor: 2,
  mobile: true,
});
await send('Runtime.evaluate', {
  expression: `
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  `,
});
await send('Runtime.evaluate', { expression: `window.scrollTo(0, 500)` });
await new Promise((r) => setTimeout(r, 400));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-empty-375-light.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-empty-375-light.png');

// ── TEST 2: ACCOUNT WITH PROGRESS & ANSWERS ──
console.log('Testing Account with Real Answers...');
const sampleProgress = {
  // Linear equations: 10 answered, 9 correct => 90% (moss / strong)
  q1: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q1', is_correct: true, time_seconds: 40 },
  q2: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q2', is_correct: true, time_seconds: 40 },
  q3: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q3', is_correct: true, time_seconds: 40 },
  q4: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q4', is_correct: true, time_seconds: 40 },
  q5: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q5', is_correct: true, time_seconds: 40 },
  q6: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q6', is_correct: true, time_seconds: 40 },
  q7: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q7', is_correct: true, time_seconds: 40 },
  q8: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q8', is_correct: true, time_seconds: 40 },
  q9: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q9', is_correct: true, time_seconds: 40 },
  q10: { user_id: 'demo-student-id-123', topic_id: 'm-alg-1', question_id: 'q10', is_correct: false, time_seconds: 50 },

  // Linear functions: 6 answered, 4 correct => 67% but trend delta +12 => (mustard / getting_there)
  q11: { user_id: 'demo-student-id-123', topic_id: 'm-alg-2', question_id: 'q11', is_correct: false, time_seconds: 60, created_at: '2026-11-01T10:00:00Z' },
  q12: { user_id: 'demo-student-id-123', topic_id: 'm-alg-2', question_id: 'q12', is_correct: false, time_seconds: 60, created_at: '2026-11-01T10:01:00Z' },
  q13: { user_id: 'demo-student-id-123', topic_id: 'm-alg-2', question_id: 'q13', is_correct: true, time_seconds: 60, created_at: '2026-11-02T10:00:00Z' },
  q14: { user_id: 'demo-student-id-123', topic_id: 'm-alg-2', question_id: 'q14', is_correct: true, time_seconds: 60, created_at: '2026-11-02T10:01:00Z' },
  q15: { user_id: 'demo-student-id-123', topic_id: 'm-alg-2', question_id: 'q15', is_correct: true, time_seconds: 60, created_at: '2026-11-02T10:02:00Z' },
  q16: { user_id: 'demo-student-id-123', topic_id: 'm-alg-2', question_id: 'q16', is_correct: true, time_seconds: 60, created_at: '2026-11-02T10:03:00Z' },

  // Equivalent expressions: 8 answered, 4 correct => 50% => (berry / needs_work)
  q17: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q17', is_correct: true, time_seconds: 70 },
  q18: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q18', is_correct: true, time_seconds: 70 },
  q19: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q19', is_correct: true, time_seconds: 70 },
  q20: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q20', is_correct: true, time_seconds: 70 },
  q21: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q21', is_correct: false, time_seconds: 70 },
  q22: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q22', is_correct: false, time_seconds: 70 },
  q23: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q23', is_correct: false, time_seconds: 70 },
  q24: { user_id: 'demo-student-id-123', topic_id: 'm-adv-1', question_id: 'q24', is_correct: false, time_seconds: 70 },

  // Cross-Text Connections: 10 answered, 9 correct => 90% (moss / strong)
  q25: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q25', is_correct: true, time_seconds: 50 },
  q26: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q26', is_correct: true, time_seconds: 50 },
  q27: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q27', is_correct: true, time_seconds: 50 },
  q28: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q28', is_correct: true, time_seconds: 50 },
  q29: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q29', is_correct: true, time_seconds: 50 },
  q30: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q30', is_correct: true, time_seconds: 50 },
  q31: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q31', is_correct: true, time_seconds: 50 },
  q32: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q32', is_correct: true, time_seconds: 50 },
  q33: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q33', is_correct: true, time_seconds: 50 },
  q34: { user_id: 'demo-student-id-123', topic_id: 'rw-crf-1', question_id: 'q34', is_correct: false, time_seconds: 50 },
};

await send('Runtime.evaluate', {
  expression: `
    localStorage.setItem('satbase_progress_cache_demo-student-id-123', JSON.stringify(${JSON.stringify(sampleProgress)}));
  `,
});

// Set back to desktop 1280px
await send('Emulation.setDeviceMetricsOverride', {
  width: 1280,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false,
});

await send('Page.navigate', { url: `http://127.0.0.1:${PREVIEW_PORT}/` });
await new Promise((r) => setTimeout(r, 1200));

await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, rect.top - 40)})` });
await new Promise((r) => setTimeout(r, 400));

// Screenshot 4: Answers Desktop Light
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-answers-1280-light.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-answers-1280-light.png');

// Screenshot 5: Answers Desktop Dark
await send('Runtime.evaluate', {
  expression: `
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  `,
});
await new Promise((r) => setTimeout(r, 300));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-answers-1280-dark.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-answers-1280-dark.png');

// Screenshot 6: Answers Mobile 375px Light
await send('Emulation.setDeviceMetricsOverride', {
  width: 375,
  height: 812,
  deviceScaleFactor: 2,
  mobile: true,
});
await send('Runtime.evaluate', {
  expression: `
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    window.scrollTo(0, 600);
  `,
});
await new Promise((r) => setTimeout(r, 400));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-answers-375-light.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-answers-375-light.png');

// Screenshot 7: Answers Mobile 375px Dark
await send('Runtime.evaluate', {
  expression: `
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  `,
});
await new Promise((r) => setTimeout(r, 300));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-answers-375-dark.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-answers-375-dark.png');

// Screenshot 8: Mobile Modal "See all skills"
await send('Runtime.evaluate', {
  expression: `
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    // Click the "See all skills" button
    const buttons = Array.from(document.querySelectorAll('button'));
    const seeAllBtn = buttons.find(b => b.textContent && b.textContent.includes('See all skills'));
    if (seeAllBtn) seeAllBtn.click();
  `,
});
await new Promise((r) => setTimeout(r, 500));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT_DIR, 'dashboard-constellation-modal-375-light.png'), Buffer.from(shot.data, 'base64'));
console.log('Captured dashboard-constellation-modal-375-light.png');

console.log('ALL VERIFICATION SCREENSHOTS CAPTURED SUCCESSFULLY!');

try {
  chromeProcess.kill();
} catch {}
process.exit(0);
