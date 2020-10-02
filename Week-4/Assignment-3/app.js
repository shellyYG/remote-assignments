const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen('4300',()=>{
    console.log("Server started successfully on port 4300!")
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'mysql2020'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected!');
});

app.get('/createdb',(req,res)=> {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql,(err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created!');
    });
})