// Sort the Result
// Use the ORDER BY statement to sort the result in ascending or descending order.
// The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.
var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'NewDatabase'
    
  })
  con.connect(function(err){
    if (err) throw err                                   //yaha par address me se ek letter lene pr use start word lekar sara print kar deta hai
    // con.query("SELECT * FROM newtable ORDER BY name", function (err, result) { 
    con.query("SELECT * FROM newtable ORDER BY name DESC", function (err, result) { //ORDER BY name DESC ye pura table hi sort kar ke deta hai
    if (err) throw err
    console.log(result)
  
    })
  
  })
  