const express = require('express');
const router = express.Router(); //access express router 



router.get('/', (req, res) => {
    res.render('reviews')
});



module.exports = router; 