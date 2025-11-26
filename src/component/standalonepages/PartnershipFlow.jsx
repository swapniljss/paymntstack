import React, { useState } from "react";

import DirectorAdharVerification from "../multistepform/DirectorAdharVerification.jsx";
import CompanyPanVerification from "../multistepform/CompanyPan.jsx";
import BankAccount from "../multistepform/BankAccount.jsx";
import MoaVerfication from "../multistepform/MoaVerfication.jsx";
import Company from "../multistepform/Company.jsx";
import GstVerification from "../multistepform/Gst.jsx";
import VideoKyc from "../multistepform/VideoKyc.jsx";
import KycComplete from "../multistepform/KycComplete.jsx";

import Logo from "../../assets/Logo.png";
import { Button } from "@mui/material";
import "../multistepform/index.css";

export default function PartnershipFlow() {
  const steps = [
    { title: "Aadhaar Verification", component: <DirectorAdharVerification /> },
    { title: "PAN Verification", component: <CompanyPanVerification /> },
    { title: "Bank Account Verification", component: <BankAccount /> },
    { title: "MOA Verification", component: <MoaVerfication /> },
    { title: "AOA Verification", component: <Company /> },
    { title: "GST Verification", component: <GstVerification /> },
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
