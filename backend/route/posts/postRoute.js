const express = require('express')
const { createPostCtrl, fetchPostsCtrl, fetchPostCtrl, updatePostCtrl, deletePostCtrl, addLikeCtrl, addDislikeCtrl } = require('../../controllers/posts/postCtrl')
const authMiddleware = require('../../middleware/auth/authMiddleware')
const { photoUpload, postPhotoResize } = require('../../middleware/upload/photoUpload')




const postRoute = express.Router()



postRoute.post(
    "/",
    authMiddleware,
    photoUpload.single("image"),
    postPhotoResize,
    createPostCtrl
  );

  postRoute.put("/like", authMiddleware, addLikeCtrl);
  postRoute.put("/dislike", authMiddleware, addDislikeCtrl);
  
  postRoute.get("/", fetchPostsCtrl);
  postRoute.get("/:id", fetchPostCtrl);
  postRoute.put("/:id", authMiddleware, updatePostCtrl);
  
  postRoute.delete("/:id", authMiddleware, deletePostCtrl);
  
  module.exports = postRoute;




