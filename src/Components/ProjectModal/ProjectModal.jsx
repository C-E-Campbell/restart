import React, { Component } from "react";
import axios from "axios";
class ProjectModal extends Component {
  constructor() {
    super();
    this.state = {
      project_name: "",
      email: "",
      linkedin: "",
      host_url: "",
      github: "",
      description: "",
      react: false,
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

    await axios.post("/auth/addProject", {
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
    });
    const result = await axios.get("/auth/getAllProjects");
    this.props.getData(result.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitHandler(e)}>
          <input
            placeholder="Project Name"
            onChange={e => this.setState({ project_name: e.target.value })}
          />
          <input
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            placeholder="Linkedin"
            onChange={e => this.setState({ linkedin: e.target.value })}
          />
          <input
            placeholder="Site Url"
            onChange={e => this.setState({ host_url: e.target.value })}
          />
          <input
            placeholder="Github Url"
            onChange={e => this.setState({ github: e.target.value })}
          />
          <input
            type="checkbox"
            id="react"
            name="react"
            onChange={e => this.setState({ react: e.target.checked })}
          />
          <label for="react">React</label>
          <input
            type="checkbox"
            id="javascript"
            name="javascript"
            onChange={e => this.setState({ javascript: e.target.checked })}
          />
          <label for="javascript">JavaScript</label>
          <input
            type="checkbox"
            id="nodejs"
            name="nodejs"
            onChange={e => this.setState({ nodejs: e.target.checked })}
          />
          <label for="nodejs">nodejs</label>
          <input
            type="checkbox"
            id="redux"
            name="redux"
            onChange={e => this.setState({ redux: e.target.checked })}
          />
          <label for="redux">Redux</label>
          <input
            type="checkbox"
            id="mongodb"
            name="mongodb"
            onChange={e => this.setState({ mongo: e.target.checked })}
          />
          <label for="mongodb">MongoDB</label>
          <input
            type="checkbox"
            id="postgres"
            name="postgres"
            onChange={e => this.setState({ postgres: e.target.checked })}
          />
          <label for="postgres">postgres</label>
          <textarea
            placeholder="Project Description"
            onChange={e => this.setState({ description: e.target.value })}
          ></textarea>
          <button>Upload Project</button>
        </form>
      </div>
    );
  }
}

export default ProjectModal;
