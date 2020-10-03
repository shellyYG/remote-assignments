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
app.get('/member', (req, res) => {
    res.cookie('cookieemail',req.query.emails);
    res.cookie('cookiepass',req.query.passw);
    console.log("cookie saved through get method from reaching /member")
    
    //Check if the email exist
    let sql = 'SELECT * FROM user WHERE email ='+"'"+ req.query.emails+"'";
    let query = db.query(sql, (err,result)=>{
        if(err) throw err;
        if(result.length ===0){ //if it's a non-existing email
            //insert this user into database
            let post = {email: req.query.emails ,password: req.query.passw};
            let sqlin = 'INSERT INTO user SET?';
            let queryin = db.query(sqlin,post,(errin,resultin)=>{
                if(errin) throw errin;
                console.log(resultin);
                res.render('member',{customername: req.query.emails});
             })
        }else{ //its an existing user
            console.log(result);
            //check if email & password match any existing line
            let sqlcheck = 'SELECT * FROM user WHERE email ='+"'"+ req.query.emails+"'"+'and password ='+"'"+ req.query.passw+"'";
            let querycheck = db.query(sqlcheck,(errcheck,resultcheck)=>{
                if(errcheck) throw errcheck;
                console.log(resultcheck);
                if(resultcheck.length===0){ //if wrong password
                    res.redirect('/home');
                }else{
                    res.render('member',{customername: req.query.emails});
                }
            })
            
        }
        
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
        let ee = req.cookies['cookieemail'];
        console.log('Inputted email is:'+ee);
        let pp = req.cookies['cookiepass'];
        console.log('Inputted password is:'+pp);
        //if(pp !==)
        res.render('home',{customername: req.cookies.cookieemail});
    } else {
        console.log("Cookie 不存在. 如果是你還沒讓使用者填單，那沒關係，如果使用者已經填單了但還是看到我，那打掉重練!")
        res.render('home',{customername: req.cookies.cookieemail});
    }
})

app.listen('4300',()=>{
    console.log("Server started successfully on port 4300!")
})