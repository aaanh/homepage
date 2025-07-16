@echo off
setlocal

echo Templating local environment variables
xcopy .env.template .env.local /s /e

echo Installing latest Node.js...

:: Download and run Node.js LTS installer silently
powershell -Command "Invoke-WebRequest -Uri https://nodejs.org/dist/latest/win-x64/node.exe -OutFile node.exe"
powershell -Command "Invoke-WebRequest -Uri https://nodejs.org/dist/latest/win-x64/node.msi -OutFile node.msi"
msiexec /i node.msi /quiet

:: Add Node.js to PATH for current session (in case it's not already there)
set PATH=%ProgramFiles%\nodejs;%PATH%

echo Installing pnpm globally...
npm install -g pnpm

echo Installing project dependencies...
pnpm install

echo Starting development server...
start "" http://localhost:3000
pnpm dev

endlocal
