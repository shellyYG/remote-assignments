const express = require('express');
const mysql = require('mysql');
const { isBuffer } = require('util');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'mysql2020',
    database: 'assignment'
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

app.get('/createtable',(req,res)=>{
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('User Table created!!');
    })
})



app.listen('4300',()=>{
    console.log("Server started successfully on port 4300!")
})