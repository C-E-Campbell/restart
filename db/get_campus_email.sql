SELECT campus, email, first, last
FROM users
WHERE user_id = $1;