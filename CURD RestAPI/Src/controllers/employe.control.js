const EmployeModel=require('../models/employee.model')

// get employes list
exports.getEmpoyeeList=(req,res)=>{
    // console.log('here all employees list')
    EmployeModel.getAllEmployee((err,employees)=>{
        // console.log('We are here')
            console.log('we are here')
            if(err)
            res.send(err)
            console.log('Employes',employees)
            res.send(employees)

        })
        }
    
// get employee by ID
exports.getEmployByID=(req,res)=>{
    // console.log('get emp by id')
    EmployeModel.getEmployByID(req.params.id,(err,employee)=>{
        if(err)
        res.send(err)
        console.log('single employee data',employee)
        res.send(employee)

        
    })
}

// create new employee
exports.createNewEmployee=(req,res)=>{
    console.log('req data',req.body)
}