import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../../Assets/smallLogo.png";
import ImageUploader from "../ImageUploader/ImageUploader";

import "./Sidebar.style.scss";
import { MyContext } from "../MyProvider/MyProvider";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  render() {
    console.log();
    return (
      <div className="sidebar" data-aos="fade" data-aos-easing="ease-in">
        <div className="sidebar-logo-container">
          <Link to="/projects">
            <img src={logo} alt="sidebar devmtn" />
          </Link>
        </div>
        <ul className="sidebar-ul">
          <ImageUploader
            getPhoto={this.props.getPhoto}
            pic={this.props.picture}
            id={this.props.loggedUser.id}
          />
          {!this.props.showHomeBtn ? (
            <input
              placeholder="Seach Developers"
              onChange={e => this.props.found(e.target.value)}
            />
          ) : (
            <Link to="/projects" className="back-to-projects-btn">
              Back To Projects
            </Link>
          )}

          <Link to="/projectUpload" className="sidebar-link">
            <div className="upload-btn">
              <i className="fas fa-plus-square"></i> Upload Your Work
            </div>
          </Link>
          <Link
            to={`profile/${this.props.loggedUser.id}`}
            className="sidebar-link"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-in"
          >
            <li>Your Profile</li>
          </Link>
          <Link
            to="/chat"
            className="sidebar-link"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in"
          >
            <li>codeTalk</li>
          </Link>

          <Link
            to="/Chart"
            className="sidebar-link"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-easing="ease-in"
          >
            <li>Campus Stats</li>
          </Link>
          <Link
            to="/help"
            className="sidebar-link"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-easing="ease-in"
          >
            <li>Resources</li>
          </Link>

          <MyContext.Consumer>
            {value => (
              <Link
                to="/"
                className="sidebar-link"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-easing="ease-in"
              >
                <li onClick={() => value.log()}>Logout</li>
              </Link>
            )}
          </MyContext.Consumer>
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
