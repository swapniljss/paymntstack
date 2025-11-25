

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import UploadIcon from "../../assets/UploadIcon.png"
import { TextField } from '@mui/material';


const TestVideokyc = () => {
  const navigate =useNavigate();
  const [randomCode, setRandomCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    // Generate a 4-digit random code
    const generateRandomCode = () => {
      const code = Math.floor(1000 + Math.random() * 9000);
      setRandomCode(code);
    };

    generateRandomCode();

    // Access the user's webcam
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => {
          console.error("Error accessing webcam: ", err);
        });
    }
  }, []);


  const handleNext = () => {
    if (parseInt(inputCode) === randomCode) {
      navigate('/submit');
    } else {
      alert("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="video-kyc-container">
      {/* <h1>Video KYC</h1> */}
      
      <p className="instruction-text">Start the video by clicking the button below and entering the code provided on-screen.</p>
      
      <div className="video-selfie-container">
        <video ref={videoRef} autoPlay className="video-stream"></video>
      </div>

      <div className="random-code">
        <p>{randomCode}</p>
      </div>

      <div className="code-input-container"
      style={{ width: '311px', height: '56px', color:'black' }}>

        <input
          type="text"
          placeholder="Enter code"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          className="code-input"
          style={{
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: 'transparent', // Assuming transparent background, adjust as needed
            border: 'none', // Adjust if there’s a border
          }}
        />
      </div>
    </div>
  );
};

export default TestVideokyc


