const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //when customer arrive trackName...what will happen?
    const name = req.cookies.cookiect;
    if (name) {
        res.render('myName');
    } else {
        res.render('trackName',{name: req.cookies.cookiect});
    }
    
});



module.exports = router;