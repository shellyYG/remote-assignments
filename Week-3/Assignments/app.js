const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hey! this is a server!');
});

app.listen(3000);