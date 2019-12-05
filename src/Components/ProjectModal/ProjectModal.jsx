import React, { Component } from "react";
import axios from "axios";
class ProjectModal extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      email: "",
      linkedin: "",
      siteUrl: "",
      githubUrl: "",
      description: "",
      react: false,
      node: false,
      javascript: false,
      redux: false,
      postgresql: false,
      mongodb: false
    };
  }

  submitHandler = e => {
    e.preventDefault();
    const {
      projectName,
      email,
      linkedin,
      siteUrl,
      githubUrl,
      description
    } = this.state;

    axios.post("/auth/addProject", {
      projectName,
      email,
      linkedin,
      siteUrl,
      githubUrl,
      description
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitHandler(e)}>
          <input
            placeholder="Project Name"
            onChange={e => this.setState({ projectName: e.target.value })}
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
            onChange={e => this.setState({ siteUrl: e.target.value })}
          />
          <input
            placeholder="Github Url"
            onChange={e => this.setState({ githubUrl: e.target.value })}
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
            id="node"
            name="node"
            onChange={e => this.setState({ node: e.target.checked })}
          />
          <label for="node">Node</label>
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
            onChange={e => this.setState({ mongodb: e.target.checked })}
          />
          <label for="mongodb">MongoDB</label>
          <input
            type="checkbox"
            id="postgresql"
            name="postgresql"
            onChange={e => this.setState({ postgresql: e.target.checked })}
          />
          <label for="postgresql">PostgreSQL</label>
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
