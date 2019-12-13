import React, { useRef, useState } from "react";
import "./ImageUpload.style.scss";
import axios from "axios";
import logo from "../../Assets/defaultUser.png";
const ImageUploader = props => {
  const [photo, setPhoto] = useState("");
  const [path, setPath] = useState({});
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

  const submitPhoto = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("photoImage", photo);

    try {
      const res = await axios.post("/auth/imageupload", fd, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const pickedHandler = e => {
    setPhoto(e.target.files[0]);
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
      <form
        onSubmit={e => {
          submitPhoto(e);
        }}
        encType="multipart/form-data"
      >
        <input
          ref={filePickerRef}
          style={{ display: "none" }}
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={e => pickedHandler(e)}
        />
      </form>
    </div>
  );
};

export default ImageUploader;
