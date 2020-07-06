UPDATE projects
SET project_name = $2,
      host_url = $3,
      github = $4,
      react = $5,
      javascript = $6,
      nodejs = $7,
      redux = $8,
      postgres = $9,
      mongo = $10,
      description = $11,
      linkedin = $12
WHERE project_id = $1;

SELECT * FROM projects
WHERE project_id = $1;