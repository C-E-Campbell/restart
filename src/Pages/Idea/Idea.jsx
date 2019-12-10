import React, { Component } from "react";
import axios from "axios";
import "./Idea.style.scss";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
import IdeaCard from "./IdeaCard";

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      ideaFeedback: []
    };
    this.getAllIdeas = this.getAllIdeas.bind(this);
    this.getIdeaFeedback = this.getIdeaFeedback.bind(this);
  }

  componentDidMount() {
    this.getAllIdeas();
    this.getIdeaFeedback();
  }

  getAllIdeas() {
    axios.get("/auth/get_ideas").then(response => {
      this.setState({ ideas: response.data });
    });
  }

  getIdeaFeedback() {
    axios.get("/auth/get_idea_feedback").then(response => {
      this.setState({ ideaFeedback: response.data });
    });
  }

  render() {
    const { ideas } = this.state;
    const allIdeas = ideas.map(idea => {
      return (
        <div>
          <IdeaCard
            user_id={idea.user_id}
            title={idea.title}
            idea={idea.idea}
          />
        </div>
      );
    });
    return (
      <div className="whole">
          <SideBar showHomeBtn={true} />
        <MainContent bgcolor={"#fff"}>
          <div className="idea-container">{allIdeas}</div>
        </MainContent>
      </div>
    );
  }
}
export default Idea;
