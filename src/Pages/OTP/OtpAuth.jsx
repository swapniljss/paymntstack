import React, { useState } from "react";
import './OtpAuth.css';
import helloUser from '../../assets/hellouser.png';
import { FaPhone } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

const OtpAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { mobile, sessionId } = location.state || {};

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalOtp = otp.join("");

        try {
            await axios.post(
                `https://lms.codemodulo.in/kavach/onboarding/v1/login/${sessionId}/${finalOtp}`
            );

            navigate("/verifydetails");
        } catch (error) {
            alert(error.response?.data?.message || "OTP verification failed");
        }
    };

    const resendOtp = async () => {
        try {
            await axios.post(
                `https://lms.codemodulo.in/kavach/onboarding/v1/otp/${sessionId}`
            );
            alert("OTP resent");
        } catch {
            alert("Failed to resend OTP");
        }
    };

    return (
        <div className="login-container">
            <div className="left-section">
                <div className="logo-container">
                    <img src={helloUser} alt="Company Logo" className="company-logo" />
                    <div className="company-name">
                        <span className="paymnt">Paymnt </span>
                        <span className="stack">Stack</span>
                    </div>
                </div>
                <p className="description">PaymntStack is a financial platform to manage your business and money.</p>
            </div>

            <div className="right-section">
                <div className="form-container">
                    <h1><span style={{ color: '#175783' }}>Enter OTP</span></h1>

                    <form onSubmit={handleSubmit}>
                        <div className="number-display">
                            <i className="icon"><FaPhone /></i>
                            <span className="mobile-text">{mobile}</span>
                        </div>

                        <div className="otp-group">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="otp-box"
                                    value={value}
                                    onChange={(e) => handleChange(e.target, index)}
                                />
                            ))}
                        </div>

                        <div className="resend-otp" onClick={resendOtp}>Resend OTP</div>

                        <button type="submit" className="submit-otp-button">Submit OTP</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OtpAuth;
