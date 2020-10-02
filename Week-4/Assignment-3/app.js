const express = require('express');
const mysql = require('mysql');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

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

app.get('/member', (req, res) => {
    res.cookie('cookiect',req.query.aname);
    console.log("cookie saved through get method from reaching /member")
    res.redirect('/home'); //redirect back to /myName
})

app.get('/home', (req,res) => {
    if (req.cookies.cookiect) {
        console.log("嗨妳好，如果cookie的確存在，則我會出現");
        res.render('home',{customername: req.cookies.cookiect});

    } else {
        console.log("Cookie 不存在. 如果是你還沒讓使用者填單，那沒關係，如果使用者已經填單了但還是看到我，那打掉重練!")
        res.render('home',{customername: req.cookies.cookiect});
        
        //creates the query string on/trackName in URL
    }
})

app.listen('4300',()=>{
    console.log("Server started successfully on port 4300!")
})