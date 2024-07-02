const post = require('./postModel');
const postModel = require('./postModel')

const listAll = async () => {
  const posts = postModel.find();
  return posts;
}

const listById = async (id) => {
  const post = postModel.findById(id);
  return post;
}

const created = async (body) => {
  const post = new postModel(body);
  await post.save();
  return post;
}

const update = async (id, body) => {
  const post = await postModel.findOneAndUpdate({_id: id}, body, {returnDocument: 'after'});
  return post;
}

const remove = async (id) => {
  const post = await postModel.findByIdAndDelete({_id: id});
  return post;
}

module.exports = {
  listAll,
  listById,
  created,
  update,
  remove
}
