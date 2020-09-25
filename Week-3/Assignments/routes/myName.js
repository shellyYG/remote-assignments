const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //when customer arrive trackName...what will happen?
    const customername = req.cookies.cookiect;
    res.render('myName',{customername: req.cookies.cookiect});
});


module.exports = router;