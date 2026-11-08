import fs from 'fs';
import { spawn } from 'child_process';
import http from 'http';

// 1. Read satbase-logo-full.png as base64
const imgBase64 = fs.readFileSync('public/images/satbase-logo-full.png').toString('base64');

const html = `
<!DOCTYPE html>
<html>
<body>
<canvas id="c"></canvas>
<script>
window.done = false;
const img = new Image();
img.src = "data:image/png;base64,${imgBase64}";
img.onload = () => {
  const c = document.getElementById("c");
  c.width = img.width;
  c.height = img.height;
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const idata = ctx.getImageData(0, 0, c.width, c.height);
  const d = idata.data;
  for (let y = 0; y < c.height; y++) {
    for (let x = 320; x < c.width; x++) {
      const i = (y * c.width + x) * 4;
      const r = d[i], g = d[i+1], b = d[i+2], a = d[i+3];
      if (a > 20) {
        // Orange check: in BASE, red is high (> 180) and blue is low (< 90)
        const isOrange = r > 180 && g > 60 && g < 160 && b < 100;
        if (!isOrange) {
          // Check if dark navy ("SAT"): low r, g, b
          const isDark = r < 100 && g < 100 && b < 120;
          if (isDark) {
            d[i] = 244;
            d[i+1] = 241;
            d[i+2] = 234;
          } else {
            // Subtitle text (SAT PREPARATION PLATFORM): light silver
            d[i] = 210;
            d[i+1] = 215;
            d[i+2] = 225;
          }
        }
      }
    }
  }
  ctx.putImageData(idata, 0, 0);
  window.resultData = c.toDataURL("image/png");
  window.done = true;
};
</script>
</body>
</html>
`;

// Start quick local server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(4892, async () => {
  // Launch Chrome with remote debugging
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--disable-gpu',
    'http://localhost:4892'
  ]);

  // wait 1.5s for page to render
  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await fetch('http://127.0.0.1:9223/json');
    const tabs = await listRes.json();
    const target = tabs.find(t => t.url && t.url.includes('4892')) || tabs[0];
    const wsUrl = target.webSocketDebuggerUrl;

    const WebSocket = (await import('ws')).default || (await import('ws'));
    const ws = new WebSocket(wsUrl);

    await new Promise(resolve => ws.on('open', resolve));

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (data) => {
          const res = JSON.parse(data.toString());
          if (res.id === id) {
            ws.off('message', handler);
            resolve(res.result);
          }
        };
        ws.on('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    // Poll until window.done === true
    let done = false;
    for (let attempts = 0; attempts < 30; attempts++) {
      const checkRes = await send('Runtime.evaluate', {
        expression: 'window.done',
        returnByValue: true,
      });
      if (checkRes?.result?.value === true) {
        done = true;
        break;
      }
      await new Promise(r => setTimeout(r, 200));
    }

    const evalRes = await send('Runtime.evaluate', {
      expression: 'window.resultData',
      returnByValue: true,
    });

    if (evalRes?.result?.value) {
      const base64Data = evalRes.result.value.replace(/^data:image\/png;base64,/, '');
      fs.writeFileSync('public/images/satbase-logo-dark.png', Buffer.from(base64Data, 'base64'));
      console.log('Successfully created public/images/satbase-logo-dark.png');
    } else {
      console.error('Failed to get resultData', evalRes);
    }

    ws.close();
  } catch (err) {
    console.error('Error during generation:', err);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});
