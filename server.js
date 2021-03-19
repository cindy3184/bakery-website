const express = require('express');
const { model } = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send( 'Welcome to our homepage')
})


app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/menu', (req, res) => {
    res.send('Menu')
})

app.get('order/', (req, res) => {
    res.send('Place an Order!')
})

model.export = express
app.listen(4000);