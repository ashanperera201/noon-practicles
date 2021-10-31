const postRepository = require('../repository/post-repository');

exports.savePost = async (post) => {
    try {
        const savedResult = await postRepository.savePost(post);
        if (savedResult) {
            return {
                validity: true,
                result: savedResult
            }
        } else {
            return {
                validity: false,
                result: null
            }
        }
    } catch (error) {
        throw error;
    }
}

exports.getPosts = async () => {
    try {
        const posts = await postRepository.getPosts();
        return {
            validity: true,
            result: posts
        }
    } catch (error) {
        throw error;
    }
}
