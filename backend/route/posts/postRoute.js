const express = require('express')
const { createPostCtrl } = require('../../controllers/posts/postCtrl')
const authMiddleware = require('../../middleware/auth/authMiddleware')
const { photoUpload, postPhotoResize } = require('../../middleware/upload/photoUpload')




const postRoute = express.Router()



postRoute.post('/', authMiddleware, photoUpload.single('image'),postPhotoResize, createPostCtrl )




module.exports = postRoute