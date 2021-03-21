// connect data info from order controller and out into here 

const express = require('express');
const router = express.Router();


router.post('/confirm', (req, res) => {
    res.render('confirm/index')
})


module.exports = router; 