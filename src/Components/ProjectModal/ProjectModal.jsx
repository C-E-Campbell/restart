import React, { Component } from "react";
import axios from "axios";
import "./ProjectModal.style.scss";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: "",
      email: "",
      linkedin: "",
      host_url: "",
      github: "",
      description: "",
      react: false,
      angular: false,
      vue: false,
      nodejs: false,
      javascript: false,
      redux: false,
      postgres: false,
      mongo: false
    };
  }

  submitHandler = async e => {
    e.preventDefault();
    const {
      project_name,
      email,
      linkedin,
      host_url,
      github,
      description,
      react,
      nodejs,
      javascript,
      redux,
      postgres,
      mongo
    } = this.state;
    const { id, first, last } = this.props.id;
    console.log(id, first, last);
    await axios.post("/auth/addProject", {
      id,
      project_name,
      email,
      linkedin,
      host_url,
      github,
      description,
      react,
      nodejs,
      javascript,
      redux,
      postgres,
      mongo,
      first,
      last
    });
    const result = await axios.get("/auth/getAllProjects");
    this.props.getData(result.data);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="modal-container">
        <Sidebar showBack={true} />
        <MainContent bgcolor={"#222"}>
          <div className="project-modal-main">
            <h2>Upload Your Work</h2>
            <form onSubmit={e => this.submitHandler(e)}>
              <input
                className="project-modal-input"
                placeholder="Project Name"
                onChange={e => this.setState({ project_name: e.target.value })}
              />
              <input
                className="project-modal-input"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                className="project-modal-input"
                placeholder="Linkedin"
                onChange={e => this.setState({ linkedin: e.target.value })}
              />
              <input
                className="project-modal-input"
                placeholder="Site Url"
                onChange={e => this.setState({ host_url: e.target.value })}
              />
              <input
                className="project-modal-input"
                placeholder="Github Url"
                onChange={e => this.setState({ github: e.target.value })}
              />
              <div className="select-container">
                <div className="select-inner-container">
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="react"
                      name="react"
                      onChange={e => this.setState({ react: e.target.checked })}
                    />
                    <label htmlFor="react">React</label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="angular"
                      name="angular"
                      onChange={e =>
                        this.setState({ angular: e.target.checked })
                      }
                    />
                    <label htmlFor="angular">Angular</label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="vue"
                      name="vue"
                      onChange={e => this.setState({ vue: e.target.checked })}
                    />
                    <label htmlFor="vue">Vue</label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="javascript"
                      name="javascript"
                      onChange={e =>
                        this.setState({ javascript: e.target.checked })
                      }
                    />
                    <label htmlFor="javascript">JavaScript</label>
                  </div>
                </div>
                <div className="select-inner-container">
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="nodejs"
                      name="nodejs"
                      onChange={e =>
                        this.setState({ nodejs: e.target.checked })
                      }
                    />
                    <label htmlFor="nodejs">Node.js</label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="redux"
                      name="redux"
                      onChange={e => this.setState({ redux: e.target.checked })}
                    />
                    <label htmlFor="redux">Redux</label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="mongodb"
                      name="mongodb"
                      onChange={e => this.setState({ mongo: e.target.checked })}
                    />
                    <label htmlFor="mongodb">MongoDB</label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="postgres"
                      name="postgres"
                      onChange={e =>
                        this.setState({ postgres: e.target.checked })
                      }
                    />
                    <label htmlFor="postgres">PostgreSql</label>
                  </div>
                </div>
              </div>

              <input
                className="project-modal-input"
                type="text"
                placeholder="Other Tech Not Listed"
              />
              <textarea
                placeholder="Project Description"
                onChange={e => this.setState({ description: e.target.value })}
              ></textarea>
              <button>Upload Project</button>
            </form>
          </div>
        </MainContent>
      </div>
    );
  }
}

export default ProjectModal;
