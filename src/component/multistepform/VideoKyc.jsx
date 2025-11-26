import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoKyc.css';

const VideoKyc = () => {
  const navigate = useNavigate();

  const [randomCode, setRandomCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);

  // Helper: convert speech to 4-digit code
  const extractDigitsFromTranscript = (transcript) => {
    if (!transcript) return '';

    const wordToDigit = {
      zero: '0',
      '0': '0',
      one: '1',
      '1': '1',
      two: '2',
      to: '2',
      too: '2',
      '2': '2',
      three: '3',
      tree: '3',
      free: '3',
      '3': '3',
      four: '4',
      for: '4',
      '4': '4',
      five: '5',
      '5': '5',
      six: '6',
      '6': '6',
      seven: '7',
      '7': '7',
      eight: '8',
      ate: '8',
      '8': '8',
      nine: '9',
      '9': '9',
    };

    const normalized = transcript.toLowerCase().replace(/-/g, ' ');

    // First, keep numeric characters directly
    let result = '';
    for (const char of normalized) {
      if (/[0-9]/.test(char)) {
        result += char;
      }
    }

    // If enough digits already, done
    if (result.length >= 4) return result.slice(0, 4);

    // Then map words to digits
    const parts = normalized.split(/\s+/).filter(Boolean);
    for (const part of parts) {
      if (wordToDigit[part]) {
        result += wordToDigit[part];
      }
    }

    return result.slice(0, 4);
  };

  useEffect(() => {
    // 1) Generate 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000);
    setRandomCode(code.toString());

    // 2) Access webcam
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error('Error accessing webcam: ', err);
        });
    }

    // 3) Setup speech recognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const digits = extractDigitsFromTranscript(transcript);
        if (digits) {
          setInputCode(digits);
        }
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      setIsSpeechSupported(false);
    }

    return () => {
      // Stop webcam
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (recognitionRef.current) {
        try {
          recognitionRef.current.onresult = null;
          recognitionRef.current.onerror = null;
          recognitionRef.current.onend = null;
          recognitionRef.current.stop();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  const handleToggleMic = () => {
    if (!isSpeechSupported || !recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setInputCode('');
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleNext = () => {
    if (inputCode && inputCode === randomCode.toString()) {
      navigate('/submit');
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="video-kyc-grid">

      <div className="kyc-left">

        <p className="instruction-text">
          Please look into the camera
        </p>

        <div className="video-selfie-container">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={`video-stream ${isListening ? 'video-stream-listening' : ''}`}
          />
        </div>

        <button
          type="button"
          className={`mic-button ${isListening ? 'mic-button-active' : ''}`}
          onClick={handleToggleMic}
          disabled={!isSpeechSupported}
        >
          🎙️ {isListening ? 'Listening...' : 'Tap to speak the code'}
        </button>
      </div>

      <div className="kyc-right">
        <h3 className="kyc-title">Read and Verify Code</h3>

        <p className="instruction-text">
          clearly read out the code shown below.
        </p>

        <div className="random-code">{randomCode}</div>

        <input
          type="text"
          maxLength={4}
          value={inputCode}
          placeholder="Detected code"
          className="code-input"  readOnly
          onChange={(e) => setInputCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
        />
      </div>

    </div>

  );
};

export default VideoKyc;
