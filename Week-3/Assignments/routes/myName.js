const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('myName',{customername: req.cookies.cookiect})
});


module.exports = router;