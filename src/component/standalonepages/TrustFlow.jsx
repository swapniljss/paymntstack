import React, { useState } from "react";

import Company from "../multistepform/Company"; // Trust Deed component
import DirectorAdharVerification from "../multistepform/DirectorAdharVerification";
import BankAccount from "../multistepform/BankAccount";
import VideoKyc from "../multistepform/VideoKyc";
import KycComplete from "../multistepform/KycComplete";

import Logo from "../../assets/Logo.png";
import { Button } from "@mui/material";
import "../multistepform/index.css";

export default function TrustFlow() {
  const steps = [
    { title: "Trust Deed Verification", component: <Company /> },
    { title: "Director Aadhaar Verification", component: <DirectorAdharVerification /> },
    { title: "Bank Account Verification", component: <BankAccount /> },
    { title: "Video KYC", component: <VideoKyc /> },
    { title: "KYC Complete", component: <KycComplete /> },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="MainContainer">
      <div className="DocumnetFormCont">

        {/* HEADER */}
        <div className="DocumentHeader">
          <div className="DocumentHeadingText">
            <p>On Boarding Verification</p>
          </div>
          <div className="PaymntStackLogo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        {/* STEP INDICATOR */}
        <div className="PagesContainer">
          {steps.map((_, i) => (
            <button
              key={i}
              className={i === index ? "active" : index > i ? "done" : ""}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div className="DocumentHeadingTitle">
          <p>{steps[index].title}</p>
        </div>

        {/* PAGE CONTENT */}
        <div className="FormContainer">
          {steps[index].component}
        </div>

        {/* BUTTONS */}
        <div className="ButtonContainer">
          {index > 0 && (
            <Button className="MultistepBtn" onClick={() => setIndex(index - 1)}>
              BACK
            </Button>
          )}
          {index < steps.length - 1 && (
            <Button className="MultistepBtn" onClick={() => setIndex(index + 1)}>
              NEXT
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
