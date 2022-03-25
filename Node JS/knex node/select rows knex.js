// Knex.js selecting all rows
// In the following example, we select all rows from the cars table. 

const ops={
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'133@Sangeeta',
        database:'youtuber'
    }
}

const knex=require('knex')(ops)

knex.from('newcars').select('*')
.then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['name']} ${row['price']}`);
    }
    
    }).catch((err)=>{console.log(err);throw err})
    .finally(()=>{
        knex.destroy()
    })
