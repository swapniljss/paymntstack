import React, { useRef, useState } from 'react'
import "./index.css"
import { TextField } from '@mui/material'
import UploadIcon from "../../assets/UploadIcon.png"
const GstVerification = () => {
    const inputFile = useRef(null);
    const openFileDialog = (event) => {
        console.log("hello")
        event.preventDefault(); // Prevent default behavior of the label
        event.stopPropagation(); // Stop event propagation to prevent it from reaching the input field
        if (inputFile.current && !inputFile.current.files.length) {
            inputFile.current.click();
        }
    }
    const [docUrl, setDocUrl] = useState(null);

    const handleInputDoc = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setDocUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='UploadCompanyVerify'>
            <form>
                <div className='CertificateContainer'>
                    {/* <input type='file' /> */}
                    {/* 
                <div className='UploadedFileCont'>
                    <p>helloo</p>
                </div> */}

                    <div className='UploadDocContainer' >
                        <div className='uploadDocLabel'>
                            <label htmlFor="FileUpload" style={{ width:"300px", display: "flex", alignItems: "center",justifyContent:"space-between", gap: "8px", background: "#F9F9FA"}}>
                                <p style={{ color: "#A2A0A8" }}>Upload GST Certificate </p>
                                <img src={UploadIcon} />
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
                            <img src={docUrl} />
                        </div>
                    </div>
                </div>
                <div className='FormContainer'>

                    <TextField
                        id="outlined-basic" label="GST Number" variant="outlined"
                        InputProps={{
                            style: { borderRadius: 16, color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA" }
                        }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }  // Adjust placeholder font size here
                        }}
                        sx={{
                            fieldset: { border: 'none' }  // This completely removes the border from the TextField
                          }}
                        />

        
                    <TextField id="outlined-basic" label="Address as per GST" variant="outlined"
                        InputProps={{
                            style: {  borderRadius: 16,  color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA" }
                        }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }  // Adjust placeholder font size here
                        }} sx={{
                            fieldset: { border: 'none' }  // This completely removes the border from the TextField
                          }}
                        />
                    <TextField id="outlined-basic" label="Constitution Type" variant="outlined" InputProps={{
                        style: {  borderRadius: 16, color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA", },
                        // classes: classes.input

                    }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }  // Adjust placeholder font size here
                        }} sx={{
                            fieldset: { border: 'none' }  // This completely removes the border from the TextField
                          }}
                        />

                    <TextField id="outlined-basic" label="GST Registration Date" variant="outlined" InputProps={{
                        style: { borderRadius: 16,  color: "#A2A0A8", height: 50, width: 250, background: "#F9F9FA" }
                    }}
                        InputLabelProps={{
                            style: { fontSize: '0.8rem' }  // Adjust placeholder font size here
                        }}
                        sx={{
                            fieldset: { border: 'none' }  // This completely removes the border from the TextField
                          }}
                        />
                    {/* <TextField id="outlined-basic" label="Address as per COI/MCA" variant="outlined" InputProps={{
                        style: { height: 50, width: 250, background: "#ededf3" }
                    }} InputLabelProps={{
                        style: { fontSize: '0.8rem' }  // Adjust placeholder font size here
                    }} /> */}

                </div>
            </form>
        </div>
    )
}

export default GstVerification 