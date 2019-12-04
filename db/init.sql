
-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first VARCHAR NOT NULL,
    last VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    campus VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    admin BOOLEAN DEFAULT FALSE
);
INSERT INTO users (first, last, email, password, campus, status)
VALUES ('Sean', 'Robnett', 'sean@sean', 'sean123', 'phoenix', 'student', true);
VALUES ('Max', 'Hebert', 'max@max', 'max123', 'phoenix', 'student', true);
VALUES ('Charles', 'Campbell', 'charles@charles', 'charles123', 'phoenix', 'student', true);
VALUES ('Nick', 'Tillinghast', 'nick@nick', 'nick123', 'phoenix', 'student', true);

INSERT INTO users (first, last, email, password, campus, status)
VALUES ('Isaac', 'Hansen', 'isaac@isaac', 'isaac123', 'phoenix', 'student');

INSERT INTO projects (  user_id,
    project_name,
    host_url,
    github,
    react FALSE,
    javascript FALSE,
    nodejs FALSE,
    redux FALSE,
    postgres FALSE
    mongo FALSE,
    description,
    email )
    VALUES (1,'poop','www.poop','poopwww', true, false, true , true, true, true,'i love me some poop', 'poop@poop.com')