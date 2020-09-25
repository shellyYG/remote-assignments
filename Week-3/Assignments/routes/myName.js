const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //when customer arrive trackName...what will happen?
    res.render('myName',{name: req.cookies.cookiect});
});


module.exports = router;