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

knex.schema.createTable('usersTable', (table) => {
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
    table.string('email')
    table.string('password')
}).then(()=>{
    console.log('Table is created')
}).catch((err)=>{
    console.log("Table already created")
})

module.exports=knex