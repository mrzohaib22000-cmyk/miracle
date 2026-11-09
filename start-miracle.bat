@echo off
title Miracle OS - Launcher
echo ========================================================
echo          STARTING MIRACLE LOCAL ECOSYSTEM
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/4] Starting Redis on port 6380...
start "Miracle Redis" /min "C:\Users\mrzoh\AppData\Local\Programs\redis\redis-server.exe" --port 6380

echo [2/4] Starting PostgreSQL on port 5433...
start "Miracle PostgreSQL" /min "D:\PROJECTS\_shared-tools\pgsql\pgsql\bin\postgres.exe" -D "D:\PROJECTS\_shared-tools\pgsql\data" -p 5433

echo Waiting for database to initialize...
timeout /t 3 /nobreak >nul

echo [3/4] Starting Miracle Backend API on port 4000...
start "Miracle API" /min cmd /c "cd /d "%~dp0apps\api" && node dist\main.js"

echo [4/4] Starting Miracle Web UI on port 3000...
start "Miracle Web UI" cmd /c "cd /d "%~dp0" && pnpm --filter web dev"

echo.
echo ========================================================
echo   Miracle is starting! Waiting for Web UI...
echo ========================================================
timeout /t 10 /nobreak >nul
start http://localhost:3000/pitch-studio
