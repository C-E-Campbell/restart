import React, { Component } from "react";
import Axios from "axios";

class FilterProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterProjects: null
    };
  }
 async getAllProjects(){
   const = axios.get("/auth/getAllProjects")
    this.setState({
        filterProjects:
    })
}
  render() {
    return <div></div>;
  }
}

export default FilterProjects;
