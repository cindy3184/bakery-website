const express = require('express');
const morgan = require('morgan');
const path = require('path');




// require routers // bring  in the routes into server.js
const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');
const menuRouter = require('./routes/menu');
const ordersRouter = require('./routes/orders');


const app = express();

// connect to db
require("./config/database");

///////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan("dev"));
////////////////////////////////////////////////////////


// mounts routes from index router and attaches it to the root 
app.use('/', indexRouter); 
app.use('/reviews', reviewsRouter);
app.use('/menu', menuRouter);
app.use('/orders', ordersRouter);


app.listen(4000);