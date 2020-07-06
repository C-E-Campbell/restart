INSERT INTO users (first, last, email, password, campus, status)
VALUES ($1, $2, $3, $4, $5, $6);

SELECT user_id, first, last, email, campus, status
FROM users
WHERE email = $3;