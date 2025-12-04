import React, { useState } from "react";
import './HelloUser.css';
import helloUser from '../../assets/hellouser.png';
import { FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const HelloUser = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     // STEP 1 → Generate Session
        //     const sessionResp = await axios.post(
        //         "https://lms.codemodulo.in/kavach/onboarding/v1/generate/session",
        //         {
        //             name,
        //             email,
        //             mobile,
        //             onboarding_modules: ["poi", "esign"],
        //             callback_url: "https://example.com",
        //             redirect_url: "https://example.com",
        //             force_new: false
        //         }
        //     );

        //     const sessionId = sessionResp.data.sessionId;

        //     // STEP 2 → Send OTP
        //     await axios.post(
        //         `https://lms.codemodulo.in/kavach/onboarding/v1/otp/${sessionId}`
        //     );

            // STEP 3 → Move to OTP page with sessionId
            // navigate("/otp", { state: { mobile, sessionId } });
            navigate("/verifydetails", { state: { sessionId: "TEMP_SESSION_1234" } });


        // } catch (error) {
        //     alert(error.response?.data?.message || "Failed to send OTP");
        // }
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
                    <h1><span style={{ color: '#175783' }}>Welcome to Paymnt</span> <span style={{ color: '#FFC700' }}>Stack</span></h1>

                    <form onSubmit={handleSubmit}>
                        {/* <div className="input-group">
                            <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="input-group">
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div> */}

                        <div className="input-group">
                            <i className="icon"><FaPhone /></i>
                            <input type="text" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} />
                        </div>

                        <button type="submit" className="login-button">Send OTP</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HelloUser;
