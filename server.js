const express = require('express');
const { model } = require('mongoose');
const morgan = require("morgan");
const path = require('path');
require("./config/database");


// require routers 
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const menuRouter = require('./routes/menu');
const orderRouter = require('./routes/order');


const app = express();

// mounts routes from index router and attaches it to the root 
app.use('/', indexRouter); 
app.use('/about', aboutRouter);
app.use('/menu', menuRouter);
app.use('/order', orderRouter);
app.post('/order', orderRouter);


///////////////////////////////////////////////////////
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan("dev"));
////////////////////////////////////////////////////////


model.export = express
app.listen(3000);