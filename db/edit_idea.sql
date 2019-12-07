UPDATE idea 
SET 
idea = $2
WHERE idea_id = $3;

SELECT * FROM idea
WHERE idea_id = $3;
