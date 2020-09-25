const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //when customer arrive trackName...what will happen?
    res.send("Hallo!")
    //res.render('myName',{name: req.cookies.cookie1});
});


module.exports = router;