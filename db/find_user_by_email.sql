
SELECT user_id, first, last, email, campus, status
FROM users
WHERE email = $1;


