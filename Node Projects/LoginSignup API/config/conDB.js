const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '133@Sangeeta',
        database: 'LoginSignup'
    }
}

const knex = require('knex')(options);





// const insert_data=(users)=>{
//     this.firstName=users.firstName
//     this.lastName=users.lastName
//     this.email=users.email
//     this.password=users.password
// }
// knex('usersTable').insert(insert_data).then(()=>{
//         console.log({ success: true, message: 'data inserted successfully' })
//     }).catch((err)=>{
//         console.log(err)
//     })



// // get all users data
// const get=()=>{
    
// }
// knex.from('userTable').select("*")
//     .then((row)=>{
//         for(row of rows){
//         console.log(`${row['id']} ${row['firstName']} ${row['lastName']} ${row['email']} ${row['password']}`)
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();

    