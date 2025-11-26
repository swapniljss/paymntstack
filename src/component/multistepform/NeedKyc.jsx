import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './NeedKyc.css'; // Importing the CSS file for styling

// Importing SVG images from the assets folder
import kyc1 from '../../assets/kyc1.svg';
import kyc2 from '../../assets/kyc2.svg';
import kyc3 from '../../assets/kyc3.svg';
import kyc4 from '../../assets/kyc4.svg';
import kyc5 from '../../assets/kyc5.svg';

const NeedKyc = () => {
    const navigate = useNavigate();
  const handleStartEkyc = () => {
    navigate('/merchant-type'); // Navigate to the Company page
  };

  return (
    <div className="kyc-container">
      <h1>What you need for Video KYC</h1>
      <div className="kyc-criteria">
        <div className="kyc-item">
          <img src={kyc1} alt="KYC Step 1" />
          <p>Have a valid government-issued photo ID ready (e.g., COI, GST, Company PAN, MOA, AOA, canceled cheque).</p>
        </div>
        <div className="kyc-item">
          <img src={kyc2} alt="KYC Step 2" />
          <p>Choose a well-lit area, preferably with natural light and light-colored background for the video.</p>
        </div>
        <div className="kyc-item">
          <img src={kyc3} alt="KYC Step 3" />
          <p>Director KYC is mandatory, please keep personal documents handy (e.g., Aadhaar card, PAN card, Phone number).</p>
        </div>
        <div className="kyc-item">
          <img src={kyc4} alt="KYC Step 4" />
          <p>Ensure your device has a stable internet connection with sufficient battery life.</p>
        </div>
        <div className="kyc-item">
          <img src={kyc5} alt="KYC Step 5" />
          <p>Be ready to speak and follow on-screen instructions during the video recording.</p>
        </div>
      </div>
      <p className="footer-text">This is 100% online and takes only 5-10 mins</p>
      <button className="start-kyc-button" onClick={handleStartEkyc}>Start eKYC</button>
    </div>
  );
};

export default NeedKyc;
