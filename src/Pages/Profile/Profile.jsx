import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BasicHeader from "../../Components/BasicHeader/BasicHeader";
import "./Profile.style.scss";
import Project from "../../Components/ProfileProject/ProfileProject";
import logo from "../../Assets/DevMtnLogo.png";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      userInfo: {},
      profileData: {}
    };
  }
  async componentDidMount() {
    const result = await axios.get(
      `/auth/get_link_campus_email/${this.props.user.id}`
    );
    this.setState({ profileData: result.data[0] });
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

          <div className="profile-pic"></div>

          <div className="profile-info">
            <div className="profile-details">
              {this.props.user.first}
              {this.props.user.last}
            </div>

            <div>
              <div>Campus: {this.state.profileData.campus}</div>
              <div>Email: {this.state.profileData.email}</div>
              <a target="target_blank" href={this.state.profileData.linkedin}>
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <h4>My Projects</h4>
          <div className="profile-container">
            <div className="profile-grid"> {mappedProjects}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Profile);
