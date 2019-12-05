import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import SingleProject from "./Pages/SingleProject/SingleProjects.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Help from "./Pages/Help/Help.jsx";
import ProjectModal from "./Components/ProjectModal/ProjectModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.class = {
      userInfo: null,
      projects: null,
      comments: null
    };
  }

  getProjectData = data => {
    this.setState({ projects: data });
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/projects" exact render={() => <Projects />} />
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
