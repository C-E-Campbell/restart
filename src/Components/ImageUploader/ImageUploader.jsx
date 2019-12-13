import React, { useRef } from "react";
import "./ImageUpload.style.scss";
import logo from "../../Assets/defaultUser.png";
const ImageUploader = props => {
  const filePickerRef = useRef();
  const overlay = useRef();
  const plus = useRef();
  const img = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const plusOpacity1 = () => {
    plus.current.style.opacity = 1;
    img.current.style.filter = "blur(2px)";
  };
  const plusOpacity0 = () => {
    plus.current.style.opacity = 0;
    img.current.style.filter = "blur(0px)";
  };

  const pickedHandler = e => {
    console.log(e.target);
    console.log("hello");
  };

  return (
    <div className="img-container">
      <div
        ref={overlay}
        onClick={pickImageHandler}
        onMouseOver={plusOpacity1}
        onMouseOut={plusOpacity0}
        className="img-overlay"
      >
        <i ref={plus} className="fas fa-plus fa-lg"></i>
      </div>

      <img ref={img} className="imgUpload" src={logo} alt="preview" />
      <input
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={e => pickedHandler(e)}
      />
    </div>
  );
};

export default ImageUploader;
