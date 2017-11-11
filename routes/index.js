var express = require('express');
var router = express.Router();
var db = require('../database/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query('select html from posts')
  .then(dbRes => {
    res.send(dbRes);
  })
});

module.exports = router;
