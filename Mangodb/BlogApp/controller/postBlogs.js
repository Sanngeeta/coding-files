const {blogPost}=require('../models/sechma')
createPost=(req,res)=>{
    console.log(req.body);
    const createBlogs=new blogPost({
        user_id:req.userData.id,
        title:req.body.title,
        description:req.body.description

    })

    createBlogs.save((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send({
                message:'New Blog Added!',
                new_blog:data
            })
        }

    })
}



getBlogs=(req,res)=>{
    blogPost.find()
    .then((data)=>{
        res.send({message:data})
    }).catch((err)=>{
        res.send({message:err})
    })


}
//  getBlogs=(req,res)=>{
//     try {
//         blogPost.find({}).populate('user').exec((err, user) => {
//             console.log(err);
//             console.log(user);
//             res.send(user)
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }
            




getBlogsById=(req,res)=>{
    blogPost.findById({_id:req.params._id})
    .then((userByid)=>{
        console.log(userByid);
        res.send({message:'Get Blogs By Id',
        userByid:userByid})
    }).catch((err)=>{
        console.log(err);
        res.send({message:err})
    })
}




module.exports={createPost,getBlogs,getBlogsById}