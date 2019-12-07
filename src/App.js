import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import SingleProject from "./Pages/SingleProject/SingleProjects.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Help from "./Pages/Help/Help.jsx";
import Idea from "./Pages/Idea/Idea.jsx";
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

  getUserInfo = result => {
    this.setState({ userInfo: result });
  };

  grabProjectDataFromLanding = data => {
    this.setState({ projects: data });
  };

  logout = () => {
    this.setState({ userInfo: {}, comments: {} });
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Landing
                user={this.getUserInfo}
                reset={this.logout}
                projects={this.grabProjectDataFromLanding}
              />
            )}
          />

          <Route
            path="/projects"
            exact
            render={() => <Projects projectData={this.state.projects} />}
          />
          <Route
            path="/project/:id"
            exact
            render={() => <SingleProject user={this.state.userInfo} />}
          />
          <Route
            path="/profile/:id"
            exact
            render={() => (
              <Profile
                projectData={this.state.projects}
                user={this.state.userInfo}
              />
            )}
          />
          <Route path="/help" exact component={Help} />
          <Route path="/idea" exact component={Idea} />
          <Route
            path="/projectUpload"
            exact
            render={() => (
              <ProjectModal
                getData={this.getProjectData}
                id={this.state.userInfo}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
