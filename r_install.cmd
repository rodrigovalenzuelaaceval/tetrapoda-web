@echo off
cd /d "g:\Mi unidad\00. TETRAPODA SPA\06. WEB\WEB_VISUALSTUDIO\WEB_VSC"
call npm install > install.log 2>&1
echo EXITCODE=%errorlevel% >> install.log
