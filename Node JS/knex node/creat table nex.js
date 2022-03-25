// Knex.js creating table
const options={
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'133@Sangeeta',
        database:'youtuber'
    }
}
// These are the connection options for MySQL. 
const knex=require('knex')(options)
knex.schema.createTable('newcars', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('price')
}).then(() => console.log("table created"))
    .catch((err)=>{console.log(err) ;throw err})
    .finally(()=>{
        knex.destroy()
    })

// A new table is created with the Knex.js schema createTable function. We define the schema to contain three columns: id, name, and price. 