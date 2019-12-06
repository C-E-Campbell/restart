INSERT INTO projectFeedback (
    project_feedback, 
    user_id , 
    project_id
)
VALUES ($1, $2, $3);

SELECT * FROM projectFeedback WHERE project_id = $3;