const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Lack of Parameter");
});

module.exports = router;