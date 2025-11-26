import React, { useRef, useState } from 'react';
import "./index.css";
import { TextField } from '@mui/material';
import UploadIcon from "../../assets/UploadIcon.png";
import CustomDatePicker from "../common/CustomDatePicker";

const CompanyPanVerification = () => {
    const inputFile = useRef(null);
    const [docUrl, setDocUrl] = useState(null);

    const [dateOfIncorporation, setDateOfIncorporation] = useState(null);


    const openFileDialog = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (inputFile.current && !inputFile.current.files.length) {
            inputFile.current.click();
        }
    };

    const handleInputDoc = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setDocUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='UploadCompanyVerify'>
            <form>
                <div className='CertificateContainer'>
                    <div className='UploadDocContainer'>
                        <div className='uploadDocLabel'>
                            <label htmlFor="FileUpload" style={{ width: "300px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", background: "#F9F9FA" }}>
                                <p style={{ color: "#A2A0A8" }}>Upload Pan Card</p>
                                <img src={UploadIcon} alt="Upload Icon" />
                            </label>
                            <input
                                type="file"
                                id="FileUpload"
                                ref={inputFile}
                                style={{ display: "none" }}
                                onChange={handleInputDoc}
                            />
                        </div>
                        <div className='uploadedDoc'>
                            {docUrl && <img src={docUrl} alt="Uploaded Pan Card" />}
                        </div>
                    </div>
                </div>
                <div className='FormContainer'>
                    <TextField
                        id="outlined-basic"
                        label="PAN Number"
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

                    <CustomDatePicker
                        value={dateOfIncorporation}
                        onChange={setDateOfIncorporation}
                        label="Date of Incorporation"
                    />

                </div>
            </form>
        </div>
    );
};

export default CompanyPanVerification;