const expressAsyncHandler = require("express-async-handler");
const Filter = require("bad-words");
const fs = require("fs");
const Post = require("../../model/post/Post");
const User = require("../../model/user/User");
const validateMongodbId = require("../../utils/validateMongodbID");
const cloudinaryUploadImg = require("../../utils/cloudinary");


//--------------> create post
const createPostCtrl = expressAsyncHandler(async(req,res) => {
    console.log(req.file)
    const {_id} = req.user
    // validateMongodbId(req.body.user)
    //check for bad-words
    const filter = new Filter()
    const isProfane = filter.isProfane(req.body.title, req.body.description)
    //Block user
    if(isProfane) {
        const user = await User.findByIdAndUpdate(_id, {
            isBlocked: true,
        })
        throw new Error("Creating Failed because it contains profane words, you have been blocked")
    }

      //1. Get path of file to upload
  const localPath = `public/images/posts/${req.file.filename}`
  //2. uplaod to cloudinary
  const imgUploaded = await cloudinaryUploadImg(localPath)
  
    try {
        // const post = await Post.create({...req.body, image: imgUploaded?.url,
        //     user: _id,
        //  })
        res.json(imgUploaded)
        //remove saved file from local storage
        fs.unlinkSync(localPath)
    } catch (error) {
        res.json(error)
    }
})

//----------> fetch all posts
const fetchPostsCtrl = expressAsyncHandler(async(req,res) => {
    try {
    const posts = await Post.find({}).populate('user')

    res.json(posts)
    } catch (error) {
    }
})

//-------> fetch single post
const fetchPostCtrl = expressAsyncHandler(async(req,res) => {
    const {id} = req.params
    validateMongodbId(id)
    try {
        const post = await Post.findById(id).populate('user')
        res.json(post)
    } catch(error) {
        res.json(error)
    }
})

module.exports = {createPostCtrl, fetchPostsCtrl, fetchPostCtrl}