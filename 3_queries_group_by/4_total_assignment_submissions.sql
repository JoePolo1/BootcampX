SELECT cohorts.name AS cohort, COUNT(assignment_submissions.id) AS total_submissions
FROM cohorts
INNER JOIN students ON students.cohort_id = cohorts.id
INNER JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohorts.name
ORDER BY total_submissions DESC;
