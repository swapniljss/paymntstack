import React, { useState } from "react";
import './VerifyDetails.css'; // Assuming you'll save your CSS as VerifyDetails.css
import { useNavigate } from 'react-router-dom'; 

const VerifyDetails = () => {
  const [checked, setChecked] = useState(false); // Example for controlling the "Next" button
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (checked) {
      navigate('/needkyc'); // Navigate to NeedKyc page when "Next" is clicked
    }
  };

  return (
    <div className="verify-container">
      {/* Greeting Section */}
      <h1>Hello, User Name</h1>
      <p>Please verify the contact details before proceeding:</p>

      {/* Email and Mobile Display */}
      <div className="details-container">
        <div className="detail-item">
          <label>Email:</label>
          <span>xyz@gmail.com</span>
        </div>
        <div className="detail-item">
          <label>Mobile:</label>
          <span>1234567890</span>
        </div>
      </div>

      {/* Checkbox Section */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="affirmation"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="affirmation">
          I affirm the accuracy of all information provided in this e-KYC application and agree to promptly notify you of any future changes.
        </label>
      </div>

      {/* Additional Instructions */}
      <p className="support-text">
        If the details are incorrect, please contact our support team.
      </p>

      {/* Action Buttons */}
      <div className="button-container">
        <button className="back-button">Back</button>
        <button className="next-button" disabled={!checked} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default VerifyDetails;
