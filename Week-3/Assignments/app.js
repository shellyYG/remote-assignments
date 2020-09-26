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
    //confirm the existence of the cookie
    console.log("Hey I am query string"+req.query.name);
    //redirect back to /myName
    res.redirect('/myName'); 
})

app.get('/myName', (req,res) => {
    if (req.cookies.cookiect) {
        console.log("cookie exists!");
        res.render('myName',{customername: req.cookies.cookiect});
    } else {
        res.render('myName',{customername: req.cookies.cookiect});
        //creates the query string on/trackName in URL
    }
})

app.listen(3000, () => {	
	console.log('The application is running on localhost:3000! by Shelly the smart girl')
});	