
-- -- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     first VARCHAR NOT NULL,
--     last VARCHAR NOT NULL,
--     email VARCHAR UNIQUE NOT NULL,
--     password VARCHAR NOT NULL,
--     campus VARCHAR NOT NULL,
--     status VARCHAR NOT NULL,
--     admin BOOLEAN DEFAULT FALSE,
--     linkedin VARCHAR NOT NULL
-- );
-- INSERT INTO users (first, last, email, password, campus, status)
-- VALUES ('Sean', 'Robnett', 'sean@sean', 'sean123', 'phoenix', 'student', true);
-- VALUES ('Max', 'Hebert', 'max@max', 'max123', 'phoenix', 'student', true);
-- VALUES ('Charles', 'Campbell', 'charles@charles', 'charles123', 'phoenix', 'student', true);
-- VALUES ('Nick', 'Tillinghast', 'nick@nick', 'nick123', 'phoenix', 'student', true);

-- INSERT INTO users (first, last, email, password, campus, status)
-- VALUES ('Isaac', 'Hansen', 'isaac@isaac', 'isaac123', 'phoenix', 'student');

-- INSERT INTO projects (  
--     user_id,
--     project_name,
--     host_url,
--     github,
--     react FALSE,
--     javascript FALSE,
--     nodejs FALSE,
--     redux FALSE,
--     postgres FALSE
--     mongo FALSE,
--     description,
--     email )
--     VALUES (1,'poop','www.poop','poopwww', true, false, true , true, true, true,'i love me some poop', 'poop@poop.com')

--     CREATE TABLE projectFeedback (
--       feedback_id SERIAL PRIMARY KEY,
--       project_id INTEGER REFERENCES projects(project_id),
--       project_feedback VARCHAR NOT NULL,
--       user_id INTEGER REFERENCES users(user_id)  
--     );

--     CREATE TABLE idea (
--         user_id INTEGER REFERENCES users(user_id),
--         idea VARCHAR NOT NULL,
--         idea_id SERIAL PRIMARY KEY
--     );

<<<<<<< HEAD
CREATE TABLE ideaFeedback
(
    idea_feedback_id SERIAL PRIMARY KEY,
    idea_id INTEGER REFERENCES idea(idea_id),
    user_id INTEGER REFERENCES users(user_id),
    idea_feedback VARCHAR NOT NULL
);
=======
    CREATE TABLE ideaFeedback (
        idea_feedback_id SERIAL PRIMARY KEY,
        idea_id INTEGER REFERENCES idea(idea_id),
        user_id INTEGER REFERENCES users(user_id),
        idea_feedback VARCHAR NOT NULL
    );
        ALTER TABLE projects
        ADD thumbnail VARCHAR;

<<<<<<< HEAD
      
>>>>>>> ef3ac5cb3e8ac86d86a62e5596118e9a0a74d5bd
=======
      
>>>>>>> 643ff89162ec05d298a4b31dc935dc6e6bfaa5bf
