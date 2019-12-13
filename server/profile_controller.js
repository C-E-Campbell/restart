module.exports = {
  imgUpload: (req, res, next) => {
    // const db = req.app.get("db");
    // db.insert_profile_photo([photo, id]);
    res.send("uploaded photo");
  }
};
