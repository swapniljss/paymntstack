import React, { useState } from "react";

import DirectorAdharVerification from "../multistepform/DirectorAdharVerification";
import CompanyPanVerification from "../multistepform/CompanyPan";
import BankAccount from "../multistepform/BankAccount";
// import GstVerification from "../multistepform/Gst";
import VideoKyc from "../multistepform/VideoKyc";
import KycComplete from "../multistepform/KycComplete";

import Logo from "../../assets/Logo.png";
import { Button } from "@mui/material";
import "../multistepform/index.css";
import PhotoVerification from "../multistepform/PhotoVerification";
import BusinessPhoto from "../multistepform/BusinessPhoto";

export default function ProprietorFlow() {
  const steps = [
    { title: "Aadhaar Verification", component: <DirectorAdharVerification /> },
    { title: "PAN Verification", component: <CompanyPanVerification /> },
    { title: "Bank Account Verification", component: <BankAccount /> },
    // { title: "GST Verification", component: <GstVerification /> },
    { title : "Proprietor Photo", component: <PhotoVerification/>},
    { title: "Video KYC", component: <VideoKyc /> },
    {title: "Business Photos ", component: <BusinessPhoto/>},
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
