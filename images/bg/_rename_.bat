@echo off
setlocal enabledelayedexpansion
set cnt=0
for %%a in (*.JPG) do (
set /a cnt+=1
if not exist "intro-bg (!cnt!).jpg" call :rename
)
goto :EOF

:rename
for %%f in (*.JPG) do (
  set str=%%f
  set str_=!str:~0,8!
  if not !str_!==intro-bg (
    rename "!str!" "intro-bg (!cnt!).jpg"
    goto :EOF
  )
)
echo Nothing to rename
pause >nul 2>nul 
goto :EOF