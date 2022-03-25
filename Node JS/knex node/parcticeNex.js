// const options={
//     client:'mysql',
//     connection:{
//         host:'localhost',
//         user:'root',
//         password:'133@Sangeeta',
//         database:'mydb'
//     }
// }

// const knex=require('knex')(options)

// // knex.schema.createTable('custumer',(table)=>{
// //     table.increments('id')
// //     table.string('name')
// //     table.integer('price')

// // }).then(()=>{
// //     console.log('table created')  
// // }).catch((err)=>{
// //     console.log(err) ; throw err
// // }).finally(()=>{
// //     knex.destroy()
// // })




// //instr data in the table
// const newcars=[
//     {name:'Audi',price:5262},
//     { name: 'Mercedes', price: 57127 },
//     { name: 'Skoda', price: 9000 },
//     { name: 'Volvo', price: 29000 },
//     { name: 'Bentley', price: 350000 },
//     { name: 'Citroen', price: 21000 },
//     { name: 'Hummer', price: 41400 },
//     { name: 'Volkswagen', price: 21600 },

// ]

// knex('custumer').insert(newcars).then(()=>{
//     console.log('data inserted')
// })
// .catch((err)=>{
//     console.log(err);throw err
// })

// .finally(()=>{
//     knex.destroy()
// })





//Practice new method of the knex
const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'133@Sangeeta',
        database:'newdb'
        
    }
})


// function create_table(){
//     knex.schema.hasTable('navgurukul').then((exist)=>{
//         if(!exist){
//             console.log({success:"navgurukul table created successfully"})
//             return knex.schema.createTable('navgurukul',(type)=>{
//                 type.increments('id').primary()
//                 type.string('name',100)
//                 type.string('lastname',100)
//             })
//         }else{
//             console.log({sorry:'navgurukul table already exist'})
//         }
//     })
// }

// create_table()

function delete_table(){
    knex.schema.hasTable('class').then((exist)=>{
        if(exist){
            console.log({success:'delete table successfully'})
            return knex.schema.dropTable('class')

        }
    })
}

delete_table()