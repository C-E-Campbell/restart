SELECT projects.linkedin, projects.email, users.campus
FROM projects
JOIN users ON projects.user_id = users.user_id
WHERE users.user_id = $1;