'use strict';

const express = require('express');

const router = require('./routes.js');

// require routes here

const app = express();

const PORT = process.env.PORT || 8080;

const timeStamp = (req, res, next) => {
  console.log('Im the date/time middleware');
  req.requestTime = new Date();
  next();
}

const logger = (req, res, next) => {
  console.log(req.requestTime, req.method, req.path);
  next();
}

const squareIt = (number) => (req, res, next) => {
  req.number = number * number;
  next();
}

app.use(timeStamp);

app.use(logger);

//app.use routes

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', squareIt(5), (req,res) => {
  res.status(200).send('Route B');
  console.log(req.number);
});

app.use(router);

// Errors
app.use((err, req, res, next) => {
  console.log('Something went wrong, Error');
  res.status(500);
  res.send('Something went wrong, ERROR ヾ｜￣ー￣｜ﾉ')
});

// Not Found
app.use('*', (req, res, next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('What is this ヽ(ﾟｰﾟ*ヽ)ヽ(*ﾟｰﾟ*)ﾉ(ﾉ*ﾟｰﾟ)ﾉ');
  res.end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
