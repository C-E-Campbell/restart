import React from "react";
import "./ChatMessage.style.scss";
export default function ChatMessage(props) {
  return (
    <div className="single-message">
      <div className="chat-name">{`${props.user.userData.first[0]}.${props.user.userData.last}:`}</div>
      {props.msg}
    </div>
  );
}
