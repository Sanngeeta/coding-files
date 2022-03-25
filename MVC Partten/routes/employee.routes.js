const express = require('express')
const router=express.Router()
const employeeController=require('../controller/employee.controller')

//Retrieve find all employees

router.get('/', employeeController.findAll);
// create a new employee
router.post('/',employeeController.create)

// retrieve a single employee with id
router.get('/:id',employeeController.findById)

// Update a employee with id
router.put('/:id',employeeController.update)

// Delelte a employee with id
router.delete('/:id',employeeController.delete)



module.exports=router