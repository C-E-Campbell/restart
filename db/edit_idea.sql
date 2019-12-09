UPDATE idea 
SET 
idea = $2
WHERE idea_id = $1;

SELECT * FROM idea
WHERE idea_id = $1;
