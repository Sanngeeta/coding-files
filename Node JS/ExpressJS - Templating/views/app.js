const express=require('express')
const app=express()
const port =process.env.PORT ||'3000'
import web from './routes/web.js'


//setup the Directory where tempalte files are located
app.set('views','./views')



//load routes
app.use('/',web)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})
//load routes