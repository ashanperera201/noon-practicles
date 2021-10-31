const express = require('express')
const router = express.Router()
const postController = require('../controllers/post-controller')


router.get(`/get-all`, postController.getPosts);
router.post(`/save`, postController.savePosts);

module.exports = router;