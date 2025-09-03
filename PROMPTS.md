# ⚡ Claude Code Commands Workflow

Use slash-commands instead of copy-paste prompts for maximum efficiency!

## 🚀 Recommended Workflow

Execute these slash-commands in Claude Code:

1. **`/prime`** - Load project context (start here!)
2. **`/load-docs`** - Load documentation via Context7 (0-2 min)
3. **`/setup-project`** - Initialize structure (2-7 min)
4. **`/build-backend`** - Create Express + OpenAI (7-22 min)  
5. **`/build-frontend`** - Build React UI (22-42 min)
6. **`/integrate-test`** - Connect & test (42-52 min)
7. **`/finalize-app`** - Documentation & cleanup (52-60 min)

## ⚡ Why Commands > Copy-Paste?

- **Faster**: No copying/pasting
- **Structured**: Each command has clear goals
- **Time-bounded**: Built-in time targets
- **Context-aware**: Commands understand project state
- **Reusable**: Can re-run if needed

---

## Legacy Prompts (for reference only)

## Step 1: Project Setup (0-5 min)

```
Create a voice translator app with React frontend and Node.js backend in a single repo. 

Structure needed:
- voice-translator-app/
  - frontend/ (React app)
  - backend/ (Express server)
  - README.md
  - .gitignore

Initialize git, create package.json files for both frontend and backend. Backend should use Express, cors, multer, and openai packages. Frontend should be a basic React app.

Add a .gitignore that excludes node_modules, .env files, and build folders.
```

## Step 2: Backend Development (5-20 min)

```
Create Express backend in /backend with these features:
1. Express server on port 3001 with CORS enabled
2. POST /api/transcribe endpoint that accepts audio files
3. Integration with OpenAI Whisper API for speech-to-text
4. Integration with OpenAI GPT for English to Spanish translation
5. Use multer for file uploads to handle audio files
6. Environment variable support for OPENAI_API_KEY
7. Basic error handling and logging

The endpoint should:
- Accept audio file upload
- Send to Whisper for transcription
- Send English text to GPT with prompt "Translate this English text to Spanish: [text]"
- Return JSON response with the Spanish translation
```

## Step 3: Frontend Development (20-40 min)

```
Create React frontend in /frontend with:
1. Audio recording using MediaRecorder API
2. Simple UI with "Start Recording" and "Stop Recording" buttons  
3. Audio playback functionality to review recorded audio
4. Send recorded audio file to backend /api/transcribe endpoint
5. Display the Spanish translation result
6. Loading states and basic error handling
7. Clean, responsive CSS styling

Components needed:
- AudioRecorder component for recording functionality
- TranslationDisplay component for showing results
- App component to tie everything together

Handle microphone permissions and browser compatibility.
```

## Step 4: Integration & Testing (40-50 min)

```
Connect frontend and backend:
1. Test the complete flow: record → transcribe → translate → display
2. Fix any CORS issues between frontend (port 3000) and backend (port 3001)
3. Handle edge cases: no microphone permission, network errors, empty audio
4. Add proper loading indicators during processing
5. Improve error messages for better user experience
6. Test with different English phrases and verify Spanish translations

Make sure the app works end-to-end on localhost.
```

## Step 5: Final Touches (50-60 min)

```
Polish the application:
1. Update README.md with clear setup and run instructions
2. Clean up any console.logs or debugging code
3. Ensure no API keys are hardcoded (use environment variables)
4. Make final git commits with descriptive messages
5. Test the complete setup process from scratch
6. Add any missing error handling or user feedback

Create comprehensive documentation for someone else to run the app locally.
```

## Quick Commands for Each Step

**Git commits to make:**
```bash
git add -A && git commit -m "feat: initial project setup and structure"
git add -A && git commit -m "feat: add Express server with OpenAI integration"  
git add -A && git commit -m "feat: implement audio recording React component"
git add -A && git commit -m "feat: connect frontend and backend for full workflow"
git add -A && git commit -m "docs: add comprehensive README and final cleanup"
```

**Testing commands:**
```bash
# Test backend endpoint directly
curl -X POST http://localhost:3001/api/transcribe -F "audio=@test.wav"

# Check if frontend can reach backend
fetch('http://localhost:3001/api/transcribe').then(r => console.log(r.status))
```