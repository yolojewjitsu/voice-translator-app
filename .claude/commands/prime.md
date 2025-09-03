# Prime Voice Translator Project

Load project context and prepare for voice translator development.

## Project Context Loading

Read and understand:
1. CLAUDE.md - Project configuration and guidelines
2. README.md - Setup instructions and overview  
3. TIMELINE.md - Development schedule and time tracking
4. .env.example - Required environment variables
5. Current directory structure

## Development Flow

This is a 60-minute coding challenge to build:
- React frontend with audio recording
- Node.js backend with OpenAI integration
- Voice → Text → Spanish Translation pipeline

**Example**: User says "Hello" → App shows "Hola"

## Command Sequence

Execute these commands in order:
1. `/load-docs` - Load documentation via Context7 MCP (0-2 min)
2. `/setup-project` - Initialize structure and git (2-7 min)
3. `/build-backend` - Create Express + OpenAI server (7-22 min)
4. `/build-frontend` - Build React recording UI (22-42 min)
5. `/integrate-test` - Connect and test everything (42-52 min)
6. `/finalize-app` - Documentation and cleanup (52-60 min)

## Key Technologies
- MediaRecorder API for audio capture
- OpenAI Whisper for speech-to-text
- OpenAI GPT for English→Spanish translation
- Express.js with multer for file uploads
- React with hooks for UI

Now ready to begin development. Start with `/setup-project`.