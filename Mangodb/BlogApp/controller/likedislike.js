const {likedislike}=require('../models/sechma')

 // newdata.save((err,data)=>{
        //     if(err){
        //         res.send(err)
        //     }else{
        //         res.send(data)
        //     }
        // })

likedislikePost = (req, res) => {
    console.log(req.body);
    if(![1,0].includes(req.body.like) || ![1,0].includes(req.body.dislike)){
        return res.send({message:'Invalid liked'})
    
    }else{

        const newdata=new likedislike({
            user_id: req.userData.id,
            post: req.body.post_id,
            like: req.body.like,
            dislike: req.body.dislike})
    
            newdata.save()
            .then((data)=>{
                res.send(data)
    
            }).catch((err)=>{
                console.log(err);
                res.send(err)
            })

            }
       
        
    }

    
    





// getlikedislike=async(req,res)=>{
//     const users = await likedislike.find({}).select()
//     .populate('post')  
//     res.json(users)


// }

getlikedislike=(req,res)=>{
    try {
        likedislike.find({id:req.params._id}).select().populate('post').exec((err, user) => {
            console.log(err);
            console.log(user);
            res.send(user)
        })
    } catch (err) {
        console.log(err);
    }
}
          


module.exports={likedislikePost,getlikedislike}