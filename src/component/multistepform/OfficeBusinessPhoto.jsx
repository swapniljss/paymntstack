import React, { useRef, useState } from "react";
import UploadIcon from "../../assets/UploadIcon.png";
import "./OfficeBusinessPhoto.css";

const OfficeBusinessPhoto = () => {
  const inputFile = useRef(null);
  const [photos, setPhotos] = useState([]);

  const openFileDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputFile.current && photos.length < 10) {
      inputFile.current.click();
    }
  };

  const handleInputDoc = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const remainingSlots = 10 - photos.length;
    const validFiles = files.slice(0, remainingSlots);

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotos((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const boxes = Array.from({ length: 10 });

  return (
    <div className="office-wrapper">
      <form className="office-form">

        {photos.length < 10 && (
          <div className="upload-container" onClick={openFileDialog}>
            <label htmlFor="OfficeBusinessUpload" className="upload-label">
              <p className="upload-text">Upload Office / Business Photos</p>
              <img src={UploadIcon} alt="Upload" />
            </label>
          </div>
        )}

        <input
          type="file"
          id="OfficeBusinessUpload"
          ref={inputFile}
          className="hidden-input"
          multiple
          onChange={handleInputDoc}
        />

        <div className="office-grid">
          {boxes.map((_, index) => (
            <div key={index} className="office-box">
              {photos[index] && (
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
              )}
            </div>
          ))}
        </div>

      </form>
    </div>
  );
};

export default OfficeBusinessPhoto;
