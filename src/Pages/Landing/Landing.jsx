import React from "react";
import "./Landing.style.scss";
import logo from "../../Assets/DevMtnLogo.png";
import video from "../../Assets/landing-video.mp4";
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFlag: false
    };
  }

  register = e => {
    e.preventDefault();
    this.props.history.push("/projects");
  };

  login = e => {
    e.preventDefault();
    this.props.history.push("/projects");
  };

  render() {
    return (
      <div>
        {this.state.formFlag ? (
          <div className="landing-container">
            <div
              className="landing-sidebar"
              data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="300"
            >
              <div className="landing-logo">
                <img src={logo} alt="devmtn" />
              </div>

              <div className="landing-contact-box" data-aos="fade">
                <h3>Basecamp to Summit. Showcase your climb.</h3>

                <form className="landing-form">
                  <input placeholder="First Name" />
                  <input placeholder="Last Name" />
                  <input placeholder="Email" />
                  <input placeholder="Password" />
                  <select name="campus" id="campus">
                    <option selected disabled value="none">
                      Choose your campus
                    </option>
                    <option value="Lehi">Lehi</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Phoenix">Phoenix</option>
                  </select>
                  <select name="campus" id="campus">
                    <option selected disabled value="none">
                      Choose Student, Mentor, Instructor
                    </option>
                    <option value="Student">Student</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                  <button onClick={e => this.register(e)}>Register</button>
                </form>
                <h6
                  onClick={() => {
                    this.setState({ formFlag: false });
                  }}
                >
                  Already have account?
                </h6>
              </div>
            </div>
            <div
              className="landing-main"
              data-aos="fade"
              data-aos-duration="2000"
            >
              <div className="landing-main-cta">
                <h1>
                  This Is <br /> DevMountain
                </h1>
                <p>
                  A Project Showcase For All Dev Mountain Students. <br /> Past
                  and Present.
                </p>
              </div>

              <div className="landing-main-overlay"></div>
              <video className={"video"} autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          <div className="landing-container">
            <div
              className="landing-sidebar"
              data-aos="slide-right"
              data-aos-easing="ease-in"
              data-aos-duration="300"
            >
              <div className="landing-logo">
                <img src={logo} alt="devmtn" />
              </div>
              <div
                className="landing-contact-box"
                data-aos="fade"
                data-aos-duration="2000"
              >
                <h3
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                >
                  Basecamp to Summit. Showcase your climb.
                </h3>

                <form className="landing-form">
                  <input placeholder="Email" />
                  <input placeholder="Password" />
                  <button onClick={e => this.login(e)}>Login</button>
                </form>
                <h6
                  onClick={() => {
                    this.setState({ formFlag: true });
                  }}
                >
                  Register Here
                </h6>
              </div>
            </div>
            <div
              className="landing-main"
              data-aos="fade"
              data-aos-duration="2000"
            >
              <div className="landing-main-cta">
                <h1>
                  This Is <br /> DevMountain
                </h1>
                <p>
                  A Project Showcase For All DevMountain Students. <br /> Past
                  and Present.
                </p>
              </div>

              <div className="landing-main-overlay"></div>
              <video className={"video"} autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Landing;
