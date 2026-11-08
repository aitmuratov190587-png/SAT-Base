@echo off
title SATBase Local Dev Server
echo ========================================================
echo   Starting SATBase (SATBase.uz) Local Dev Server...
echo   Open in browser: http://localhost:5173
echo ========================================================
agy-node .\node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5173
pause
