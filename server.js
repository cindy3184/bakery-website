const express = require('express');
const { model } = require('mongoose');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));
app.use('/stylesheet', express.static(__dirname + 'public/stylesheet'));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
    res.render('index')
})


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/menu', (req, res) => {
    res.render('menu')
})

app.get('/order', (req, res) => {
    res.render('order')
})

app.post('/confirmed', (req, res) => {
    // req.body.order
    res.render('confirmed')
})


model.export = express
app.listen(3000);