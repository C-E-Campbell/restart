import React from "react";
import axios from "axios";
import "./SingleComment.style.scss";

export default function SingleComment(props) {
  return (
    <div className="message-container">
      <div className="message-box">
        <div className="message">
          <p>{props.message}</p>
        </div>
        <div className="trashcan">
          <i
            onClick={() => props.delete(props.id, props.project)}
            class="fas fa-trash-alt"
          ></i>
        </div>
      </div>
      <div className="user-box">Max Hebert</div>
    </div>
  );
}
