const postRepositorie = require('./postRepositorie')

const listAllPosts = async () => {
  const posts = await postRepositorie.listAll()

  if(posts.length > 0){
    return posts
  }else{
    return 'No existen post creados aun.'
  }

}

const listPost = async (id) => {
  const post = await postRepositorie.listById(id)
  if (post) {
    return post
  } else {
    return `No existe ningun post con el id ${id}`
  }
}

const createPost = async (body) => {

  const post = await postRepositorie.created(body)

  if(post){
    return post
  }else{
    return 'No se pudo crear el post intentalo de nuevo.'
  }

}

const updatePost = async (id, body) => {
  const post = await postRepositorie.listById(id)

  if (!post) {
    return `No existe un post con el id ${id}`
  }

  const postUpdate = await postRepositorie.update(id, body)

  if (postUpdate > 0) {
    return postUpdate
  } else {
    return `No se pudo modificar el post con el id: ${id}`
  }
}

const deletePost = async (id) => {
  const post = await postRepositorie.listById(id)

  if (!post) {
    return `No existe un post con el id: ${id}`
  }

  const postDelete = await postRepositorie.remove(id)

  if (postDelete > 0) {
    return postDelete
  } else {
    return `No se pudo eliminar el post con el id: ${id}`
  }
}


module.exports = {
  listAllPosts,
  listPost,
  createPost,
  updatePost,
  deletePost,
}
