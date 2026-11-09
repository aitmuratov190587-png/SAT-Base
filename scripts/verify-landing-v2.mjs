import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const PREVIEW_PORT = 4173;
const CHROME_PORT = 9999;
const OUT_DIR = path.join(process.cwd(), 'scratch', 'verification');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('SPAWNING CHROME...');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profileDir = path.join(os.tmpdir(), 'verify-prof-' + Date.now());
fs.mkdirSync(profileDir, { recursive: true });

const p = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9999',
  '--user-data-dir=' + profileDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

console.log('SPAWNED, FETCHING LIST...');
let wsUrl = '';
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 100));
  try {
    const res = await fetch('http://127.0.0.1:9999/json/list');
    if (res.ok) {
      const list = await res.json();
      const page = list.find(t => t.type === 'page');
      if (page?.webSocketDebuggerUrl) {
        wsUrl = page.webSocketDebuggerUrl;
        break;
      }
    }
  } catch {}
}
console.log('WS URL:', wsUrl);

const ws = new WebSocket(wsUrl);
await new Promise(res => {
  if (ws.readyState === 1) return res();
  ws.addEventListener('open', res);
});
console.log('WS CONNECTED!');

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
  return new Promise(resolve => {
    const reqId = id++;
    callbacks.set(reqId, resolve);
    ws.send(JSON.stringify({ id: reqId, method, params }));
  });
}

await send('Page.enable');
await send('Runtime.enable');

// --- 1. Desktop 1280px Screenshots ---
console.log('Navigating to desktop 1280px...');
await send('Emulation.setDeviceMetricsOverride', {
  width: 1280,
  height: 800,
  deviceScaleFactor: 2,
  mobile: false
});

await send('Page.navigate', { url: `http://127.0.0.1:${PREVIEW_PORT}/welcome` });
await new Promise(r => setTimeout(r, 1000));

const sectionRects = await send('Runtime.evaluate', {
  expression: `(() => {
    return Array.from(document.querySelectorAll('section')).map((s, i) => {
      const r = s.getBoundingClientRect();
      return { id: s.id || ('sec-' + i), top: Math.round(r.top + window.scrollY), height: Math.round(r.height) };
    });
  })()`,
  returnByValue: true
});
console.log('Sections:', sectionRects.result.value);

const sections = sectionRects.result.value;
for (const s of sections) {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${s.top})` });
  await new Promise(r => setTimeout(r, 300));
  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: s.top, width: 1280, height: Math.min(s.height, 900), scale: 1 }
  });
  fs.writeFileSync(path.join(OUT_DIR, `${s.id}-1280.png`), Buffer.from(shot.data, 'base64'));
  console.log(`Saved ${s.id}-1280.png (height: ${s.height}, size: ${shot.data.length})`);
}

// Hero at 1280
await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
const heroShot = await send('Page.captureScreenshot', {
  format: 'png',
  clip: { x: 0, y: 0, width: 1280, height: 800, scale: 1 }
});
fs.writeFileSync(path.join(OUT_DIR, 'hero-1280.png'), Buffer.from(heroShot.data, 'base64'));

// --- 2. Mobile 375px Screenshots ---
console.log('Navigating to mobile 375px...');
await send('Emulation.setDeviceMetricsOverride', {
  width: 375,
  height: 750,
  deviceScaleFactor: 2,
  mobile: true
});

await send('Page.navigate', { url: `http://127.0.0.1:${PREVIEW_PORT}/welcome` });
await new Promise(r => setTimeout(r, 1000));

const docHeight = await send('Runtime.evaluate', {
  expression: 'document.documentElement.scrollHeight',
  returnByValue: true
});
console.log('Mobile document height:', docHeight.result.value);
const totalH = docHeight.result.value;

let currentY = 0;
let segIndex = 1;
while (currentY < totalH) {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${currentY})` });
  await new Promise(r => setTimeout(r, 300));
  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: currentY, width: 375, height: Math.min(750, totalH - currentY), scale: 1 }
  });
  const segName = `full-375-seg${segIndex}.png`;
  fs.writeFileSync(path.join(OUT_DIR, segName), Buffer.from(shot.data, 'base64'));
  console.log(`Saved ${segName} (y: ${currentY}, size: ${shot.data.length})`);
  if (segIndex === 1) {
    fs.writeFileSync(path.join(OUT_DIR, 'hero-375.png'), Buffer.from(shot.data, 'base64'));
  }
  currentY += 700;
  segIndex++;
}

await send('Browser.close').catch(() => {});
ws.close();
p.kill();
console.log('ALL VERIFICATION SCREENSHOTS CAPTURED!');
process.exit(0);
