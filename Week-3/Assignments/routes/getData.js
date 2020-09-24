const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Lack of Parameter");
});

router.get('/:id', (req, res) => {
    const number = req.query.side;
    if (!number) {
        return res.redirect(`/`);
    } else if (typeof(number) == "number") {
        const templateData = { };
        nn = 0;
        for (i=0; i<number; i++) {
            nn +=i;
        }
        templateData.number = nn;
    } else {
        const templateData = {};
        nn = 'Wrong Parameter';
    }
    res.render('getData', templateData);
});




module.exports = router;