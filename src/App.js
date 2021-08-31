import React, { useState } from "react";
import './App.css';
import ImageInput from "./file/ImageInput";
import Default_User_Pic from "./defaultUserPic.svg"


function App() {
const[image,setImage]=useState("")
console.log(image)
  return (
    <div className="col image-input">
          <ImageInput
            imageData={image.photo?.src}
            defaultPic={Default_User_Pic}
            type="admin"
            name="photo"
            label="Add Photo"
            showPreview
            onChange={files => setImage(files, "admin")}
          />
        </div>
  );
}

export default App;

