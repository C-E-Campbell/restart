UPDATE projectFeedback 
SET 
project_feedback = $3

WHERE feedback_id = $1;

SELECT * FROM projectFeedback
WHERE feedback_id = $1;

