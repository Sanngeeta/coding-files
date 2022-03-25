var mysql=require('mysql')

// Create Connection
// Start by creating a connection to the database.


var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "133@Sangeeta"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //create database
  con.query("CREATE DATABASE NewDatabase", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


