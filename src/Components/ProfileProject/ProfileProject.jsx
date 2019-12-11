import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./ProfileProject.style.scss";

function Project(props) {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `project/${props.profile.project_id}`,
          state: props.profile
        }}
      >
        <div>
          <div className="project-box">
            <img
              className="project-photo"
              src={props.profile.thumbnail}
              alt="project-display"
            />
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
export default withRouter(Project);
