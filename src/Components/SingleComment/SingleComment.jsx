import React from "react";
import "./SingleComment.style.scss";
import { MyContext } from "../../Components/MyProvider/MyProvider";
export default function SingleComment(props) {
  const myName = props.allIds.filter(id => id.user_id === props.user);

  return (
    <MyContext.Consumer>
      {user => (
        <div className="message-container">
          <div className="message-box">
            <div className="message">
              <p>{props.message}</p>
            </div>
            <div className="trashcan">
              <i
                onClick={() => props.delete(props.id, props.project)}
                className="fas fa-trash-alt"
              ></i>
            </div>
          </div>
          <div className="user-box">{`${myName[0].first} ${myName[0].last} `}</div>
        </div>
      )}
    </MyContext.Consumer>
  );
}
