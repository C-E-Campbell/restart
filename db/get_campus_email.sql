<<<<<<< HEAD
SELECT campus,
       email,
       first,
       last,
       profile_image
=======
SELECT campus, email, first, last
>>>>>>> server
FROM users
WHERE user_id = $1;