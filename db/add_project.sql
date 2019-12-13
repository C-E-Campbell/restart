INSERT INTO projects (user_id, project_name, host_url, github, react, javascript, nodejs, redux, postgres, mongo, description, linkedin, email, first, last, thumbnail)
VALUES ($1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14,
        $15,
        $16);

-- SELECT * FROM projects;