require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");

// app.use(express.status(__dirname + "/../build"));

const { register, logout, userSession, login } = require("./auth_controller");
const {
  userProjects,
  deleteProject,
  editproject,
  getAllProjects,
  addProject,
  addFeedback,
  editFeedback,
  deleteFeedback
} = require("./projects_controller");

const {
  addIdea,
  editIdea,
  deleteIdea,
  addIdeaFeedback,
  editIdeaFeedback,
  deleteIdeaFeedback
} = require("./idea_controller");

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
app.get("/auth/getAllProjects", getAllProjects);
app.get("/auth/userProjects/:user_id", userProjects);
app.delete("/auth/delete_project/:project_id", deleteProject);
app.put("/auth/edit_project", editproject);
app.post("/auth/addProject", addProject);

app.post( "/auth/add_feedback",addFeedback);
app.put( "/auth/edit_feedback",editFeedback);
app.delete( "/auth/delete_feedback/:feedback_id",deleteFeedback);

// app.post("/auth/add_idea", addIdea);
// app.put("/auth/edit_idea", editIdea);
// app.delete("auth/delete_idea", deleteIdea);

// app.post("/auth/add_idea_feedback", addIdeaFeedback);
// app.put("/auth/edit_idea_feedback", editIdeaFeedback);
// app.delete("auth/delete_idea_feedback", deleteIdeaFeedback);

let port = SERVER_PORT || 4001;
app.listen(port, () => console.log(`up and running on port ${port}`));
