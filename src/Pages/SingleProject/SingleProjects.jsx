import React from "react";
import "./SingleProject.style.scss";
import CommentSidebar from "../../Components/CommentSidebar/CommentSidebar";
import logo from "../../Assets/defaultUser.png";
import MainContent from "../../Components/MainContent/MainContent";
import { Link } from "react-scroll";
import { withRouter } from "react-router-dom";

function SingleProjects(props) {
  return (
    <div className="single-project-container">
      <CommentSidebar
        ids={props.allUsers}
        user={props.user.id}
        project={Number(props.match.params.id)}
      />
      <MainContent bgcolor={"#fff"}>
        <div className="single-container">
          <div id="top" style={{ margin: "0 auto" }}>
            <iframe
              title="project"
              width="1260"
              height="800"
              src="https://www.devtennis.xyz"
            ></iframe>

            <div className="btn-to-info">
              <Link duration={700} smooth={true} to="bottom">
                Project Details <i className="fas fa-chevron-down"></i>
              </Link>
            </div>
          </div>

          <div id="bottom" className="single-project-details">
            <header>
              <div className="header-inner-container">
                <h2>Project Name</h2>
                <i className="fab fa-github-alt fa-3x"></i>
              </div>
            </header>
            <img className="project-details-photo" src={logo} alt="user" />
            <h2>Creators Name</h2>
            <div className="project-contact-container">
              <i className="fab fa-linkedin fa-2x"></i>
              <i className="far fa-envelope fa-2x"></i>
              <i className="fas fa-comments fa-2x"></i>
            </div>
            <div className="single-project-description">
              <h2>Description:</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                libero explicabo, sint quisquam voluptatum, iste vero labore
                nostrum necessitatibus quasi porro maiores impedit ipsum!
                Voluptas animi autem vero odio tempore! Sit, ex. Iusto rem ab
                exercitationem beatae quibusdam pariatur repellendus
                praesentium? Ea magnam iure quisquam facere molestiae minus
                possimus fugit hic fugiat. Quidem nisi culpa cupiditate harum!
                Porro doloribus, minima odit obcaecati quos ullam unde velit
                sunt voluptatum excepturi nulla numquam et rem, dignissimos
                dolores!
              </p>
              <div className="single-project-tech">
                <h2>Techologies Used:</h2>
                <ul>
                  <li>Sockets</li>
                  <li>Sockets in Sockets</li>
                  <li>
                    Uber Helicopter flies down and hands you a phone with
                    sockets on it
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth"
              })
            }
            className="btn-to-info"
          >
            <Link to="top">
              Live Project <i className="fas fa-chevron-up"></i>
            </Link>
          </div>
        </div>
      </MainContent>
    </div>
  );
}
export default withRouter(SingleProjects);
