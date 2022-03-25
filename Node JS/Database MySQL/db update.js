var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "NewDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE newtable SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});