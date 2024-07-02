const response = require('../../helpers/response');

const postService = require('./postService');


const getPosts = async (req, res) => {
  try {
    const resp = await postService.listAllPosts()
    response.success(req, res, resp, 200)
  } catch (e) {
    console.log(e);
    response.error(req, res, e, 500)
  }
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const resp = await postService.listPost(id)
    response.success(req, res, resp, 200)
  } catch (e) {
    response.error(req, res, e, 500)
  }
}

const postPost = async (req, res) => {
  const body = req.body
  try {
    const resp = await postService.createPost(body)
    response.success(req, res, resp, 200)
  } catch (e) {
    console.log(e)
    response.error(req, res, e, 500)
  }
}

const patchPost = async (req, res) => {
  const { id } = req.params
  const { uid, ...body } = req.body

  try {
    const resp = await postService.updatePost(id, body)
    response.success(req, res, resp, 200)
  } catch (error) {
    console.log(error)
    response.error(req, res, 'Hable con el administrador', 500)
  }
}

const deletePost = async (req, res) => {
  const { id } = req.params

  try {
    const resp = await postService.deletePost(id)
    response.success(req, res, resp, 200)
  } catch (error) {
    console.log(error)
    response.error(req, res, 'Hable con el administrador', 500)
  }
}



module.exports = {
  getPosts,
  getPost,
  postPost,
  patchPost,
  deletePost
}
