const options={
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'133@Sangeeta',
        database:'facebookdb'
    }
}


const knex=require('knex')(options)
function insert_data(){
    knex.schema.hasTable('datatable').then((tableExits)=>{
        if(tableExits){
            const array=[]
            const user=require('readline-sync')
            const name=user.question('enter the name:')
            const lastname=user.question('enter the lastname:')
            const age=user.questionInt('enter the age:')
            const DOB=user.question('enter the date of birth:')
            const address=user.question('enter the address:')
            const phone=user.question('enter the mobile number:')
            dict={Name:name,Lastname:lastname,Age:age,DOB:DOB,Address:address,Mobile:phone}
            array.push(dict)

            knex('datatable').insert(array).then(()=>{
                console.log({success:'insert data successfully'})
            }).catch((err)=>{
                console.log(err);throw err
            })


        }
        })
    }
    


insert_data()