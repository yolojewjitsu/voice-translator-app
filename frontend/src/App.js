import React, { useState, useCallback } from 'react';
import AudioRecorder from './components/AudioRecorder';
import TranslationDisplay from './components/TranslationDisplay';
import './App.css';

function App() {
  const [translationResult, setTranslationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTranscriptionComplete = useCallback((result) => {
    setTranslationResult(result);
    setIsLoading(false);
    setError(null);
  }, []);

  const handleTranscriptionStart = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setTranslationResult(null);
  }, []);

  const handleTranscriptionError = useCallback((errorMessage) => {
    setError(errorMessage);
    setIsLoading(false);
    setTranslationResult(null);
  }, []);

  const resetApp = useCallback(() => {
    setTranslationResult(null);
    setIsLoading(false);
    setError(null);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">🎤</span>
            Voice Translator
          </h1>
          <p className="app-subtitle">Speak English → Get Spanish</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="translator-card">
            <AudioRecorder 
              onTranscriptionComplete={handleTranscriptionComplete}
              onTranscriptionStart={handleTranscriptionStart}
              onTranscriptionError={handleTranscriptionError}
              isLoading={isLoading}
            />

            <TranslationDisplay 
              result={translationResult}
              isLoading={isLoading}
              error={error}
            />

            {(translationResult || error) && (
              <div className="app-actions">
                <button 
                  className="reset-btn" 
                  onClick={resetApp}
                  title="Start over with a new translation"
                >
                  🔄 Start Over
                </button>
              </div>
            )}
          </div>

          <div className="app-info">
            <div className="info-section">
              <h3>💡 Tips for Best Results</h3>
              <ul>
                <li>Speak clearly and at a moderate pace</li>
                <li>Use a quiet environment for recording</li>
                <li>Keep recordings under 30 seconds for faster processing</li>
                <li>Ensure your microphone is working properly</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>🔧 Technical Info</h3>
              <div className="tech-details">
                <div className="tech-item">
                  <strong>Speech Recognition:</strong> OpenAI Whisper
                </div>
                <div className="tech-item">
                  <strong>Translation:</strong> OpenAI GPT-3.5-turbo
                </div>
                <div className="tech-item">
                  <strong>Audio Format:</strong> WebM/MP4 (browser-dependent)
                </div>
                <div className="tech-item">
                  <strong>Max File Size:</strong> 25MB
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>
            Built with ❤️ using React + Express + OpenAI
          </p>
          <div className="footer-links">
            <a 
              href="https://platform.openai.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Powered by OpenAI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;