module.exports = {
  getAllIdeas: async (req, res, next) => {
    const db = await req.app.get("db");
    const allIdeas = await db.get_all_ideas();
    return res.status(200).send(allIdeas);
  },

  addIdea: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, idea, title  } = req.body;
    const projectIdea = await db.add_idea([user_id, idea, title]);
    
    return res.status(200).send(projectIdea);
    
  },
  editIdea: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, idea, idea_id, title } = req.body;
    const edit = await db.edit_idea([user_id, idea, idea_id, title]);
    
    return res.status(200).send(edit);
  },
  deleteIdea: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea_id } = req.params;
    console.log(idea_id);
    db.delete_idea(idea_id)
      .then(res.sendStatus(200))
      .catch(err => console.log(err));
  },
  addIdeaFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea_id, user_id, idea_feedback} = req.body;
    const feedback = await db.add_idea_feedback([idea_id, user_id, idea_feedback]);
    console.log(feedback);
    return res.status(200).send(feedback);  
  },
  editIdeaFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea_feedback_id, idea_id, idea_feedback, user_id } = req.body;
    const idea = await db.edit_idea_feedback([idea_feedback_id, idea_id, idea_feedback, user_id]);
    return res.status(200).send(idea); 
  },
  deleteIdeaFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea_feedback_id } = req.params;
    console.log(req.params);
    db.delete_idea_feedback(idea_feedback_id)
      .then(res.sendStatus(200))
      .catch(err => console.log(err)); 
  },
  getIdeaFeedback: async (req, res, next) => {
    const db = await req.app.get("db");
    const allIdeasFeedback = await db.get_all_idea_feedback();
    return res.status(200).send(allIdeasFeedback);
  }

};
