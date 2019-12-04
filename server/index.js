require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");

// app.use(express.status(__dirname + "/../build"));

const { register, logout, userSession, login } = require("./auth_controller");
// const {
//   userProjects,
//   deleteProject,
//   editproject
// } = require("./projects_controller");

app.use(express.json());
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookies: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);
massive(CONNECTION_STRING).then(db => {
  console.log("database connected");
  app.set("db", db);
});

app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/user_session", userSession);
app.delete("/auth/logout", logout);
// app.get("/userProjects", userProjects);
// app.delete("/auth/delete_project", deleteProject);
// app.put("/auth/edit_project", editproject);

let port = SERVER_PORT || 4001;
app.listen(port, () => console.log(`up and running on port ${port}`));
