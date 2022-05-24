const express = require('express')
const { createPostCtrl, fetchPostsCtrl, fetchPostCtrl, updatePostCtrl } = require('../../controllers/posts/postCtrl')
const authMiddleware = require('../../middleware/auth/authMiddleware')
const { photoUpload, postPhotoResize } = require('../../middleware/upload/photoUpload')




const postRoute = express.Router()



postRoute.post('/', authMiddleware, photoUpload.single('image'),postPhotoResize, createPostCtrl )
postRoute.get('/', fetchPostsCtrl )
postRoute.get('/:id', fetchPostCtrl )
postRoute.put('/:id', authMiddleware, updatePostCtrl)




module.exports = postRoute