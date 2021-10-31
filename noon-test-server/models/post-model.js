const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    //TODO : FOR THE TIME BEING USING IN THIS TABLE -> THIS SHOULD BE INSIDE THE USER TABLE.
    userProfilePic: { type: String },
    userName: { type: String },
    postPicture: { type: String },
    postDescription: { type: String },
    postHashtag: { type: String },
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post;