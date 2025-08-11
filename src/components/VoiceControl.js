import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';

const VoiceControl = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  React.useEffect(() => {
    const command = transcript.toLowerCase();
    if (command.includes('login')) {
      navigate('/login');
      resetTranscript();
    }
    if (command.includes('register')) {
      navigate('/register');
      resetTranscript();
    }
    if (command.includes('home')) {
      navigate('/');
      resetTranscript();
    }
    if (command.includes('page 404')) {
      navigate('/404');
      resetTranscript();
    }
    if (command.includes('page 500')) {
      navigate('/500');
      resetTranscript();
    }
  }, [transcript, navigate, resetTranscript]);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999 }}>
      <button onClick={SpeechRecognition.startListening}>
        {listening ? 'Listening...' : 'Start Voice Control'}
      </button>
      <div style={{ fontSize: 12, marginTop: 4 }}>Transcript: {transcript}</div>
    </div>
  );
};

export default VoiceControl;