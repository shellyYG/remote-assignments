const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes/index.js');
const getDataRoutes = require('./routes/getData');
const trackNameRoutes = require('./routes/trackName');
const myNameRoutes = require('./routes/myName');

app.use(mainRoutes);
app.use('/getData', getDataRoutes);
app.use('/myName', myNameRoutes);
app.use('/trackName', trackNameRoutes);
app.use(express.static('public'));

app.get('/trackName', (req, res) => {
    //when going to trackName by myName.pug's get form method
    //create a cookie whose key is cookiect 
    //and whose value is the query string's value
    //this query string's key is "name"
    res.cookie('cookiect',req.query.name);
    console.log("trackName已經幫你存下了cookie")
    //confirm the existence of the cookie
    console.log("哈囉我是/trackName下的query string，我的value是："+req.query.name);
    //redirect back to /myName
    res.redirect('/myName'); 
})

app.get('/myName', (req,res) => {
    if (req.cookies.cookiect) {
        console.log("嗨妳好，如果cookie的確存在，則我會出現");
        res.render('myName',{customername: req.cookies.cookiect});
    } else {
        console.log("Cookie 不存在. 如果是你還沒讓使用者填單，那沒關係，如果使用者已經填單了但還是看到我，那打掉重練!")
        res.render('myName',{customername: req.cookies.cookiect});
        //creates the query string on/trackName in URL
    }
})

app.listen(3000, () => {	
	console.log('The application is running on localhost:3000! by Shelly the smart girl')
});	