const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '133@Sangeeta',
        database: 'youtuber'
    }
}

const knex=require('knex')(options)
knex.from('newcars').select('name','price').where('price','>','50000')
.then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['name']} ${row['price']}`);
    
    }
})
.catch((err) => { console.log( err); throw err })
.finally(() => {
    knex.destroy();
});

