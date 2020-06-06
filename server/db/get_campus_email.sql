SELECT campus,
       email,
       first,
       last,
       profile_image
FROM users
WHERE user_id = $1;