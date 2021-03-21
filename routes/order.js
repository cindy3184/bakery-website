const express = require('express');
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('order/index');
});


router.post('/confirm', (req, res) => {
    res.render('order/confirm')
})


module.exports = router; 