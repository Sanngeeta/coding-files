const exppress=require('express')
const {likedislikePost, getlikedislike } = require('../controller/likedislike')
const { createPost, getBlogs, getBlogsById } = require('../controller/postBlogs')
const { createUsers, findUserDocuments, findUserbyID, updateUserByID, delDocuments, userLoing } = require('../controller/users')
const router=exppress.Router()
const auth=require('../middleware/auth')

router.post('/blogs/users',createUsers)
router.get('/blogs',findUserDocuments)
// router.get('/blogs/:_id',findUserbyID)
router.put('/blogs/update/:id',updateUserByID)
router.delete('/blogs/delete/:id',delDocuments)
router.post('/blogs/login',userLoing)





// Blogs Post API 
router.post('/blogs/create',auth,createPost)
router.get('/blogs/get',auth,getBlogs)
router.get('/blogs/:_id',auth,getBlogsById)


// like dislike post api
router.post('/blogs/post',auth,likedislikePost)
router.get('/blogs/likedislike/:_id',auth,getlikedislike)





module.exports=router