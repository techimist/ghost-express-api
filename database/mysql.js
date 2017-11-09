var mysql = require('promise-mysql');
var dbConfig = require('../config.json');

var pool = mysql.createPool(dbConfig.mysql);

pool.getConnection()
.then(connection => {
  return connection;
});

module.exports = pool;