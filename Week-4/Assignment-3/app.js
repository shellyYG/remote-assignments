const express = require('express');
const mysql = require('mysql');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

//Testing sql part
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
// End testing sql
// Assignment 3 part
app.get('/member', (req, res) => {
    res.cookie('cookieemail',req.query.emails);
    res.cookie('cookiepass',req.query.passw);
    console.log("cookie saved through get method from reaching /member")
    //store the name in the backend
    let post = {email: req.query.emails ,password: req.query.passw};
    let sql = 'INSERT INTO user SET?';
    let query = db.query(sql, post, (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.redirect('/home'); //redirect back to /myName
    })
})


app.get('/checktable',(req, res)=>{
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});



app.get('/home', (req,res) => {
    if (req.cookies.cookieemail) {
        console.log("嗨妳好，如果cookie的確存在，則我會出現");
        res.render('home',{customername: req.cookies.cookieemail});
    } else {
        console.log("Cookie 不存在. 如果是你還沒讓使用者填單，那沒關係，如果使用者已經填單了但還是看到我，那打掉重練!")
        res.render('home',{customername: req.cookies.cookieemail});
        
        
    }
})

app.listen('4300',()=>{
    console.log("Server started successfully on port 4300!")
})