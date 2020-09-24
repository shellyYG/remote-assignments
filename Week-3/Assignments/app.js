const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const numberRoutes = require('./routes/numbers')
const app = express();
app.get('/', (req, res) => {
    res.send("Hey! this is Shelly's first hand-made server!");
});

app.listen(3000);