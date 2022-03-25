//  Ye hamri main file hai jisko run kar ke code chala 
// kar dekhte hai
const express = require('express');
const bodyParser = require('body-parser');
// create express appconst 
app = express();
// Setup server portconst 
port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json 
app.use(bodyParser.json())// define a root route
app.get('/', (req, res) => {  res.send("Hello World");});

// Require employee routesconst 
employeeRoutes = require('./models/employee.model')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {  console.log(`Server is listening on port ${port}`);});