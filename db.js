var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Amyalex530424",
  database: "test1",
  port: 3306
});

// simplily connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;