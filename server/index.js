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
  deleteFeedback,
  getAllFeedback
} = require("./projects_controller");

const {
  getAllIdeas,
  addIdea,
  editIdea,
  deleteIdea,
  addIdeaFeedback,
  editIdeaFeedback,
  deleteIdeaFeedback,
  getIdeaFeedback
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

app.get("/auth/get_all_feedback", getAllFeedback);
app.post( "/auth/add_feedback",addFeedback);
app.put( "/auth/edit_feedback",editFeedback);
app.delete( "/auth/delete_feedback/:feedback_id",deleteFeedback);

app.get("/auth/get_ideas", getAllIdeas);
app.post("/auth/add_idea", addIdea);
app.put("/auth/edit_idea", editIdea);
app.delete("/auth/delete_idea/:idea_id", deleteIdea);

app.get("/auth/get_idea_feedback", getIdeaFeedback)
app.post("/auth/add_idea_feedback", addIdeaFeedback);
app.put("/auth/edit_idea_feedback", editIdeaFeedback);
app.delete("/auth/delete_idea_feedback/:idea_feedback_id", deleteIdeaFeedback);

let port = SERVER_PORT || 4001;
app.listen(port, () => console.log(`up and running on port ${port}`));
