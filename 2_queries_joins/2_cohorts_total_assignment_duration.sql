SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions 
FULL OUTER JOIN students ON student_id = students.id
FULL OUTER JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'FEB12';