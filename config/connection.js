
/**/
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "oib4pfn30n77xynn",
  password: "scipu6yi1gn25sk5",
  database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  
