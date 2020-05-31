const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');



const PORT = process.env.PORT || 3001;

const app = express();

// Setup middlewares
// testing middlewars

// currently working middlewares are below
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
require('./services/passport');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect database
mongoose.connect(process.env.MONGODB_URI || "mongodb://project03:password1@ds141320.mlab.com:41320/heroku_sr8c6jmt", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

app.listen(PORT);
