import React, { useState } from "react";
import CompanyPanVerification from "./CompanyPan";
import GstVerification from "./Gst";
import MoaVerfication from "./MoaVerfication";
import Company from "./Company";
import BankAccount from "./BankAccount";
import DirectorAdharVerification from "./DirectorAdharVerification";
import VideoKyc from "./VideoKyc";
import KycComplete from "./KycComplete";
import { Button } from "@mui/material";
import "./index.css";

export default function CompanyFlow() {
  const steps = [
    { title: "Company PAN Verification", component: <CompanyPanVerification /> },
    { title: "GST Verification", component: <GstVerification /> },
    { title: "MOA Verification", component: <MoaVerfication /> },
    { title: "AOA Verification", component: <Company /> },
    { title: "Bank Account Verification", component: <BankAccount /> },
    { title: "Director Aadhaar Verification", component: <DirectorAdharVerification /> },
    { title: "Video KYC", component: <VideoKyc /> },
    { title: "KYC Complete", component: <KycComplete /> },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="MainContainer">
      <h2 className="DocumentHeadingTitle">{steps[index].title}</h2>
      {steps[index].component}

      <div className="ButtonContainer">
        {index > 0 && (
          <Button className="MultistepBtn" onClick={() => setIndex(index - 1)}>
            Back
          </Button>
        )}
        {index < steps.length - 1 && (
          <Button className="MultistepBtn" onClick={() => setIndex(index + 1)}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
