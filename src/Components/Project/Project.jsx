import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Project.style.scss";

function Project(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.history.push(`project/${props.id}`)}>
        <div className="project-box">
          <div className="project-overlay">
            <p> {props.title}</p>
          </div>
          <img
            className="project-photo"
            src={props.url}
            alt="project-display"
          />
        </div>
        <div className="project-title">{props.creator}</div>
      </div>
    </React.Fragment>
  );
}
export default withRouter(Project);
