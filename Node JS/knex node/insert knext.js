// Knex.js inserting data
const options={
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'133@Sangeeta',
        database:'youtuber'
    }
}
const newcars=[
    {name:'Audi',price:5262},
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 },
]
const knex=require('knex')(options)
knex('newcars').insert(newcars).then(() => console.log("data inserted")) 
.catch((err)=>{console.log(err);throw err})
.finally(()=>{
    knex.destroy()
})   
