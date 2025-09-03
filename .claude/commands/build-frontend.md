# Build React Frontend

Create React app with audio recording and translation display.

## What this command does:
1. Create React components for audio recording
2. Implement MediaRecorder API for microphone access
3. Build clean UI with record/stop buttons
4. Add audio playbook functionality
5. Integrate with backend API
6. Display Spanish translation results
7. Handle loading states and errors
8. Basic responsive styling

## Context7 Documentation Reference:
Use Context7 for React and Web API documentation:
- `mcp__context7__resolve-library-id` with "react"
- `mcp__context7__get-library-docs` focusing on "hooks" and "state management"
- Check MDN docs for MediaRecorder API best practices

## Components to create:

**src/components/AudioRecorder.jsx**:
- MediaRecorder implementation
- Record/Stop buttons
- Audio playback
- File upload to backend

**src/components/TranslationDisplay.jsx**:
- Display Spanish translation
- Loading spinner
- Error messages

**src/App.js**:
- Main component combining everything
- State management
- API communication with backend

**src/App.css**:
- Clean, modern styling
- Responsive design
- Loading states

## Features:
- Microphone permission handling
- Audio recording with visual feedback
- Real-time status updates
- Error handling for network/API issues
- Mobile-friendly interface

## Backend integration:
- POST to http://localhost:3001/api/transcribe
- Send recorded audio as FormData
- Handle loading/error states

Make commit: "feat: implement audio recording React component"

**Time target**: 20 minutes