INSERT INTO projects (
  
    project_name,
    host_url,
    github,
    react,
    javascript,
    nodejs,
    redux,
    postgres,
    mongo,
    description,
    linkedin,
    email
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);

-- SELECT * FROM projects;