# Build Backend Server

Create Express backend with OpenAI integration for STT and translation.

## What this command does:
1. Set up Express server on port 3001
2. Configure CORS for frontend communication
3. Add multer middleware for file uploads
4. Create /api/transcribe endpoint
5. Integrate OpenAI Whisper for speech-to-text
6. Add GPT translation service (English → Spanish)
7. Environment variable configuration
8. Basic error handling

## Context7 Documentation Reference:
Use Context7 to get current OpenAI API documentation:
- `mcp__context7__resolve-library-id` with "openai" 
- `mcp__context7__get-library-docs` focusing on "whisper" and "chat completions"
- Reference for audio file formats and API parameters

## Key files to create:

**backend/src/server.js** - Main Express server
**backend/src/routes/transcribe.js** - STT and translation endpoint  
**backend/src/services/openai.js** - OpenAI API integration
**backend/.env** - Environment variables (copy from .env.example)

## API endpoint:
- **POST /api/transcribe**
  - Accept: multipart/form-data with 'audio' file
  - Process: audio → Whisper STT → GPT translation
  - Return: `{ translation: "Spanish text" }`

## Environment setup:
- OPENAI_API_KEY required
- PORT=3001
- CORS enabled for localhost:3000

Make commit: "feat: add Express server with OpenAI integration"

**Time target**: 15 minutes