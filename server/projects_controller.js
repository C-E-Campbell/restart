module.exports = {
  userProjects: async (req, res) => {
    const { user_id } = req.params;
    const db = await req.app.get("db");
    const projects = await db.get_user_projects(user_id);
    return res.status(200).send(projects);
  },
  getAllProjects: async (req, res) => {
    const db = await req.app.get("db");
    const allProjects = await db.get_all_projects();
    return res.status(200).send(allProjects);
  },

  deleteProject: (req, res, next) => {
    const db = req.app.get("db");
    const { project_id } = req.params;
    console.log(req.params);
    db.delete_project(project_id)
      .then(res.sendStatus(200))
      .catch(err => console.log(err));
  },
  editproject: async (req, res, next) => {
    const db = req.app.get("db");
    console.log("body:", req.body);
    const {
      id,
      project_name,
      host_url,
      github,
      react,
      javascript,
      nodejs,
      redux,
      postgres,
      mongo,
      description,
      linkedin,
      first,
      last
    } = req.body;
    const project = await db.update_project([
      id,
      project_name,
      host_url,
      github,
      react,
      javascript,
      nodejs,
      redux,
      postgres,
      mongo,
      description,
      linkedin,
      first,
      last
    ]);
    console.log("project:", project);
    return res.status(200).send(project);
  },
  // getproject: async (req, res, next) => {
  //   const db = await req.app.get("db");
  //   const { id } = req.params;
  //   const project = await db.get_project_info(id);
  //   return res.status(200).send(project);
  // },
  addProject: async (req, res, next) => {
    const db = req.app.get("db");

    console.log("body:", req.body);
    const {
      id,
      project_name,
      host_url,
      github,
      react,
      javascript,
      nodejs,
      redux,
      postgres,
      mongo,
      description,
      linkedin,
      email,
      first,
      last
    } = req.body;
    const project = await db.add_project([
      id,
      project_name,
      host_url,
      github,
      react,
      javascript,
      nodejs,
      redux,
      postgres,
      mongo,
      description,
      linkedin,
      email,
      first,
      last
    ]);

    console.log("project:", project);
    return res.status(200).send(project);
  },
  addFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { project_feedback, user_id, project_id } = req.body;
    const feedback = await db.add_project_feedback([
      project_feedback,
      user_id,
      project_id
    ]);
    return res.status(200).send(feedback);
  },
  editFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { feedback_id, project_id, project_feedback, user_id } = req.body;
    const feedback = await db.edit_project_feedback([
      feedback_id,
      project_id,
      project_feedback,
      user_id
    ]);
    return res.status(200).send(feedback);
  },
  deleteFeedback: async (req, res, next) => {
    const db = req.app.get("db");
    const { feedback_id } = req.params;
    console.log(req.params);
    db.delete_feedback(feedback_id)
      .then(res.sendStatus(200))
      .catch(err => console.log(err));
  }
};
