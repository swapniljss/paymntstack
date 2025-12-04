import React, { useState } from "react";

import CompanyPanVerification from "../multistepform/CompanyPan";
import GstVerification from "../multistepform/Gst";
import MoaVerfication from "../multistepform/MoaVerfication";
import Company from "../multistepform/Company";
import BankAccount from "../multistepform/BankAccount";
import DirectorAdharVerification from "../multistepform/DirectorAdharVerification";
import VideoKyc from "../multistepform/VideoKyc";
import KycComplete from "../multistepform/KycComplete";

import Logo from "../../assets/Logo.png";
import { Button } from "@mui/material";
import "../multistepform/index.css";
import AsPhotoVerification from "../multistepform/AsPhotoVerification";
import OfficeBusinessPhoto from "../multistepform/OfficeBusinessPhoto";
import ASPanCard from "../multistepform/ASPanCard";

export default function CompanyFlow() {
  const steps = [
    { title: "Company Verification", component: <Company /> },
    { title: "Company PAN Verification", component: <CompanyPanVerification /> },
    { title: "GST Verification", component: <GstVerification /> },
    { title: "MOA Verification", component: <MoaVerfication /> },
    { title: "Bank Account Verification", component: <BankAccount /> },
    {title: "Authorized Signatory Pan Card", component: <ASPanCard/>},
    { title: "Authorized Signatory Aadhaar Verification", component: <DirectorAdharVerification /> },
    { title: "Authorized Signatory Photo", component: <AsPhotoVerification /> },
    { title: "Authorized Signatory Video KYC", component: <VideoKyc /> },
    { title: "Office/Business Photos", component: <OfficeBusinessPhoto /> },
    { title: "KYC Complete", component: <KycComplete /> },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="MainContainer">
      <div className="DocumnetFormCont">

        <div className="DocumentHeader">
          <div className="DocumentHeadingText">
            <p>On Boarding Verification</p>
          </div>
          <div className="PaymntStackLogo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

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

        <div className="DocumentHeadingTitle">
          <p>{steps[index].title}</p>
        </div>

        <div className="FormContainer">
          {steps[index].component}
        </div>

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
