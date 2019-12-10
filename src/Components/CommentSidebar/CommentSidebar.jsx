import React from "react";
import "./CommentSidebar.style.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/DevMtnLogo.png";
import axios from "axios";

class CommentSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: ""
    };
  }

  submitHandler = e => {
    axios.post("/auth/add_feedback", {
      project_feedback: this.state.feedback,
      user_id: this.props.userInfo.id,
      project_id: Number(this.props.match.params.id)
    });
  };

  render() {
    return (
      <div className="comment-sidebar-container">
        <div className="comment-logo-container">
          <img src={logo} alt="devmtn" />
        </div>
        <Link to="/projects" className="back-to-projects-btn">
          <h2>Back To Projects</h2>
        </Link>
        <div className="comment-box"></div>
        <form onSubmit={e => this.submitHandler(e)}>
          <textarea
            onChange={e => this.setState({ feedback: e.target.value })}
            placeholder="Feedback is much appreciated!"
            className="comment-message-box"
          />
          <button className="form-btn" type="submit">
            comment
          </button>
        </form>
      </div>
    );
  }
}

export default CommentSidebar;
