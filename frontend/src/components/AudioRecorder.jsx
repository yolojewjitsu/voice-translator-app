import React, { useState, useRef, useCallback } from 'react';

const AudioRecorder = ({ onTranscriptionComplete, isLoading }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [hasPermission, setHasPermission] = useState(null);
  const [error, setError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const streamRef = useRef(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setRecordingDuration(prev => prev + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const formatDuration = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const requestMicrophonePermission = useCallback(async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });
      setHasPermission(true);
      streamRef.current = stream;
      return stream;
    } catch (err) {
      console.error('Error accessing microphone:', err);
      setHasPermission(false);
      
      let errorMessage = 'Failed to access microphone.';
      if (err.name === 'NotAllowedError') {
        errorMessage = 'Microphone access denied. Please allow microphone access and refresh the page.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'No microphone found. Please connect a microphone and try again.';
      }
      
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const startRecording = useCallback(async () => {
    try {
      setError(null);
      chunksRef.current = [];
      setRecordingDuration(0);

      let stream = streamRef.current;
      if (!stream) {
        stream = await requestMicrophonePermission();
      }

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4'
      });

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mediaRecorder.mimeType });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        
        // Send to backend for transcription
        sendAudioToBackend(blob);
      };

      mediaRecorder.start(1000); // Collect data every second
      setIsRecording(true);
      startTimer();
    } catch (err) {
      console.error('Error starting recording:', err);
      setError(err.message || 'Failed to start recording');
    }
  }, [requestMicrophonePermission, startTimer, sendAudioToBackend]);

  const sendAudioToBackend = useCallback(async (audioBlob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, `recording-${Date.now()}.webm`);

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Server error: ${response.status}`);
      }

      if (result.success) {
        onTranscriptionComplete({
          originalText: result.originalText,
          translation: result.translation,
          audioURL: audioURL
        });
      } else {
        throw new Error(result.error || 'Failed to process audio');
      }
    } catch (err) {
      console.error('Error sending audio to backend:', err);
      setError(`Failed to translate audio: ${err.message}`);
    }
  }, [onTranscriptionComplete, audioURL]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    stopTimer();
  }, [stopTimer]);

  const clearRecording = useCallback(() => {
    setAudioURL(null);
    setRecordingDuration(0);
    setError(null);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setHasPermission(null);
    }
  }, []);

  // Check for MediaRecorder support
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return (
      <div className="audio-recorder error">
        <p>Your browser doesn't support audio recording. Please use a modern browser like Chrome, Firefox, or Safari.</p>
      </div>
    );
  }

  return (
    <div className="audio-recorder">
      <div className="recorder-controls">
        {!isRecording && !audioURL && (
          <button 
            className="record-btn start" 
            onClick={startRecording}
            disabled={isLoading}
          >
            🎤 Start Recording
          </button>
        )}

        {isRecording && (
          <div className="recording-active">
            <button className="record-btn stop" onClick={stopRecording}>
              ⏹️ Stop Recording
            </button>
            <div className="recording-indicator">
              <span className="recording-dot"></span>
              Recording: {formatDuration(recordingDuration)}
            </div>
          </div>
        )}

        {audioURL && !isRecording && (
          <div className="playback-controls">
            <audio controls src={audioURL} className="audio-player">
              Your browser does not support the audio element.
            </audio>
            <button className="record-btn clear" onClick={clearRecording}>
              🗑️ Clear
            </button>
            <button className="record-btn start" onClick={startRecording} disabled={isLoading}>
              🎤 Record Again
            </button>
          </div>
        )}
      </div>

      {hasPermission === false && (
        <div className="permission-request">
          <p>Microphone access is required for voice recording.</p>
          <button className="record-btn" onClick={requestMicrophonePermission}>
            Grant Permission
          </button>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      {isLoading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Processing your audio...</p>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;