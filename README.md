# 🎤 Voice Translator App

A full-stack voice translation application that records English speech, transcribes it using OpenAI Whisper, and translates it to Spanish using GPT.

**Live Demo**: Say "Hello, how are you?" → Get "Hola, ¿cómo estás?"

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js 16+** ([Download here](https://nodejs.org/))
- **OpenAI API key** ([Get one here](https://platform.openai.com/api-keys))
- **Modern browser** with microphone support

### 1️⃣ Clone & Setup
```bash
git clone <your-repository-url>
cd voice-translator-app
```

### 2️⃣ Install Dependencies
```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies  
cd ../frontend && npm install
```

### 3️⃣ Configure Environment
```bash
# Create environment file
cp .env.example backend/.env

# Edit backend/.env and add your OpenAI API key:
# OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

### 4️⃣ Start the Application
```bash
# Terminal 1 - Start backend server (port 3001)
cd backend && npm start

# Terminal 2 - Start frontend development server (port 3000)  
cd frontend && npm start
```

### 5️⃣ Open the App
Navigate to **http://localhost:3000** in your browser

---

## 📱 How to Use

1. **Grant Microphone Permission** - Allow browser access when prompted
2. **Click "Start Recording"** - Red button will appear with timer
3. **Speak Clearly in English** - Keep recording under 30 seconds for best results
4. **Click "Stop Recording"** - Audio will be processed automatically
5. **View Translation** - See your English text and Spanish translation side-by-side

---

## 🏗️ Architecture Overview

### Frontend (React)
- **MediaRecorder API** - Captures audio from microphone
- **Modern UI** - Responsive design with loading states
- **Error Handling** - User-friendly messages for all scenarios
- **Audio Playback** - Review recordings before sending

### Backend (Express)
- **File Upload** - Multer middleware handles audio files (25MB limit)
- **OpenAI Whisper** - Speech-to-text transcription
- **OpenAI GPT-3.5** - English to Spanish translation
- **CORS Enabled** - Seamless frontend communication

### API Integration
```
Audio Recording → File Upload → Whisper STT → GPT Translation → UI Display
```

---

## 📡 API Documentation

### POST `/api/transcribe`
Transcribes audio file and returns Spanish translation.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Audio file (field name: `audio`)

**Response:**
```json
{
  "success": true,
  "originalText": "Hello, how are you?",
  "translation": "Hola, ¿cómo estás?"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "No audio file provided"
}
```

### GET `/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Voice Translator API is running"
}
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **MediaRecorder API** - Native browser audio recording
- **CSS3** - Responsive design with glassmorphism effects
- **Fetch API** - HTTP requests with timeout handling

### Backend  
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Multer** - File upload middleware
- **OpenAI SDK** - Official OpenAI client library
- **CORS** - Cross-origin resource sharing

### AI/ML Services
- **OpenAI Whisper** - Speech recognition (whisper-1 model)
- **OpenAI GPT-3.5-turbo** - Language translation
- **Audio Formats** - WebM, MP4, WAV, M4A, OGG, FLAC

---

## 📂 Project Structure

```
voice-translator-app/
├── backend/                    # Express.js API server
│   ├── services/
│   │   └── openai.js          # OpenAI service integration
│   ├── uploads/               # Temporary audio file storage  
│   ├── server.js              # Main server application
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
├── frontend/                  # React application
│   ├── public/
│   │   └── index.html         # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── AudioRecorder.jsx    # Recording functionality
│   │   │   └── TranslationDisplay.jsx # Results display
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # Application styles
│   │   └── index.js           # React entry point
│   └── package.json           # Frontend dependencies
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── TIMELINE.md                # Development timeline
└── README.md                  # This file
```

---

## 🔧 Configuration

### Environment Variables
Create `backend/.env` with:

```bash
# OpenAI Configuration
OPENAI_API_KEY=sk-your-api-key-here

# Server Configuration
PORT=3001
NODE_ENV=development
```

### Audio Settings
- **Max File Size**: 25MB (OpenAI limit)
- **Supported Formats**: WebM, MP4, WAV, M4A, OGG, FLAC
- **Recording Quality**: 44.1kHz with noise suppression
- **Request Timeout**: 30 seconds

---

## 🚨 Troubleshooting

### Common Issues

**🎤 Microphone Not Working**
- Grant microphone permissions in browser settings
- Check if microphone is connected and working
- Try refreshing the page after granting permissions

**🌐 Network Errors**
- Verify internet connection
- Check if both servers are running (ports 3000 & 3001)
- Ensure OpenAI API key is valid and has credits

**⏰ Request Timeouts**
- Keep recordings under 30 seconds
- Check internet connection speed
- Try again during off-peak hours

**🔑 API Key Issues**
- Verify OpenAI API key is correct
- Check API key has sufficient credits
- Ensure `.env` file is in `backend/` directory

### Error Messages
- **"Microphone access denied"** → Grant browser permissions
- **"Network error"** → Check internet connection  
- **"Request timed out"** → Use shorter recordings
- **"Server error"** → Check backend logs and API key

---

## 🧪 Testing

### Manual Testing Scenarios

1. **Happy Path**
   - Record "Hello" → Should show "Hola"
   - Record "Thank you" → Should show "Gracias"
   - Record "How are you?" → Should show "¿Cómo estás?"

2. **Error Scenarios**
   - Deny microphone permission
   - Record without speaking
   - Test with background noise
   - Very long recordings (>30 seconds)

3. **Browser Compatibility**
   - Chrome 60+ ✅
   - Firefox 55+ ✅  
   - Safari 14+ ✅
   - Edge 79+ ✅

---

## 🚀 Deployment

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Use environment-specific API keys
- [ ] Configure reverse proxy (nginx)
- [ ] Set up SSL certificates
- [ ] Configure CORS for production domains
- [ ] Set up monitoring and logging
- [ ] Test with real domain names

### Environment Setup
```bash
# Production environment
NODE_ENV=production
PORT=3001
OPENAI_API_KEY=sk-prod-your-key-here
```

---

## 📈 Performance

- **Audio Processing**: ~2-5 seconds per request
- **File Upload**: Supports up to 25MB audio files
- **Concurrent Users**: Handles multiple simultaneous requests
- **Memory Usage**: Minimal - files cleaned up automatically
- **Browser Support**: All modern browsers with MediaRecorder API

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenAI** - For Whisper and GPT models
- **MediaRecorder API** - For browser audio recording
- **React Team** - For the excellent frontend framework
- **Express.js** - For the robust backend framework

---

**Built with ❤️ for seamless voice translation**