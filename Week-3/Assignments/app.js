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
//Get client side object
// const domino = require('domino');
// import { readFileSync } from 'fs';
// const DIST_FOLDER = join(process.cwd(), 'dist');
// const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
// const winObj = domino.createWindow(template);
// global['window'] = winObj;
// global['document'] = winObj.document;
// End

app.use(mainRoutes);
app.use('/getData', getDataRoutes);
app.use('/myName', myNameRoutes);
app.use('/trackName', trackNameRoutes);
app.use(express.static('public'));

app.get('/trackName', (req, res) => {
    //when redirect to trackName
    if (req.cookies.cookiect) {
        res.redirect('/myName');
    } else {
        res.render('trackName');
        res.cookie('cookiect',req.query.name);
    }
})

app.get('/myName', (req,res) => {
    if (req.cookies.cookiect) {
        console.log("cookie exists!");
        res.render('myName',{customername: req.cookies.cookiect});
    } else {
        res.redirect('/trackName');
    }
})

app.listen(3000, () => {	
	console.log('The application is running on localhost:3000! by Shelly the smart girl')
});	