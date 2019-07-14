'use strict';

const express = require('express');
const router = express.Router();

router.use('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.use('/d', (err,req,res) => {
  res.status(200).send('Route D');
  router.next(err);
});

module.exports = router;
