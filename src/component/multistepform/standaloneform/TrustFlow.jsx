import React, { useState } from "react";
import Company from "./Company"; // rename later to TrustDeed component if needed
import DirectorAdharVerification from "./DirectorAdharVerification";
import BankAccount from "./BankAccount";
import VideoKyc from "./VideoKyc";
import KycComplete from "./KycComplete";
import { Button } from "@mui/material";
import "./index.css";

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
