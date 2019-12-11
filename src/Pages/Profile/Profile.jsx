/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BasicHeader from "../../Components/BasicHeader/BasicHeader";
import "./Profile.style.scss";
import Project from "../../Components/ProfileProject/ProfileProject";
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
    const mappedProjects = this.props.projectDataMain.map(project => {
      if (project.user_id === this.props.user.id) {
        return <Project profile={project} />;
      }
    });

    return (
      <React.Fragment>
        <div className="profile-main">
          <BasicHeader />
          <div className="profile-logo">
            <img src={logo} alt="devmtn" />
          </div>
          <div className="profile-pic"></div>
          <form></form>
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
      </React.Fragment>
    );
  }
}
export default withRouter(Profile);
