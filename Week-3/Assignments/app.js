const express = require('express');
const bodyParser= require('body-parser');

app.set('view engine', 'pug');


const app = express();
app.get('/', (req, res) => {
    res.send("Hey! this is Shelly's first hand-made server!");
});

app.listen(3000);