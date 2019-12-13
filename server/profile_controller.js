module.exports = {
  imgUpload: (req, res, next) => {
    // const { photo } = req.file.path;
    // const { id } = req.body;
    // const db = req.app.get("db");
    // db.insert_profile_photo([photo, id]);
    res.send("uploaded photo");
  }
};
