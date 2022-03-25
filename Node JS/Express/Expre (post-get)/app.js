var express = require('express')
var router=express()
var movie=[
    {id:101,name:'Fight Club',year:1999,rating:8.1},
    {id:102,name:'Inception',year:2010,rating:8.7},
    {id:103,name:'The Drak Khight',year:2008,rating:9},
    {id:104,name:'12 Angry Men',year:1957,rating:8.9}

]
// for data get of movie
router.get('/:id([0-9]{3})',(req,res)=>{
    var currMovie=movie.filter((movie)=>{
        if(movie.id==req.params.id){
            return true 
        }
    })
    if(currMovie.length==1){
        res.json(currMovie[0])
    }else{
        res.status(404)
        res.json({messsage:'Not found'})
    }
})

//post data in movie
router.post('/',(req,res)=>{
//Check if all fields are provided and are valid
if(!req.body.name||
    !req.body.year.toString().match(/^[0-9]{4}$/g)||
    !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
    res.status(400)
    res.json({messsage:'Bad Request'})

    }else{
        var newId=movie[movie.length-1].id+1
        movie.push({
            id:newId,
            name:req.body.name,
            year:req.body.year,
            rating:req.body.rating
        })
        res.json({messsage:'New movie created',location:'/movies'+newId})
    }

})


//put movie create and update

router.put('/:id',(req,res)=>{
    if(!req.body.name||
        !req.body.year.toString().match(/^[0-9]{4}$/g)||
        !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
        res.status(400)
        res.json({messsage:'Bad Request'})
    
    }else{
    //Gets us the index of movie with given id.
    var updateIndex=movie.map((movie)=>{
        return movie.id
    }).indexOf(parseInt(req.params.id))
    if(updateIndex === -1){
        //Movie not found, create new
        movie.push({
           id: req.params.id,
           name: req.body.name,
           year: req.body.year,
           rating: req.body.rating
        });
        res.json({messsage:'Movie id'+req.params.id+ 'updated',location:'/movies/'+req.params.id})
    }
}
})



//Delete data by id
router.delete('/:id',(req,res)=>{
    var romoveIndex=movie.map((movie)=>{
        return movie.id
    }).indexOf(req,params.id)  //Gets us the index of movie with given id.

    if(romoveIndex===-1){
        res.json({messsage:'Not found'})
    }else{
        movie.splice(romoveIndex,1)
        res.send({messsage:'Movie id'+req.params+ 'removed'})
    }
})
router.listen(3000,()=>{
    console.log('Port listen 3000')
})

module.exports=router