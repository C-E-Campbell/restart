import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    this.getSearch.bind(this);
  }

  getSearch = data => {
    this.setState({ search: data });
  };

  render() {
    // const { search } = this.state;

    const filterTech = this.props.projectData
      .map(content => {
        let arr = [];
        for (let key in content) {
          if (content[key] === true) {
            arr.push(key);
          }
        }
        content.technologies = arr;

        return content;
      })

      .filter(items => {
        return (
          items.first.indexOf(this.state.search) !== -1 ||
          items.last.indexOf(this.state.search) !== -1 ||
          items.project_name.indexOf(this.state.search) !== -1
          // items.technologies[0].indexOf(this.state.search) !== -1 ||
          // items.technologies[1].indexOf(this.state.search) !== -1 ||
          // items.technologies[2].indexOf(this.state.search) !== -1 ||
          // items.technologies[3].indexOf(this.state.search) !== -1 ||
          // items.technologies[4].indexOf(this.state.search) !== -1
        );
      })

      .map(project => {
        return <Project all={project} />;
      });

    return (
      <div className="project-container">
        <Sidebar found={this.getSearch} loggedUser={this.props.userData} />
        <MainContent>
          <div className="project-grid">{filterTech}</div>
        </MainContent>
      </div>
    );
  }
}

export default withRouter(Projects);
