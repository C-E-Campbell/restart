module.exports = {
  getCampusInfo: async (req, res, next) => {
    const db = req.app.get("db");
    const result = await db.get_campus();
    return res.status(200).send(result);
  },
  getCampusLinkEamil: async (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const result = await db.get_link_campus_email([id]);
    return res.status(200).send(result);
  }
};
