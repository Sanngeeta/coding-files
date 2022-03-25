// const http=require('http')
// const server=http.createServer((req,res)=>{
//     // console.log(req.url)

//      res.end('Hello from the other side welcom to my page sonam')
      

// })
// server.listen(8000,'localhost',()=>{
//      console.log('listening to the port no 8000')
// })


const http=require('http')
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=='/'){
        res.end('Hello from the other side welcom to my page sonam')

        
    }else if (req.url=='/about'){ 
        res.end('Hello from the other side ')
    }else{
        // res.writeHead(404)
        res.writeHead(404,{'content-type':'text/html'})
        // res.end('404 error page. page dones not exits ')
        res.end('<h1>404 error page. page dones not exits </h1> ')
    }
    

})
server.listen(8000,'localhost',()=>{
     console.log('listening to the port no 8000')
})
