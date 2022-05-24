const expressAsyncHandler = require("express-async-handler");
const Filter = require("bad-words");
const Post = require("../../model/post/Post");
const User = require("../../model/user/User");
const validateMongodbId = require("../../utils/validateMongodbID");
const cloudinaryUploadImg = require("../../utils/cloudinary");



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
        const post = await Post.create({...req.body, image: imgUploaded?.url,
            user: _id,
         })
        res.json(post)
    } catch (error) {
        res.json(error)
    }
})

module.exports = {createPostCtrl}