import React, { Component } from "react";
import "./Projects.style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Project from "../../Components/Project/Project";
import MainContent from "../../Components/MainContent/MainContent";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  getSearch = data => {
    this.setState({ search: data });
  };
  render() {
    // const { search } = this.state;
    const filterPro = this.props.projectData
      .filter(content => {
        return content.first.indexOf(this.state.search) !== -1 ||
          content.last.indexOf(this.state.search) !== -1 ||
          content.project_name.indexOf(this.state.search) !== -1 ||
          content.redux
          ? "redux".indexOf(this.state.search) !== -1
          : content.postgres
          ? "postgresSQL".indexOf(this.state.search) !== -1
          : content.javascript
          ? "javascript".indexOf(this.state.search) !== -1
          : "";
      })
      .map(project => {
        return (
          <Project
            key={project.project_id}
            id={project.project_id}
            title={project.project_name}
            first={project.first}
            last={project.last}
            url={project.url}
          />
        );
      });

    return (
      <div className="project-container">
        <Sidebar found={this.getSearch} />
        <MainContent>
          <div className="project-grid">{filterPro}</div>
        </MainContent>
      </div>
    );
  }
}

export default Projects;
