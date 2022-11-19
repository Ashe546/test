const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

var con = mysql.createConnection({
    host: 'mysql-96508-0.cloudclusters.net',
    port: '10059',
    user: 'admin',
    password: 'Qih3IiKo',
    database: 'test',
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });







    app.get('/', (req, res) => {
        // pool.query('SELECT * FROM teacher', (err, rows) => {
        //     if (err) {
        //         res.send(err)
        //     } else {
        //         res.send(rows)
        //     }
        // })
        res.send(
           [
             {name: 'ashe', age: 25},
             {name: 'ashe', age: 25},
             {name: 'ashe', age: 25},
             {name: 'ashe', age: 25},
             {name: 'ashe', age: 25},
            ]
            )
    })

    // app.get('/subject', (req, res) => {
    //     pool.query('SELECT * FROM subject', (err, rows) => {
    //         if (err) {
    //             res.send(err)
    //         } else {
    //             res.send(rows)
    //         }
    //     })
    //     // res.send('Hello World!')
    // })



    // app.post('/', (req, res) => {

    //     const Subject_id = Math.random() * 1000;
    //     const Subject_name = req.body.Subject_name; 
    
    //     let sql = 'INSERT INTO subject values(?,?)'; 
    
    //     pool.query(sql, [Subject_id, Subject_name], (err, result) =>  {
    //         if (err) {
    //             res.send(err)
    //         }else{
    //             res.send(Subject_name);
    //         }  
    //     });
       
    // })

    // app.post('/post', (req, res) => {

    //     const Teacher_id = Math.random() * 1000;
    //     const Subject_id = 324;
        
    
    //     let sql = 'INSERT INTO teacher values(?,?)'; 
    
    //     pool.query(sql, [Teacher_id, Subject_id], (err, result) =>  {
    //         if (err) {
    //             res.send(err)
    //         }else{
    //             res.send(Teacher_id);
    //         }  
    //     });
    
       
    // })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
