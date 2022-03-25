var dbConn=require('../../confing/db.confing')

var Employee= (employee)=>{
    this.first_name = employee.first_name
    this.last_name = employee.last_name
    this.email = employee.email
    this.phone = employee.phone
    this.organization = employee.organization
    this.desgination = employee.desgination
    this.salary = employee.salary
    this.created_at = new Date()
    this.updated_at = new Date()

}

// get all employes
Employee.getAllEmployee=(result)=>{
    dbConn.query('SELECT * FROM employee',(err,res)=>{
        if (err){
            console.log('Error while fetching employess',err);
            result(null,err)

        }else{
            console.log('Employees fetched successfully')
            result(null,res)
        }

    })
}

// get employee by ID from databses
Employee.getEmployByID=(id,result)=>{
    dbConn.query('SELECT * FROM employee EHERE id=?',id,(err,res)=>{
        if(err){
            console.log('Error while fecthing employee by id',err)
            result(null,err)
        }else{
            result(null,res)
        }

    })
}
module.exports=Employee;