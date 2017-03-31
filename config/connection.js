// Set up MySQL connection.
var mysql = require("mysql");
var app = require("../server");

if (app.settings.env == 'development')
    {
     var connection = mysql.createConnection({
     port: 3306,
     host: "localhost",
     user: "root",
     password: "root",
     database: "burger_db"
     });
    }
 else
    {
     var connection = mysql.create.createConnection(process.env.JAWSDB_URL);
    }
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burger_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;
