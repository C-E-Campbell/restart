import React from "react";
import "./CommentSidebar.style.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/DevMtnLogo.png";
export default function CommentSidebar() {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className="comment-sidebar-container">
      <div className="comment-logo-container">
        <img src={logo} alt="devmtn" />
      </div>
      <Link to="/projects" className="back-to-projects-btn">
        <h2>Back To Projects</h2>
      </Link>
      <div className="comment-box"></div>
      <form onSubmit={e => submitHandler(e)}>
        <textarea
          placeholder="Feedback is much appreciated!"
          className="comment-message-box"
        />
        <button className="form-btn" type="submit">
          comment
        </button>
      </form>
    </div>
  );
}
