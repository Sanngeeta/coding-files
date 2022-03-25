const express=require('express')
const router=express.Router()

const employeeControl=require('../controllers/employe.control')


// get all employuees
router.get('/',employeeControl.getEmpoyeeList)

// get employee by ID
router.get('/:id',employeeControl.getEmployByID)

// create new empl
router.post('/',employeeControl.createNewEmployee)
module.exports=router