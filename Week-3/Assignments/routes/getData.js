const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Lack of Parameter");
});

router.get('/:id', (req, res) => {
    let number = req.query.number;
    const { id } = req.params;

    if (!number) { //if there is no side query, go back to localhost:3000
        return res.redirect(`/`);
    } else if (typeof(number) == "number") {
        const templateData = { };
        nn = 0;
        for (i=0; i<number; i++) {
            nn +=i;
        }
        templateData.number = nn;
    } else {
        const templateData = { };
        nn = 'Wrong Parameter';
        templateData.number = nn;
    }
    res.render('getData', templateData);
});




module.exports = router;