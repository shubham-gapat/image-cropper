import React from "react";
import Modal from "react-modal";

import ImageCropper from "./ImageCropper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, image, onCropImage, ratio }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {image && (
          <ImageCropper
            imgName={image.name}
            onCropImage={onCropImage}
            inputImg={URL.createObjectURL(image)}
            closeModal={closeModal}
            ratio={ratio}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
