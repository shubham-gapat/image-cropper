import React, { useState } from "react";
import "./index.css";

import ImageModal from "../cropper/ImageModal";


const ImageInput = ({
  name,
  onChange,
  showPreview,
  imageData,
  defaultPic,
}) => {
  const [image, setImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const onChangeHandler = file => {
    onChange({
      [name]: {
        data: file[0],
        src: URL.createObjectURL(file[0]),
      },
    });
  };

  const handleFile = e => {
    if (e.target.files.length > 0) {
      const file = e.target.files;
      var url = URL.createObjectURL(file[0]);
      var img = new Image();
      img.src = url;
      img.onload = function () {
        setWidth(this.width);
        setHeight(this.height);
      };
      const maxAllowedSize = 5 * 1024 * 1024;
      if (file[0].size > maxAllowedSize) {
        console.log("max image size");
      } else {
          setImage(file[0]);
          setModalIsOpen(true);
      }
      e.target.value = null;
    }
  };
  let inputElement;

  return (
    <>
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={() => {
          setModalIsOpen(prevState => !prevState);
        }}
        image={image}
        onCropImage={croppedImg => onChangeHandler([croppedImg])}
        ratio={height / width <= 0.5 ? true : false}
      />
      {showPreview && (
        <div>

            <img
              key={imageData}
              src={imageData ? imageData : defaultPic}
              className={imageData ? "company-logo" : "default-company-logo"}
              alt="img"
              onError={e => (e.target.src = defaultPic)}
            />
          
        </div>
      )}
      <div className={"upload-image"} onClick={() => inputElement.click()}>
Upload          </div>
      <input
        ref={input => (inputElement = input)}
        accept="image/*"
        type="file"
        style={{ display: "none" }}
        onChange={handleFile}
      />
    </>
  );
};

export default ImageInput;
