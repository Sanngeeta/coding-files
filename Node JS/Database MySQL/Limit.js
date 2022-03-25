// Limit the Result
// You can limit the number of records returned from the query, by using the "LIMIT" statement:
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "133@Sangeeta",
//   database: "NewDatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM newtable LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   })
// })

// Start From Another Position
// If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "NewDatabase"
});

con.connect(function(err) {
  if (err) throw err;
//   var sql = "SELECT * FROM newtable LIMIT 5 OFFSET 2";
    var sql = "SELECT * FROM newtable LIMIT 2 ,5";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  })
})