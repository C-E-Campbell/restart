module.exports = {
  addIdea: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea } = req.body;
    const projectIdea = await db.add_idea([idea]);
    return res.status(200).send(projectIdea);
  },
  editIdea: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, idea, idea_id } = req.body;
    const edit = await db.edit_idea([user_id, idea, idea_id]);
    return res.status(200).send(edit);
  },
  deleteIdea: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea_id } = req.params;
    console.log(req.params);
    db.delete_idea(idea_id)
      .then(res.sendStatus(200))
      .catch(err => console.log(err));
  },
  addIdeaFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { idea_feedback } = req.body;
    const feedback = await db.add_idea_feedback([idea_feedback]);
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
  }

};
