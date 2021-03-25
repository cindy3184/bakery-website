const express = require('express');
const router = express.Router(); //access express router 



router.get('/', (req, res) => {
    res.render('index')
});



module.exports = router; 