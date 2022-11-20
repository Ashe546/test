const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port = 3000
const { createPool } = require('mysql2')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

const pool = createPool({
    host: '127.0.0.1',
    port: '8080',
    user: 'root',
    password: '0922426392',
    database: 'school',
})


const router = express.Router(); 



// get teacher 
router.get('/', (req, res) => {
    pool.query('SELECT * FROM teacher', (err, rows) => {
        if (err) {
            res.send(err)
        } else {
            res.send(rows)
        }
    })
})

//get subject
router.get('/subject', (req, res) => {
    pool.query('SELECT * FROM subject', (err, rows) => {
        if (err) {
            res.send(err)
        } else {
            res.send(rows)
        }
    })
})

// get staff
router.get('/staff', (req, res) => {
    pool.query('SELECT * FROM staff', (err, rows) => {
        if (err) {
            res.send(err)
        } else {
            res.send(rows)
        }
    })
})

//get teacher name
router.get('/name', (req, res) => {

    pool.query('SELECT teacher.subject_id, staff.first_name, teacher.Techer_id,teacher.staff_id, subject.subject_name from teacher \
    INNER JOIN subject ON teacher.subject_id=subject.Subject_id \
    INNER JOIN staff on teacher.staff_id=staff.Staff_id', (err, rows) => {
        if (err) {
            res.send(err)
        } else {
            res.send(rows)
        }
    })

})

//post to teacher
router.post('/', (req, res) => {

    const Teacher_id = Math.random() * 1000;
    const Subject_id = 447685974;
    const Staff_id = 170963707;



    let sql = 'INSERT INTO teacher values(?,?,?)';

    pool.query(sql, [Teacher_id, Subject_id, Staff_id], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(Teacher_id);
        }
    });


})

//post to subject
router.post('/subject', (req, res) => {
    const Subject_id = Math.random() * 1000000000;
    const Subject_name = req.body.Subject_name;
    const Subject_description = req.body.Subject_description;
    const grade_given_to = JSON.stringify(req.body.grade_given_to)

    let sql = 'INSERT INTO subject values(?,?,?,?)';

    pool.query(sql, [Subject_id, Subject_name, Subject_description, grade_given_to], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(grade_given_to);
        }
    });
})

//post to staff
router.post('/staff', (req, res) => {
    const Staff_id = Math.random() * 1000000000;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const type = 'Teacher'

    let sql = 'INSERT INTO staff values(?,?,?,?)';

    pool.query(sql, [Staff_id, first_name, last_name, type], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send("welcome" + first_name + last_name);
        }
    });
})

app.use('/.netlify/functions/api', router)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


module.exports.handler = serverless(app)