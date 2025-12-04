import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MerchantType.css";

const MerchantType = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sessionId } = location.state || {}; 

    const handleSelect = (type) => {
        switch (type) {
            case "proprietor":
                navigate("/proprietor-flow");
                break;
            case "partnership":
                navigate("/partnership-flow");
                break;
            case "private_ltd":
                navigate("/company-flow");
                break;
            case "trust":
                navigate("/trust-flow");
                break;
            default:
                break;
        }
    };


    return (
        <div className="container-fluid py-5 merchant-container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 text-center">

                    <h1 className="merchant-title mb-4">
                        Select Your Merchant Type
                    </h1>

                    <p className="merchant-subtitle mb-5">
                        Choose your business category to proceed with onboarding
                    </p>

                    <div className="row g-4 justify-content-center mt-4">

                        <div className="col-12 col-md-5 d-grid">
                            <button className="merchant-btn" onClick={() => handleSelect("proprietor")}>
                                Proprietor
                            </button>
                        </div>

                        {/* <div className="col-12 col-md-5 d-grid">
                            <button className="merchant-btn" onClick={() => handleSelect("partnership")}>
                                Partnership Firm
                            </button>
                        </div> */}

                        <div className="col-12 col-md-5 d-grid">
                            <button className="merchant-btn" onClick={() => handleSelect("private_ltd")}>
                                Private Limited / Company
                            </button>
                        </div>

                        <div className="col-12 col-md-5 d-grid">
                            <button className="merchant-btn" onClick={() => handleSelect("trust")}>
                                LLP
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MerchantType;
