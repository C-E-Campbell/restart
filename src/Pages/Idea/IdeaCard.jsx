import React, { Component } from "react";
import {FaRegTrashAlt} from "react-icons/fa";
import "./IdeaCard.style.scss"
import {IoMdAddCircleOutline} from 'react-icons/io';

class IdeaCard extends Component {
  render() {
    const { user_id, idea, idea_id, title } = this.props;
    return (
      <div className="idea-card" key={idea_id}>
        <div className="idea-card-header">
          <div>{user_id}</div>
          <div>{title}</div>
          <FaRegTrashAlt/>
        </div>
        
        <div className="idea-box">{idea}</div>
        <div className="input-box">
     <input placeholder="leave feedback on this idea..." className="input-field" type='text'/>
     <IoMdAddCircleOutline/>
     </div>
      </div>
    );
  }
}

export default IdeaCard;
