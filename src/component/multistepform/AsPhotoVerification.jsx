import React, { useRef, useState } from "react";
import UploadIcon from "../../assets/UploadIcon.png";
import "./AsPhotoVerification.css";

const AsPhotoVerification = () => {
  const inputFile = useRef(null);
  const [photos, setPhotos] = useState([]);

  const openFileDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputFile.current && photos.length < 2) {
      inputFile.current.click();
    }
  };

  const handleInputDoc = (e) => {
    const file = e.target.files[0];
    if (file && photos.length < 2) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotos((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (index) => {
    const updated = [...photos];
    updated.splice(index, 1);
    setPhotos(updated);
  };

  // Fixed 2 boxes
  const boxes = Array.from({ length: 2 });

  return (
    <div className="asphoto-wrapper">
      <form className="asphoto-form">

        {/* Upload button (only if < 2 photos) */}
        {photos.length < 2 && (
          <div className="upload-container" onClick={openFileDialog}>
            <label htmlFor="AsPhotoUpload" className="upload-label">
              <p className="upload-text">Upload Photo</p>
              <img src={UploadIcon} alt="Upload" />
            </label>
          </div>
        )}

        <input
          type="file"
          id="AsPhotoUpload"
          ref={inputFile}
          className="hidden-input"
          onChange={handleInputDoc}
        />

        {/* Fixed Boxes */}
        <div className="asphoto-grid">
          {boxes.map((_, index) => (
            <div key={index} className="asphoto-box">
              {photos[index] ? (
                <>
                  <img
                    src={photos[index]}
                    alt={`Uploaded ${index}`}
                    className="photo-img"
                  />
                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => removePhoto(index)}
                  >
                    ✕
                  </button>
                </>
              ) : null}
            </div>
          ))}
        </div>

      </form>
    </div>
  );
};

export default AsPhotoVerification;
