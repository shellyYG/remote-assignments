const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {	
    res.send("This is Shelly's homepage!");
});
module.exports = router; //need to add this line so app.js can use it