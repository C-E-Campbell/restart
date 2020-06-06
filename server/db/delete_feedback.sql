DELETE
FROM projectFeedback
WHERE feedback_id = $1;


SELECT *
FROM projectFeedback
WHERE project_id = $2;