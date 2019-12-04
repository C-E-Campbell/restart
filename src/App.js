import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import SingleProject from "./Pages/SingleProject/SingleProjects.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Help from "./Pages/Help/Help.jsx";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/:id" exact component={SingleProject} />
        <Route path="/profile/:id" exact component={Profile} />
        <Route path="/help" exact component={Help} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
