import React, { useRef, useState } from "react";
import UploadIcon from "../../assets/UploadIcon.png";
import "./PhotoVerification.css";

const PhotoVerification = () => {
  const inputFile = useRef(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const openFileDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputFile.current && !inputFile.current.files.length) {
      inputFile.current.click();
    }
  };

  const handleInputDoc = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="photo-wrapper">
      <form className="photo-form">
        <div className="photo-container">
          <div className="photo-inner">

            {/* Upload Label Box */}
            <label
              htmlFor="PhotoFileUpload"
              onClick={openFileDialog}
              className="upload-label"
            >
              <p className="upload-text">Upload Photo</p>
              <img src={UploadIcon} alt="Upload" />
            </label>

            <input
              type="file"
              id="PhotoFileUpload"
              ref={inputFile}
              className="hidden-input"
              onChange={handleInputDoc}
            />

            {/* Preview Box */}
            <div className="preview-box">
              {photoUrl && (
                <img src={photoUrl} alt="Uploaded" className="preview-img" />
              )}
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default PhotoVerification;
