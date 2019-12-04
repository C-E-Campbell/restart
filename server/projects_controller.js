module.exports = {
  userGalleries: async (req, res) => {
    const { user_id } = req.session.user;
    const db = await req.app.get("db");
    const projects = await db.get_user_projects([user_id]);
    return res.status(200).send(projects);
  },
  getAllGalleries: async (req, res) => {
    const { user_id } = req.session.user;
    const db = await req.app.get("db");
    const allProjects = await db.get_all_galleries([user_id]);
    return res.status(200).send(allProjects);
  },

  deletepro: (req, res, next) => {
    const db = req.app.get("db");

    const { pro_id } = req.params;
    console.log(req.params);
    db.delete_pro(pro_id)
      .then(res.sendStatus(200))
      .catch(err => console.log(err));
  },
  editpro: async (req, res, next) => {
    const db = req.app.get("db");
    console.log("body:", req.body);
    const {
      project_id,
      project_name,
      project_date,
      project_link,
      project_image,
      user_id
    } = req.body;
    const project = await db.updateproject([
      project_id,
      project_name,
      project_date,
      project_link,
      project_image,
      user_id
    ]);
    console.log("project:", project);
    return res.status(200).send(project);
  },
  getproject: async (req, res, next) => {
    const db = await req.app.get("db");
    const { id } = req.params;
    const project = await db.get_project_info(id);
    return res.status(200).send(project);
  },
  addGallery: async (req, res, next) => {
    const db = req.app.get("db");
    const {
      project_name,
      project_date,
      project_link,
      project_image,
      user_id
    } = req.body;
    const project = await db.add_client_pro([
      project_name,
      project_date,
      project_link,
      project_image,
      user_id
    ]);

    console.log("project:", project);
    return res.status(200).send(project);
  }
};
