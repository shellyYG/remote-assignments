const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('Week-4 Assignment-3 Server starts!');
})


app.listen(4300);