# Voice Translator App

Simple voice translation app for test assignment. Records audio, transcribes with Whisper, translates to Spanish.

**Example**: Say "Hello" → See "Hola"

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd ../frontend && npm install
   ```

2. **Set environment variables**:
   ```bash
   # Create backend/.env
   echo "OPENAI_API_KEY=your_openai_api_key_here" > backend/.env
   ```

3. **Run the app**:
   ```bash
   # Terminal 1 - Backend (port 3001)
   cd backend && npm start
   
   # Terminal 2 - Frontend (port 3000)
   cd frontend && npm start
   ```

4. **Open** http://localhost:3000

## 📱 How to Use

1. Click "Start Recording"
2. Speak in English
3. Click "Stop Recording" 
4. See Spanish translation

## 🛠 Tech Stack

- **Frontend**: React 18, MediaRecorder API
- **Backend**: Express.js, Node.js
- **AI**: OpenAI Whisper (STT) + GPT (translation)
- **File Upload**: Multer middleware
- **CORS**: Cross-origin resource sharing enabled

## 📡 API Endpoints

- `POST /api/transcribe` - Upload audio file, returns Spanish translation

## 🔧 Requirements

- Node.js 16+
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- Modern browser with microphone support

## 📂 Project Structure

```
voice-translator-app/
├── frontend/          # React app (port 3000)
│   ├── src/
│   └── package.json
├── backend/           # Express server (port 3001)
│   ├── server.js
│   └── package.json
├── README.md
└── .gitignore
```