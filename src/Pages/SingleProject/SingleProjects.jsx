import React, { Component } from "react";
import "./SingleProject.style.scss";
import CommentSidebar from "../../Components/CommentSidebar/CommentSidebar";
import logo from "../../Assets/defaultUser.png";
import MainContent from "../../Components/MainContent/MainContent";
import { withRouter } from "react-router-dom";

class SingleProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      up: false
    };
  }

  toDown() {
    this.setState({
      up: true
    });
  }
  toUp() {
    this.setState({
      up: false
    });
  }
  render() {
    return (
      <div className="single-project-container">
        <CommentSidebar
          ids={this.props.allUsers}
          user={this.props.user.id}
          project={Number(this.props.match.params.id)}
        />
        <MainContent bgcolor={"#fff"}>
          <div className="single-container">
            <div id="top" className={this.state.up ? "hide" : "show"}>
              <iframe
                title="project"
                width="1260"
                height="800"
                src={this.props.location.state.host_url}
              ></iframe>

              <div className="btn-to-info">
                <button onClick={e => this.toDown(e.target.value)}>
                  Project Details <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>

            <div id="bottom" className="single-project-details">
              <header>
                <div className="header-inner-container">
                  <h2>{this.props.location.state.project_name}</h2>
                  <i className="fab fa-github-alt fa-3x"></i>
                </div>
              </header>
              <img className="project-details-photo" src={logo} alt="user" />
              <h2>
                {this.props.location.state.first}{" "}
                {this.props.location.state.last}
              </h2>
              <div className="project-contact-container">
                <i className="fab fa-linkedin fa-2x"></i>
                <a href={"mailto:" + this.props.location.state.email}>
                  <i className="far fa-envelope fa-2x"></i>
                </a>
                <i className="fas fa-comments fa-2x"></i>
              </div>
              <div className="single-project-description">
                <h2>Description:</h2>
                <p>{this.props.location.state.description}</p>
                <div className="single-project-tech">
                  <h2>Technologies</h2>
                  <ul>{this.props.location.state.technologies.join(" ")}</ul>
                </div>
              </div>
            </div>
            <div className="btn-to-info btn-to-info2">
              <button onClick={e => this.toUp(e.target.value)}>
                Live Project <i className="fas fa-chevron-up"></i>
              </button>
            </div>
          </div>
        </MainContent>
      </div>
    );
  }
}
export default withRouter(SingleProjects);
