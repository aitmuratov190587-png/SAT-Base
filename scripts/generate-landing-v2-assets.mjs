import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const PORT = 5173;
const CHROME_PORT = 9998;
const LOG_FILE = path.join(process.cwd(), 'scratch', 'gen.log');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  process.stdout.write(line);
  fs.appendFileSync(LOG_FILE, line);
}

async function run() {
  fs.writeFileSync(LOG_FILE, `Starting run at ${new Date().toISOString()}...\n`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const profileDir = path.join(os.tmpdir(), 'satbase-chrome-prof-' + Date.now());
  if (!fs.existsSync(profileDir)) fs.mkdirSync(profileDir, { recursive: true });

  log(`Spawning headless Chrome on port ${CHROME_PORT}...`);
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${CHROME_PORT}`,
    `--user-data-dir=${profileDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'about:blank',
  ], { stdio: 'ignore' });

  let wsUrl = '';
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/list`);
      if (res.ok) {
        const list = await res.json();
        const page = list.find(t => t.type === 'page');
        if (page && page.webSocketDebuggerUrl) {
          wsUrl = page.webSocketDebuggerUrl;
          break;
        }
      }
    } catch {}
  }
  if (!wsUrl) throw new Error('Could not find page target in Chrome');

  log('Connecting to Chrome CDP at: ' + wsUrl);
  const ws = new WebSocket(wsUrl);
  await new Promise(res => {
    if (ws.readyState === 1) return res();
    ws.addEventListener('open', res);
  });
  log('Connected to Chrome CDP!');

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
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  // Set mock session for authenticated routes
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
  await new Promise(r => setTimeout(r, 1000));

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
      email: 'student@demo.internal',
      user_metadata: { full_name: 'Student', name: 'Student' },
      app_metadata: { provider: 'email' },
      created_at: '2026-09-01T00:00:00.000Z'
    }
  };

  await send('Runtime.evaluate', {
    expression: `
      localStorage.setItem('sb-qkobxopqcmyoqxrklpvg-auth-token', JSON.stringify(${JSON.stringify(mockSession)}));
      localStorage.setItem('satbase_theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    `
  });

  // 1. Capture Practice Arena screenshot
  log('Navigating to practice arena /practice/m-alg-1...');
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/practice/m-alg-1` });
  await new Promise(r => setTimeout(r, 2000));

  const practiceShot = await send('Page.captureScreenshot', {
    format: 'webp',
    quality: 80,
    clip: {
      x: 80,
      y: 64,
      width: 1280,
      height: 760,
      scale: 1
    }
  });

  const pBuf = Buffer.from(practiceShot.data, 'base64');
  fs.writeFileSync('public/images/landing/screenshot-practice-large.webp', pBuf);
  log(`Saved screenshot-practice-large.webp (bytes: ${pBuf.length})`);

  // 2. Capture Mock Exam screenshot (Bluebook interface)
  log('Navigating to /mock-tests/flashrush...');
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/mock-tests/flashrush` });
  await new Promise(r => setTimeout(r, 2000));

  const mockShot = await send('Page.captureScreenshot', {
    format: 'webp',
    quality: 80,
    clip: {
      x: 40,
      y: 20,
      width: 1360,
      height: 800,
      scale: 1
    }
  });

  const mBuf = Buffer.from(mockShot.data, 'base64');
  fs.writeFileSync('public/images/landing/screenshot-mock-large.webp', mBuf);
  log(`Saved screenshot-mock-large.webp (bytes: ${mBuf.length})`);

  // 3. Capture Cropped UI details for How It Works
  // Detail 1: Practice question card
  log('Capturing UI detail 1 (practice card)...');
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/practice/m-alg-1` });
  await new Promise(r => setTimeout(r, 1500));
  const uiPracticeCrop = await send('Page.captureScreenshot', {
    format: 'webp',
    quality: 75,
    clip: {
      x: 200,
      y: 120,
      width: 600,
      height: 380,
      scale: 1
    }
  });
  const c1Buf = Buffer.from(uiPracticeCrop.data, 'base64');
  fs.writeFileSync('public/images/landing/ui-practice-crop.webp', c1Buf);
  log(`Saved ui-practice-crop.webp (bytes: ${c1Buf.length})`);

  // Detail 2: Mock exam timer & banner
  log('Capturing UI detail 2 (mock header & timer)...');
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/mock-tests/flashrush` });
  await new Promise(r => setTimeout(r, 1500));
  const uiMockCrop = await send('Page.captureScreenshot', {
    format: 'webp',
    quality: 75,
    clip: {
      x: 60,
      y: 20,
      width: 640,
      height: 280,
      scale: 1
    }
  });
  const c2Buf = Buffer.from(uiMockCrop.data, 'base64');
  fs.writeFileSync('public/images/landing/ui-mock-crop.webp', c2Buf);
  log(`Saved ui-mock-crop.webp (bytes: ${c2Buf.length})`);

  // Detail 3: Analytics / study plan
  log('Capturing UI detail 3 (study plan / analytics)...');
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/analytics` });
  await new Promise(r => setTimeout(r, 1500));
  const uiPlanCrop = await send('Page.captureScreenshot', {
    format: 'webp',
    quality: 75,
    clip: {
      x: 260,
      y: 140,
      width: 640,
      height: 340,
      scale: 1
    }
  });
  const c3Buf = Buffer.from(uiPlanCrop.data, 'base64');
  fs.writeFileSync('public/images/landing/ui-plan-crop.webp', c3Buf);
  log(`Saved ui-plan-crop.webp (bytes: ${c3Buf.length})`);

  await send('Browser.close').catch(() => {});
  ws.close();
  chromeProc.kill();
  log('Assets generation complete!');
}

run().catch(err => {
  log('FATAL ERROR: ' + (err?.stack || err));
  process.exit(1);
});
