// Delete Record
// You can delete records from an existing table by using the "DELETE FROM" statement:
var mysql=require('mysql')


var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'133@Sangeeta',
  database:'NewDatabase'
  
})
con.connect(function(err){
  if (err) throw err
  var sql = "DELETE FROM newtable WHERE address = 'Mountain 21'";                                  
  con.query(sql, function (err, result)  { 
  if (err) throw err
  console.log("Number of records deleted: " + result.affectedRows)

  })

})


// Delete a Table
// You can delete an existing table by using the "DROP TABLE" statement:
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "NewDatabese"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE newtable";
  // Drop Only if Exist
  // If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.
  // var sql = "DROP TABLE IF EXISTS customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

