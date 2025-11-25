
import React, { useRef, useState } from 'react';
import './index.css';
import { TextField } from '@mui/material';
import UploadIcon from '../../assets/UploadIcon.png';

const DirectorAdharVerification = () => {
    const adharFrontInputFile = useRef(null);
    const adharBackInputFile = useRef(null);

    const [adharFrontDocUrl, setAdharFrontDocUrl] = useState(null);
    const [adharBackDocUrl, setAdharBackDocUrl] = useState(null);

    const openAdharFrontFileDialog = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (adharFrontInputFile.current && !adharFrontInputFile.current.files.length) {
            adharFrontInputFile.current.click();
        }
    };

    const openAdharBackFileDialog = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (adharBackInputFile.current && !adharBackInputFile.current.files.length) {
            adharBackInputFile.current.click();
        }
    };

    const handleAdharFrontInputDoc = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAdharFrontDocUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAdharBackInputDoc = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAdharBackDocUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='UploadCompanyVerify'>
            <form>
                <div className='CertificateContainer'>
                       {/* Aadhaar Front Verification */}
                    <div className='UploadAadhaarDocContainer'>
                        <div className='uniqueUploadAdhaarDocLabel' style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <label
                                htmlFor="AdharFrontFileUpload"
                                style={{ width:"300px", display: "flex", alignItems: "center",justifyContent:"space-between", gap: "8px", background: "#F9F9FA" }}

                             
                                onClick={openAdharFrontFileDialog}
                            >
                                <p style={{ color: '#A2A0A8' }}>Upload Aadhaar Front</p>
                                <img src={UploadIcon} alt="Upload" />
                            </label>
                            <input
                                type="file"
                                id="AdharFrontFileUpload"
                                ref={adharFrontInputFile}
                                style={{ display: 'none' }}
                                onChange={handleAdharFrontInputDoc}
                            />
                           
                            <label
                                htmlFor="AdharBackFileUpload"
                                style={{ width:"300px", display: "flex", alignItems: "center",justifyContent:"space-between", gap: "8px", background: "#F9F9FA" }}

                               
                                
                            >
                                <p style={{ color: '#A2A0A8' }}>Upload Aadhaar Back</p>
                                <img src={UploadIcon} alt="Upload" />
                            </label>
                            <input
                                type="file"
                                id="AdharBackFileUpload"
                                ref={adharBackInputFile}
                                style={{ display: 'none' }}
                                onChange={handleAdharBackInputDoc}
                            />
                           
                        </div>
   



                        {/* display photo down */}
                        <div className='uniqueAadharUploadedDoc' style={{ display: 'flex', gap: '3px' }}>
                           
                                <img
                                    src={adharFrontDocUrl}
                                   
                                    
                                />
                           
                           
                                <img
                                    src={adharBackDocUrl}
                                  
                                   
                                />
                           
                        </div>


                       
                    </div>


                </div>













                <div className='FormContainer'>
                    <TextField
                        id="outlined-basic"
                        label="Aadhaar Number"
                        variant="outlined"
                        InputProps={{
                            style: { borderRadius: 16, color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA" }
                        }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }
                        }}
                        sx={{
                            fieldset: { border: 'none' }
                        }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        InputProps={{
                            style: { borderRadius: 16, color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA" }
                        }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }
                        }}
                        sx={{
                            fieldset: { border: 'none' }
                        }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Date of Birth"
                        variant="outlined"
                        InputProps={{
                            style: { borderRadius: 16, color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA" }
                        }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }
                        }}
                        sx={{
                            fieldset: { border: 'none' }
                        }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        InputProps={{
                            style: { borderRadius: 16, color: "#A2A0A8", height: 100, width: 250, background: "#F9F9FA" }
                        }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }
                        }}
                        sx={{
                            fieldset: { border: 'none' }
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default DirectorAdharVerification;

