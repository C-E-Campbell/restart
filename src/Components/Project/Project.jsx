import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./Project.style.scss";

function Project(props) {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `project/${props.all.project_id}`,
          state: props.all
        }}
      >
        <div>
          <div className="project-box">
            <div className="project-overlay">
              <p> {props.all.project_name}</p>
            </div>
            <img
              className="project-photo"
              src={props.all.thumbnail}
              alt="project-display"
            />
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
export default withRouter(Project);
