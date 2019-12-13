import React from "react";
import "./CommentSidebar.style.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/DevMtnLogo.png";
import Comment from "../../Components/SingleComment/SingleComment";
import axios from "axios";

class CommentSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      allFeedback: []
    };
  }

  componentDidMount() {
    axios.get(`/auth/get_all_feedback/${this.props.project}`).then(res => {
      this.setState({ allFeedback: res.data });
    });
  }

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("/auth/add_feedback", {
        project_feedback: this.state.feedback,
        user_id: this.props.user,
        project_id: this.props.project
      })
      .then(res => {
        this.setState({ allFeedback: res.data, feedback: "" });
      });
  };

  deleteCommentHandler = (id, project) => {
    axios.delete(`/auth/delete_feedback/${id}/${project}`).then(res => {
      this.setState({ allFeedback: res.data });
    });
  };

  render() {
    const { allFeedback } = this.state;
    const comment = allFeedback.map(comment => {
      return (
        <Comment
          allIds={this.props.ids}
          key={comment.feedback_id}
          delete={this.deleteCommentHandler}
          message={comment.project_feedback}
          user={comment.user_id}
          id={comment.feedback_id}
          project={comment.project_id}
        />
      );
    });
    return (
      <div className="comment-sidebar-container">
        <div className="comment-logo-container">
          <img src={logo} alt="devmtn" />
        </div>
        <Link to="/projects" className="back-to-projects-btn">
          <h2>Back To Projects</h2>
        </Link>
        <div className="comment-box">{comment}</div>
        <form onSubmit={e => this.submitHandler(e)}>
          <textarea
            value={this.state.feedback}
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
