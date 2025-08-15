import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';

const VoiceControl = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  React.useEffect(() => {
    const command = transcript.toLowerCase();
    if (command.includes('orion head to login page')) {
      navigate('/login');
      resetTranscript();
    }
    if (command.includes('orion head to register page')) {
      navigate('/register');
      resetTranscript();
    }
    if (command.includes('orion go to home page')) {
      navigate('/');
      resetTranscript();
    }
    if (command.includes('orion head to page 404')) {
      navigate('/404');
      resetTranscript();
    }
    if (command.includes('orion head to page 500')) {
      navigate('/500');
      resetTranscript();
    }
    if (command.includes('orion move to chart section')) {
      navigate('/charts');
      resetTranscript();
    }
  }, [transcript, navigate, resetTranscript]);

  // ...existing code...
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 999,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        borderRadius: 12,
        padding: 16,
        minWidth: 220,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button
        onClick={SpeechRecognition.startListening}
        style={{
          background: listening ? '#4caf50' : '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 24,
          padding: '10px 24px',
          fontSize: 16,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span role="img" aria-label="microphone">🎤</span>
        {listening ? 'Listening...' : 'Start Voice Control'}
      </button>
      <div
        style={{
          fontSize: 13,
          marginTop: 10,
          color: '#333',
          wordBreak: 'break-word',
          textAlign: 'center',
        }}
      >
        <strong>Transcript:</strong> {transcript || <span style={{ color: '#aaa' }}>Say a command…</span>}
      </div>
      <div style={{ fontSize: 11, marginTop: 8, color: '#888', textAlign: 'center' }}>
        Try: "ORION HEAD TO LOGIN PAGE,"
      </div>
    </div>
  );
};

export default VoiceControl;