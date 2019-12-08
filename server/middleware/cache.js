const redis = require("redis");
const client = redis.createClient(6379);

module.exports = {
  checkLogin: (req, res, next) => {
    client.setex("personPass", 7200, "fake pass");
    next();
  }
};
