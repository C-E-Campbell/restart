INSERT INTO ideaFeedback (
 idea_id,
user_id, 
idea_feedback
)
VALUES ($1, $2, $3);

--SELECT * FROM ideaFeedback WHERE idea_feedback_id = $4;
