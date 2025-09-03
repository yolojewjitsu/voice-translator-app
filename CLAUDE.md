# Voice Translator App - Test Assignment

## Task Overview
Simple voice translator: record audio → STT (Whisper) → translate to Spanish → display result
Example: User says "Hello" → App shows "Hola"

## Tech Stack
- Frontend: React, MediaRecorder API
- Backend: Node.js, Express, OpenAI API
- Single repo with frontend/ and backend/

## Project Structure
```
voice-translator-app/
├── frontend/ (React app)
├── backend/ (Express server)
├── README.md
├── PROMPTS.md
└── TIMELINE.md
```

## Development Commands
```bash
# Backend (port 3001)
cd backend && npm start

# Frontend (port 3000) 
cd frontend && npm start
```

## Environment Variables
- `OPENAI_API_KEY` - for Whisper STT and GPT translation

## Git Strategy
Descriptive conventional commits for each development step:
- `feat: initial project setup`
- `feat: add express server with STT endpoint`
- `feat: implement audio recording in React`
- `fix: resolve CORS issues`

## Code Standards
- Simple, working MVP
- Basic error handling
- ES6+ JavaScript
- Functional React components