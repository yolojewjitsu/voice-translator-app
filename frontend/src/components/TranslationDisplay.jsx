import React from 'react';

const TranslationDisplay = ({ result, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="translation-display loading">
        <div className="loading-content">
          <div className="spinner-large"></div>
          <h3>Processing Your Audio...</h3>
          <p>Converting speech to text and translating to Spanish</p>
          <div className="progress-steps">
            <div className="step active">🎤 Audio Processing</div>
            <div className="step active">📝 Speech Recognition</div>
            <div className="step active">🌐 Translation</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="translation-display error">
        <div className="error-content">
          <h3>❌ Translation Failed</h3>
          <p className="error-message">{error}</p>
          <div className="error-suggestions">
            <h4>Try:</h4>
            <ul>
              <li>Speaking more clearly</li>
              <li>Recording in a quieter environment</li>
              <li>Checking your internet connection</li>
              <li>Recording a shorter message</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="translation-display welcome">
        <div className="welcome-content">
          <h2>🎤 Voice Translator</h2>
          <p className="tagline">Speak in English, get Spanish translations instantly</p>
          <div className="instructions">
            <div className="instruction-step">
              <span className="step-number">1</span>
              <p>Click "Start Recording" to begin</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">2</span>
              <p>Speak clearly in English</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">3</span>
              <p>Click "Stop Recording" when done</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">4</span>
              <p>Get your Spanish translation!</p>
            </div>
          </div>
          <div className="example">
            <p><strong>Example:</strong> Say "Hello, how are you?" → Get "Hola, ¿cómo estás?"</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="translation-display result">
      <div className="result-content">
        <h3>✅ Translation Complete</h3>
        
        <div className="translation-pair">
          <div className="original-text">
            <h4>🇺🇸 Original (English)</h4>
            <div className="text-bubble original">
              <p>"{result.originalText}"</p>
            </div>
          </div>

          <div className="translation-arrow">
            <span>→</span>
          </div>

          <div className="translated-text">
            <h4>🇪🇸 Translation (Spanish)</h4>
            <div className="text-bubble translated">
              <p>"{result.translation}"</p>
            </div>
            <button 
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(result.translation)}
              title="Copy translation to clipboard"
            >
              📋 Copy
            </button>
          </div>
        </div>

        {result.audioURL && (
          <div className="audio-playback">
            <h4>🔊 Your Recording</h4>
            <audio controls src={result.audioURL} className="result-audio">
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <div className="result-actions">
          <button className="action-btn secondary" onClick={() => window.location.reload()}>
            🔄 Translate Again
          </button>
          <button 
            className="action-btn primary"
            onClick={() => {
              const text = `Original: "${result.originalText}"\nTranslation: "${result.translation}"`;
              navigator.share ? 
                navigator.share({ title: 'Voice Translation', text }) :
                navigator.clipboard.writeText(text);
            }}
          >
            📤 Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationDisplay;