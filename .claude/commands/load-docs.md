# Load Documentation via Context7

Use Context7 MCP server to load relevant documentation for voice translator development.

## What this command does:
Load up-to-date documentation for all project technologies using Context7 MCP server.

## Documentation to load:

### 1. OpenAI API Documentation
```
Use mcp__context7__resolve-library-id with "openai" to get library ID
Then use mcp__context7__get-library-docs focusing on:
- Whisper API for speech-to-text
- GPT API for translation 
- Audio file handling requirements
- Error handling patterns
```

### 2. React Documentation
```
Load React docs focusing on:
- MediaRecorder API integration
- useRef, useState for audio handling
- File upload patterns
- Error boundaries
```

### 3. Express.js Documentation
```
Load Express docs for:
- Middleware setup (cors, multer)
- File upload handling
- Route organization
- Error handling
```

### 4. Node.js File System
```
Load Node.js docs for:
- File handling and cleanup
- Environment variables
- Stream processing
```

## Usage Pattern:
1. Run this command at project start
2. Reference loaded docs during development
3. Re-run when encountering specific technical questions

## Context7 Commands to Execute:
- `mcp__context7__resolve-library-id` for each technology
- `mcp__context7__get-library-docs` with specific topics
- Keep documentation context active throughout development

This ensures you have current, accurate technical information available during the 60-minute development sprint.