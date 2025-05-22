@echo off
REM Start the Flask backend
start cmd /k "cd /d %~dp0 && venv\Scripts\activate && python app.py"
REM Start the React frontend
start cmd /k "cd /d %~dp0\frontend && npm install react-router-dom @mui/material @mui/styles @emotion/react @emotion/styled axios && npm start"