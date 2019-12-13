import React, { Component } from "react";
import axios from "axios";
import "./Idea.style.scss";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
import IdeaCard from "./IdeaCard";
import Modal from './Modal';
import { IoMdAddCircleOutline } from "react-icons/io";

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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


  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };




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
        <SideBar
          showHomeBtn={true}
          users={this.props.users}
          loggedUser={this.props.userData}
        />
        <MainContent bgcolor={"#fff"}>
          <IoMdAddCircleOutline size={30} 
          onClick={e => {
            this.showModal(e);
          }}
          />

<Modal onClose={this.showModal} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
    

          <div className="idea-container">{allIdeas}</div>
        </MainContent>
      </div>
    );
  }
}
export default Idea;
