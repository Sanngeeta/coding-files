const dbConn=require('./../config/db')
//employee object create

var Employee=((employee)=>{
    this.first_name     = employee.first_name;  
    this.last_name      = employee.last_name;  
    this.email          = employee.email;  
    this.phone          = employee.phone;  
    this.organization   = employee.organization;  
    this.designation    = employee.designation;  
    this.salary         = employee.salary;  
    this.status         = employee.status ? employee.status : 1;  
    this.created_at     = new Date();  
    this.updated_at     = new Date();

})


// Employee.create=(newEmployee,result)=>{
//     dbConn.query('INSERT INTO employess set ?',newEmployee,(err,res)=>{
//         if(err){
//             console.log('error',err)
//             result(err,null)
//         }else{
//             console.log(res.insertId)
//             result(null,res.insertId)
//         }
//     })

// }

Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
        if(err) {  console.log("error: ", err);  
            result(err, null);
        }else{  
            console.log(res.insertId);  
            result(null, res.insertId);}});};


Employee.findById=(id,result)=>{
    dbConn.query('select*from employess where id=?',id,(err,res)=>{
        if(err){
            console.log('error',err)
            result(err,null)
        }else{
            result(null,res)
        }

    })

}
Employee.findAll=(result)=>{
    dbConn.query('select*from employess',(err,res)=>{
        if(err){
            console.log('error',err)
            result(err,null)
        }else{
            console.log('Employee',res)
            result(null,res)
        }
    })
}

Employee.update=(id,employee,result)=>{
dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id],(err,res)=>{
        if(err){
        console.log('error',err)
        result(null,err)
        }else{
            result(null,res)
        }
    
    })

}



Employee.delete=(id,result)=>{
    dbConn.query('DELETE FROM employess WHERE id=?',[id],(err,res)=>{
        if(err){
            console.log('error',err)
            result(null,res)
        }else{
            result(null,res)
        }
    })
}

module.exports=Employee