import React, { useRef, useState } from 'react';
import './index.css';
import UploadIcon from '../../assets/UploadIcon.png';

const MoaAoaVerification = () => {
    const moaInputFile = useRef(null);
    const aoaInputFile = useRef(null);

    const [moaDocUrl, setMoaDocUrl] = useState(null);
    const [aoaDocUrl, setAoaDocUrl] = useState(null);

    const openMoaFileDialog = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (moaInputFile.current && !moaInputFile.current.files.length) {
            moaInputFile.current.click();
        }
    };

    const openAoaFileDialog = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (aoaInputFile.current && !aoaInputFile.current.files.length) {
            aoaInputFile.current.click();
        }
    };

    const handleMoaInputDoc = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setMoaDocUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAoaInputDoc = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAoaDocUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='UploadCompanyVerify'>
            <form>
            <div className='CertificateContainer'>
                    {/* MOA Verification */}
                    <div className='UploadDocContainer docstyle'>
                        <div className='uploadDocLabel'>
                            {/* <label
                                htmlFor="MoaFileUpload"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px'}}
                                onClick={openMoaFileDialog}
                            >
                                <p style={{ color: '#A2A0A8' }}>Upload MOA</p>
                                <img src={UploadIcon} alt="Upload" />
                            </label> */}
                            <label htmlFor="MoaFileUpload" style={{ width:"302px", display: "flex", alignItems: "center", gap: "8px", background: "#F9F9FA" ,justifyContent:"center"  }}   onClick={openMoaFileDialog}>
                                <p style={{ color: "#A2A0A8" }}>Upload MOA</p>
                                <img src={UploadIcon} />
                            </label>
                            <input
                                type="file"
                                id="MoaFileUpload"
                                ref={moaInputFile}
                                style={{ display: 'none' }}
                                onChange={handleMoaInputDoc}
                            />
                        </div>
                        <div className='uploadedDoc'>
                            <img src={moaDocUrl} />
                        </div>
                    </div>
</div>


  
                    {/* AOA Verification */}
                    <div className='CertificateContainer'>
                    <div className='UploadDocContainer docstyle'>
                        <div className='uploadDocLabel'>
                        <label htmlFor="AoaFileUpload" style={{ width:"302px", display: "flex", alignItems: "center", gap: "8px", background: "#F9F9FA",justifyContent:"center" }}   onClick={openAoaFileDialog}>
                                <p style={{ color: "#A2A0A8" }}>Upload AOA</p>
                                <img src={UploadIcon} />
                            </label>
            
                            <input
                                type="file"
                                id="AoaFileUpload"
                                ref={aoaInputFile}
                                style={{ display: 'none' }}
                                onChange={handleAoaInputDoc}
                            />
                        </div>
                        <div className='uploadedDoc'>
                        <img src={aoaDocUrl} />
                           
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MoaAoaVerification;
