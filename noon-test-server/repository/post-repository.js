const postModel = require('../models/post-model');


exports.savePost = async (post) => {

    console.log(post);

    let returnRes = {};
    const session = await postModel.startSession();
    try {
        await session.withTransaction(async () => {
            returnRes = await postModel.create(post);
            await session.commitTransaction();
        })
    } catch (error) {
        await session.abortTransaction();
    }
    await session.endSession();
    return returnRes;
}

exports.getPosts = async () => {
    return await postModel.find();
}