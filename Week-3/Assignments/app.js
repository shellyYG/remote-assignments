const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes/index.js');
const getDataRoutes = require('./routes/getData');


app.use(mainRoutes);
app.use('/getData', getDataRoutes);
app.use(express.static('public'));

app.listen(3000, () => {	
	console.log('The application is running on localhost:3000! by Shelly the smart girl')
});	