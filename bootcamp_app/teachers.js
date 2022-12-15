const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts on cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1 
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;`, [`%${process.argv[2]}%`])

.then(res =>  {
  res.rows.forEach(row => {
    console.log(`The teacher ${row.teacher} assisted the cohort ${row.cohort}`);
  })
}).catch(err => console.error('query error', err.stack));