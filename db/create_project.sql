CREATE TABLE projects (
    project_id  SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    project_name VARCHAR NOT NULL,
    host_url VARCHAR NOT NULL,
    github VARCHAR NOT NULL,
    react BOOLEAN DEFAULT FALSE,
    javascript BOOLEAN DEFAULT FALSE,
    nodejs BOOLEAN DEFAULT FALSE,
    redux BOOLEAN DEFAULT FALSE,
    postgres BOOLEAN DEFAULT FALSE
    mongo BOOLEAN DEFAULT FALSE,
    description VARCHAR NOT NULL,
    linkedin VARCHAR,
    email VARCHAR NOT NULL
);