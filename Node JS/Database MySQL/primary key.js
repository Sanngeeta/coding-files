// Primary Key
// When creating a table, you should also create a column with a unique key for each record.
// This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number for each record. Starting at 1, and increased by one for each record.
var mysql=require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "NewDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "CREATE TABLE newtable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  var sql = "INSERT INTO newtable (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});