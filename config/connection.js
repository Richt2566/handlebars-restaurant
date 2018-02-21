var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  	port: 8000,
  host: "localhost",
  user: "root",
  password: "admin",
  database: "burgers_db"
});
};

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  };
  console.log("connected as id " + connection.threadId);
});
// export connection for use in app
module.exports = connection;