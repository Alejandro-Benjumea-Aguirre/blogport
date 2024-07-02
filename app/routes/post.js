const { Router } = require('express')
const { check } = require('express-validator')

const { messages, messageValidator } = require('../helpers/response');


const postController = require('../components/post/postController');

const router = Router()

router.get('/', postController.getPosts)

router.get('/:id', postController.getPost)

router.post('/', postController.postPost)

router.patch('/:id', postController.patchPost)

router.delete('/:id', postController.deletePost)

module.exports = router
