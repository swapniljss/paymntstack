import React, { useState } from 'react';
import "./index.css";
import { Button } from '@mui/material';
import CompanyVerfication from './Company';
import GstVerification from './Gst';
import CompanyPanVerification from './CompanyPan';
import MoaVerfication from './MoaVerfication';
import DirectorKycVerfication from './DirectorKyc';
import DirectorAdharVerification from './DirectorAdharVerification';
import BankAccount from './BankAccount';
import Logo from "../../assets/Logo.png";
import { useNavigate } from 'react-router-dom';
import VideoKyc from './VideoKyc';
import KycComplete from './KycComplete';
import TestVideokyc from './TestVideokyc';
import SplashScreen from './SplashScreen';

const Multistep = () => {
    const totalSteps = 6;
    const [currentStep, setCurrentStep] = useState(1);
    const [subStep, setSubStep] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentStep === 6) {
            if (subStep < 4) {
                setSubStep(prevState => {
                    const nextSubStep = prevState + 1;
                    if (nextSubStep == 3) {
                        setVideoKyc(true);
                    }
                    return nextSubStep;
                })
            }
            else if (subStep === 4) {
                setCurrentStep(currentStep + 1);
                setSubStep(1);
            }
        } else if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep === 6) {
            if (subStep > 1) {
                setSubStep(subStep - 1);
            } else if (subStep === 1 && currentStep > 1) {
                setCurrentStep(currentStep - 1);
            }
        } else if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
        setVideoKyc(false);

    };

    const [currentVideoKyc, setVideoKyc] = useState(false);

    const handleStartInvesting = () => {
        navigate('/invest');
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <CompanyVerfication />;
            case 2:
                return <GstVerification />;
            case 3:
                return <CompanyPanVerification />;
            case 4:
                return <MoaVerfication />;
            case 5:
                return <BankAccount />;
            case 6:
                if (subStep === 1) {
                    return <DirectorKycVerfication />;
                } else if (subStep === 2) {
                    return <DirectorAdharVerification />;
                } else if (subStep === 3) {
                    return (
                        <TestVideokyc
                            handleNext={handleNext}
                            handleBack={handleBack}
                        />
                    );
                } else if (subStep == 4) {
                    return <KycComplete />
                }
                break;
            default:
                return <CompanyVerfication />;
        }
    };

    const renderStepTitle = () => {
        switch (currentStep) {
            case 1:
                return "Company Verification";
            case 2:
                return "GST Verification";
            case 3:
                return "Company PAN Verification";
            case 4:
                return "MOA/AOA Verification";
            case 5:
                return "Bank Account Verification";
            case 6:
                if (subStep === 1) {
                    return "Director KYC Verification ";
                } else if (subStep === 2) {
                    return "Director Aadhar Verification";
                } else if (subStep === 3) {
                    return "Video KYC";
                }
            default:
                return "";
        }
    };

    const steps = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <div className='MainContainer'>
            <div className='DocumnetFormCont'>
                <div className='DocumentHeader'>
                    <div className='DocumentHeadingText'>
                        <p>On Boarding Verification</p>
                    </div>
                    <div className='PaymntStackLogo'>
                        <img src={Logo} alt="Logo" />
                    </div>
                </div>
                <div className='PagesContainer'>
                    {!currentVideoKyc && steps.map((stepTitle, index) => {
                        const stepNumber = index + 1;
                        const buttonClass =
                            currentStep === stepNumber
                                ? 'active'
                                : currentStep > stepNumber
                                    ? 'done'
                                    : '';

                        return (
                            <button
                                key={stepNumber}
                                className={buttonClass}
                                onClick={() => setCurrentStep(stepNumber)}
                            >
                                {stepNumber}
                            </button>
                        );
                    })}
                </div>
                <div className='DocumentHeadingTitle'>
                    <p>{renderStepTitle()}</p>
                </div>
                <div className='FormContainer'>
                    {renderStepContent()}
                </div>
                <div className='ButtonContainer'>
                    {/* {currentStep === 6 && subStep === 4 ? (
                        <Button className='MultistepBtn' onClick={handleStartInvesting}>Start Investing</Button>
                    ) : (
                        <>
                            <Button className='MultistepBtn' onClick={handleBack} disabled={currentStep === 1 && subStep === 1}>Back</Button>
                            {currentStep === 6 && subStep < 4 ? (
                                <Button className='MultistepBtn' onClick={handleNext}>Next</Button>
                            ) : currentStep < totalSteps ? (
                                <Button className='MultistepBtn' onClick={handleNext}>Next</Button>
                            ) : (
                                <Button className='MultistepBtn' onClick={handleSubmit}>Submit</Button>
                            )}
                        </>
                    )} */}

                    {!(currentStep === 6 && subStep === 3) && (
                        <div className='ButtonContainer'>
                            {currentStep === 6 && subStep === 4 ? (
                                <Button className='MultistepBtn' onClick={handleStartInvesting}>Start Investing</Button>
                            ) : (
                                <>
                                    <Button className='MultistepBtn' onClick={handleBack} disabled={currentStep === 1 && subStep === 1}>Back</Button>
                                    {(currentStep < totalSteps || (currentStep === 6 && subStep < 4)) && (
                                        <Button className='MultistepBtn' onClick={handleNext}>Next</Button>
                                    )}
                                </>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Multistep;