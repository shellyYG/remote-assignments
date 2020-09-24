const express = require('express');
const router = express.Router();


//router.get('/', (req, res) => {
//    res.send("Lack of Parameter");
//});

router.get('/', (req, res) => {
    let nn = req.query.number;
    if (!nn) { //means did not have ?number in the URL
        res.send("Lack of Parameter");
    } else {
        nn = parseInt(nn); //somehow need to transform nn to integer
        if (Number.isInteger(nn)) { //if its an interger
            let x = 0;
            for (i=0; i<=nn; i++) {
                x += i;
            }
            if (x<=0) {
                x="Wrong Parameter";
            } else {
                x;
            }
            res.json(x);
        } else {
            let x='Wrong Parameter';
            res.json(x);
        }

    }
});

module.exports = router;