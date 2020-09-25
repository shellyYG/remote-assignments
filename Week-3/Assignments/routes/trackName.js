const express = require('express');
const router = express.Router();



router.get('/', (req, res) => { //when customer arrive trackName...what will happen?
    console.log(req.cookies.cookiect); //successfully print out Shelli
    //res.render('trackName',{name: req.cookies.cookiect});
    res.redirect('/myName');
});



module.exports = router;