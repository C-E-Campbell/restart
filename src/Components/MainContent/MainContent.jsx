import React from "react";
import "./MainContent.style.scss";
export default function MainContent(props) {
  return (
    <div
      style={{ background: `${props.bgcolor}`, padding: `${props.padding}` }}
      className="main-content"
      data-aos="fade"
      data-aos-easing="ease-in"
    >
      <div></div>
      {props.children}
    </div>
  );
}
