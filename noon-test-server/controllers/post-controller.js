
const postManager = require('../business/post-manager');


exports.getPosts = async (req, res) => {
    try {
        const posts = await postManager.getPosts();
        res.status(201).json(posts);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

exports.savePosts = async (req, res) => {
    try {
        const payload = req.body;
        const postDetails = {
            userProfilePic: payload.userProfilePic,
            userName: payload.userName,
            postPicture: payload.postPicture,
            postDescription: payload.postDescription,
            postHashtag: payload.postHashtag
        }
        const savedResult = await postManager.savePost(postDetails);
        res.status(201).json(savedResult)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}