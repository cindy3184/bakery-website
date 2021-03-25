const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const port = process.env.PORT; || 4000;
// connect to db
require("./config/database");



// require routers // bring  in the routes into server.js
const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');
const menuRouter = require('./routes/menu');
const ordersRouter = require('./routes/orders');
// const confirmRouter = require('./routes/confirm');


const app = express();



///////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan("dev"));
////////////////////////////////////////////////////////


// mounts routes from index router and attaches it to the root 
app.use(methodOverride('_method'));
app.use('/', indexRouter); 
app.use('/reviews', reviewsRouter);
app.use('/menu', menuRouter);
app.use('/orders', ordersRouter);

// app.use('/order/confirm', confirmRouter);


app.listen(port, function () {
    console.log(`express is listening on port: ${port}`);
});