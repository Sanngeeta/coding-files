// // To select data from a table in MySQL, use the "SELECT" statement.
var mysql=require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "NewDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM newtable", function (err, result, fields) {
  if (err) throw err;
    console.log(result);
  });
});



// Selecting Columns
// To select only some of the columns in a table, use the "SELECT" statement followed by the column name.
  // con.query("SELECT name FROM newtable", function (err, result, fields) {

var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'133@Sangeeta',
  database:'NewDatabase'
  
})
con.connect(function(err){
  if (err) throw err
  con.query('SELECT name,address FROM newtable',function(err,result,fields){
    if (err) throw err
    console.log(fields[1].name)
    console.log(result)

  })

})



// Select With a Filter
// When selecting records from a table, you can filter the selection by using the "WHERE" statement:
var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'133@Sangeeta',
  database:'NewDatabase'
  
})
con.connect(function(err){
  if (err) throw err
  con.query("SELECT * FROM newtable WHERE address='Park Lane 38'",function(err,result,fields){
    if (err) throw err
    // console.log(fields[1].name)
  console.log(result)

  })

})



// Wildcard Characters
// You can also select the records that starts, includes, or ends with a given letter or phrase.
// Use the '%' wildcard to represent zero, one or multiple characters:
var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'133@Sangeeta',
  database:'NewDatabase'
  
})
con.connect(function(err){
  if (err) throw err                                   //yaha par address me se ek letter lene pr use start word lekar sara print kar deta hai
  con.query("SELECT * FROM newtable WHERE address LIKE 'M%'", function (err, result) {  if (err) throw err
  console.log(result)

  })

})