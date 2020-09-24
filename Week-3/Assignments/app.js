const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const getDataRoutes = require('./routes/getData')


//app.use(mainRoutes);
//app.use('/getData', getDataRoutes);

app.listen(3000, () => {	
	console.log('The application is running on localhost:3000! by Shelly the smart girl')
});	