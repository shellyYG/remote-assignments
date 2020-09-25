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
app.use('/trackName', trackNameRoutes);
app.use('/myName', myNameRoutes);
app.use(express.static('public'));

app.post('/trackName', (req, res) => {
    res.cookie('cookiect',req.body.ctname); //send the cookie
    res.redirect('/myName'); //show the myName page after the cookie sent
})



app.listen(3000, () => {	
	console.log('The application is running on localhost:3000! by Shelly the smart girl')
});	