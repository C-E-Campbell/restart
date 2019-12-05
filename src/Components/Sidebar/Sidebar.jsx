import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../../Assets/smallLogo.png";
import defaultUser from "../../Assets/defaultUser.png";
import "./Sidebar.style.scss";
const userId = 9;
function Sidebar() {
  return (
    <div className="sidebar" data-aos="fade" data-aos-easing="ease-in">
      <div className="sidebar-logo-container">
        <Link to="/">
          <img src={logo} alt="sidebar devmtn" />
        </Link>
      </div>
      <ul className="sidebar-ul">
        <img className="sidebar-user-photo" src={defaultUser} alt="user" />
        <input placeholder="search projects" />
        <Link to="/projectUpload" className="sidebar-link">
          Upload Your Project <i class="fas fa-plus-square"></i>
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
