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
      project_id,
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
      linkedin
    } = req.body;
    const project = await db.update_project([
      project_id,
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
      linkedin
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
      email
    } = req.body;
    const project = await db.add_project([
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
      email
    ]);

    console.log("project:", project);
    return res.status(200).send(project);
  }
};
