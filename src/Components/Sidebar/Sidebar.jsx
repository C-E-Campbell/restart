import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../../Assets/smallLogo.png";
import defaultUser from "../../Assets/defaultUser.png";
import "./Sidebar.style.scss";
const MyContext = React.createContext();
const userId = 9;
function Sidebar(props) {
  return (
    <div className="sidebar" data-aos="fade" data-aos-easing="ease-in">
      <div className="sidebar-logo-container">
        <Link to="/projects">
          <img src={logo} alt="sidebar devmtn" />
        </Link>
      </div>
      <ul className="sidebar-ul">
        <img className="sidebar-user-photo" src={defaultUser} alt="user" />
        {!props.showHomeBtn ? (
          <input placeholder="search projects" />
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
          to={`profile/${userId}`}
          className="sidebar-link"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-easing="ease-in"
        >
          <li>Profile</li>
        </Link>
        <Link
          to="/idea"
          className="sidebar-link"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-easing="ease-in"
        >
          <li>Idea</li>
        </Link>
        <Link
          to="/help"
          className="sidebar-link"
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-easing="ease-in"
        >
          <li>Help</li>
        </Link>
        <MyContext.Consumer>
          {value => <h1>in the consumer {value}</h1>}
        </MyContext.Consumer>

        <Link
          to="/"
          className="sidebar-link"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-easing="ease-in"
        >
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}

export default withRouter(Sidebar);
