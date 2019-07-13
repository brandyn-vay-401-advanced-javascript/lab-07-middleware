'use strict';

var express = require('express');
var router = express.Router();

router.use('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.use('/d', (req,res) => {
  res.status(200).send('Route D');
});

module.exports = router;
