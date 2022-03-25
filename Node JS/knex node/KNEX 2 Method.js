const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'133@Sangeeta',
        database:'facebookdb'
    }
})

//create table

function create_table(){
    knex.schema.hasTable("datatable").then((exists)=> {
            if (!exists){
            console.log({success:`datatable table created successfully`})
            return knex.schema.createTable("datatable", function (typ) {
                typ.string('Name',100)
                typ.string('Lastname',100)
                typ.string('Age',100)
                typ.string('DOB',100)
                typ.string('Address',100)
                typ.integer('Mobile',250)
                
            }).catch((err)=>{
                console.log(err) ;throw err 
                .finally(()=>{
                knex.destroy()
                })
            })
        }else{
            console.log({sorry:`users table already exist!`})
        }
    })
}
create_table()




// .catch((err)=>{console.log(err) ;throw err})
//     .finally(()=>{
//         knex.destroy()











// //drop table
// function drop_table(){
//     knex.schema.hasTable('users').then((exits)=>{
//         if(exits){
//             console.log({ Success: `users table deleted successfully.` });
//             return knex.schema.dropTable('users')
                
//         }else{
//             console.log({sorry:'users table not found'})
//         }

//     })
// }
// drop_table()

// Insert data into the users table

// function insert_table(){
//     knex.schema.hasTable('users').then((exits)=>{
//         if(exits){
//             console.log({success:`insert data successully`})
//             return knex("users").insert({
//                 first_name:'Subhashini', 
//                 last_name:'Maryua'

//             })
//         }else{
//             console.log({sorry:`users table not found`})
//         }
//     })
// }

// insert_table()


// Update users table by id


// function update_data(id){
//     knex.schema.hasTable('users').then((exits)=>{
//         if(exits){
//             console.log({success:'updated data successfully'})
//             return knex('users')
//             .update({ first_name: "Anand", last_name: "Patel" })
//             .where("id", id);
            
//         }else{
//             console.log({sorry:'users table not found'})
//         }
//     })
// }
// update_data(2)


// Delete users data by id

// function delete_by_id(id){
//     knex.schema.hasTable('users').then((exits)=>{
//         if(exits){
//             console.log({sueccss:`data delete by ${id} successfully`})
//             return knex('users').where('id',id).del()


//         }else{
//             console.log({sorry:`users table not found`})
//         }

//     })
// }
// delete_by_id(1)



// // Disable an unique functionality of users column
// function drop_unique_name(){
//     knex.schema.hasTable('users').then((exits)=>{
//         if (exits){
//             console.log({Success: `alter unique_name successfully...`})
//             return knex.schema.alterTable("users", function (t) {
//                 t.unique("first_name");
//             })
//         }else{
//             console.log({sorry:`users table not found`})
//         }
//     })
// }

// drop_unique_name()






// // Disable an unique functionality of users column
// function drop_unique_name() {
//     knex.schema.hasTable("users").then(function (exists) {
//       if (exists) {
//         console.log({ Success: `alter unique_name successfully...` });
//         return knex.schema.alterTable("users", function (t) {
//           t.dropUnique("first_name");
//         });
//       } else {
//         console.log({ Sorry: `users table not found` });
//       }
//     });
//   }

// drop_unique_name()






