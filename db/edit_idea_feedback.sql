UPDATE ideaFeedback
SET
idea_feedback = $3
WHERE idea_feedback_id = $1;

SELECT * FROM ideaFeedback
WHERE idea_feedback_id = $1;