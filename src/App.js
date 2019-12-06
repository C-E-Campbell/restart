import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import SingleProject from "./Pages/SingleProject/SingleProjects.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Help from "./Pages/Help/Help.jsx";
import ProjectModal from "./Components/ProjectModal/ProjectModal.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      projects: {},
      comments: {}
    };
  }

  async componentDidMount() {
    const results = await axios.get("/auth/getAllProjects");
    this.setState({ projects: results.data });
  }

  getProjectData = data => {
    this.setState({ projects: data });
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route
            path="/projects"
            exact
            render={() => <Projects projectData={this.state.projects} />}
          />
          <Route path="/project/:id" exact component={SingleProject} />
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/help" exact component={Help} />
          <Route
            path="/projectUpload"
            exact
            render={() => <ProjectModal getData={this.getProjectData} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
