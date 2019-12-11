/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "./Profile.style.scss";
import Project from "../../Components/Project/Project";
import logo from "../../Assets/DevMtnLogo.png";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      userInfo: {}
    };
  }

  render() {
    console.log(this.props.projectData);
    const mappedProjects = this.props.projectData.map(project => {
      if (project.user_id === this.props.user.id) {
        return (
          <Project
            key={project.project_id}
            id={project.project_id}
            title={project.project_name}
            first={project.first}
            last={project.last}
            url={project.url}
          />
        );
      }
    });

    return (
      <div>
        <div className="profile-main">
          <div className="profile-logo">
            <img src={logo} alt="devmtn" />
          </div>
          <div className="profile-pic">profile picture</div>
          <div className="profile-info">
            <h1 className="profile-details">{this.props.user.first}</h1>
            <h1 className="profile-details">{this.props.user.last}</h1>
            <h1 className="profile-details">{this.props.user.id}</h1>
          </div>
          <div className="profile-tech"></div>
          <div className="profile-container">
            <div className="profile-grid"> {mappedProjects}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
