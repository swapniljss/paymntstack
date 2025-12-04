import React, { useRef, useState } from "react";
import UploadIcon from "../../assets/UploadIcon.png";
import "./BusinessPhoto.css";

const BusinessPhoto = () => {
  const inputFile = useRef(null);
  const [photos, setPhotos] = useState([]);

  const openFileDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputFile.current && photos.length < 5) {
      inputFile.current.click();
    }
  };

  const handleInputDoc = (e) => {
    const files = Array.from(e.target.files);

    const remainingSlots = 5 - photos.length;
    const selected = files.slice(0, remainingSlots); 

    selected.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotos((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };


  const removePhoto = (index) => {
    const updated = [...photos];
    updated.splice(index, 1);
    setPhotos(updated);
  };

  // Fixed 5 boxes layout
  const boxes = Array.from({ length: 5 });

  return (
    <div className="business-wrapper">
      <form className="business-form">

        {/* Upload button */}
        {photos.length < 5 && (
          <div className="upload-container" onClick={openFileDialog}>
            <label htmlFor="BusinessPhotoUpload" className="upload-label">
              <p className="upload-text">Upload Business Photos</p>
              <img src={UploadIcon} alt="Upload" />
            </label>
          </div>
        )}

        <input
          type="file"
          id="BusinessPhotoUpload"
          ref={inputFile}
          className="hidden-input"
          multiple
          onChange={handleInputDoc}
        />

        {/* Fixed boxes grid */}
        <div className="fixed-grid">
          {boxes.map((_, index) => (
            <div key={index} className="fixed-box">
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

export default BusinessPhoto;
