import React from "react";
import "./Help.style.scss";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
export default function Help(props) {
  return (
    <div className="help-container">
      <SideBar showHomeBtn={true} loggedUser={props.user} />
      <MainContent bgcolor={"#fff"}>
        <div className="inner-help-container">
          <div className="outer-link-container">
            <div className="link-container">
              <h1>DevMountain</h1>
              <ul>
                <li>
                  <a
                    href="https://lms.devmountain.com/login/canvas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LMS
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h1>Playgrounds</h1>
              <ul>
                <li>
                  <a
                    href="https://codepen.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codepen.io
                  </a>
                </li>
                <li>
                  <a
                    href="https://repl.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repl.it
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-container">
              {" "}
              <h1>Docs</h1>
              <ul>
                <li>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Node.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Express.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://angular.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Angular
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.postgresql.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PostgreSQL
                  </a>
                </li>
                <li>
                  <a
                    href="https://momentjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Moment.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://nodemailer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nodemailer.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://socket.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Socket.io
                  </a>
                </li>
                <li>
                  <a
                    href="http://thesassway.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sass
                  </a>
                </li>
                <li>
                  <a
                    href="https://reacttraining.com/react-router/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React-Router
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h1>Awesome Youtube Channels</h1>

              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/user/TechGuyWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brad Traversy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Dev Simplified
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dev Ed
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Academind
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DesignCourse
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kevin Powell
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC5Wi_NYysX-LfcqT3Hq9Faw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dylan Israel
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/techSithTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    techsith
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCRQhZGXC0WK85YRXl7nGX0w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    All Things JavaScript, LLC
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="outer-link-container">
            <div className="link-container">
              <h1>Cool Stuff</h1>
              <ul>
                <li>
                  <a
                    href="https://css-tricks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS Tricks
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Free Code Camp
                  </a>
                </li>
                <li>
                  <a
                    href="https://novoresume.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NovoResume
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sitepoint.com/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SitePoint
                  </a>
                </li>
                <li>
                  <a
                    href="https://roadmap.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Road map to become a developer
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewars.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code Wars
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h1>Mozilla Developer Network</h1>
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MDN
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h1>CSS frameworks and Component Libraries</h1>
              <ul>
                <li>
                  <a
                    href="https://semantic-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Semantic Ui
                  </a>
                </li>
                <li>
                  <a
                    href="https://material-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Material Ui
                  </a>
                </li>
                <li>
                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bootstrap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}
