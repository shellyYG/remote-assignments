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
    res.cookie('cookienemail',req.query.nemails);
    res.cookie('cookienpass',req.query.npassw);
    res.cookie('cookieoemail',req.query.oemails);
    res.cookie('cookieopass',req.query.opassw);
    console.log("cookies are saved via /member");
    
    //Check if the email exist
    let sql = 'SELECT * FROM user WHERE email ='+"'"+ req.query.nemails+"'";
    let query = db.query(sql, (err,result)=>{
        if(err) throw err;
        if(result.length ===0){ //if it's a nnew email
            //insert this user into database
            let post = {email: req.query.nemails ,password: req.query.npassw};
            let sqlin = 'INSERT INTO user SET?';
            let queryin = db.query(sqlin,post,(errin,resultin)=>{
                if(errin) throw errin;
                console.log(resultin);
                res.render('member',{customername: req.query.nemails});
             })
        }else{ //its an existing user
            console.log(result);
            //check if email & password match any existing line
            let sqlcheck = 'SELECT * FROM user WHERE email ='+"'"+ req.query.oemails+"'"+'and password ='+"'"+ req.query.opassw+"'";
            let querycheck = db.query(sqlcheck,(errcheck,resultcheck)=>{
                if(errcheck) throw errcheck;
                console.log(resultcheck);
                if(resultcheck.length===0){ //if wrong password
                    res.redirect('/home');
                }else{
                    res.render('member',{customername: req.query.oemails});
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
    if (req.cookies.cookienemail || req.cookies.cookieoemail) {
        console.log("Hi! New CT email cookie exist!");
        res.render('home',{customername: req.cookies.cookieoemail});
    } else {
        console.log("Cookie 不存在. 如果是你還沒讓使用者填單，那沒關係，如果使用者已經填單了但還是看到我，那打掉重練!")
        res.render('home',{customername: req.cookies.cookienemail});
    }
})

app.listen('4300',()=>{
    console.log("Server started successfully on port 4300!")
})