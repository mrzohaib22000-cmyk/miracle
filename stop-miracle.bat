@echo off
title Miracle OS - Stop Services
echo Stopping Miracle local services...

for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /F /PID %%a 2>nul
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":4000" ^| findstr "LISTENING"') do taskkill /F /PID %%a 2>nul
taskkill /F /IM postgres.exe 2>nul
taskkill /F /IM redis-server.exe 2>nul

echo All Miracle background services stopped cleanly.
pause
