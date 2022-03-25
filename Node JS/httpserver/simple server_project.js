const axios=require('axios')
const readline=require('readline-sync')
const fs = require('fs')


const api=axios.get('http://api.navgurukul.org/courses ')
.then(Response=>{
    let data=(Response.data)
    let=jsondata=JSON.stringify(data,null,5)
    fs.writeFileSync('merakileran.json',jsondata)
    
    const jsonData=JSON.parse(jsondata)
    fs.readFile('simple server_project.json',jsondata,(err)=>{
    console.log('done')
})

})

const http=require('http')
const server=http.createServer((request,respons)=>{
    respons.end(jsondata)


})
server.listen(7000,'localhost',()=>{
    console.log('data lesting')

})
