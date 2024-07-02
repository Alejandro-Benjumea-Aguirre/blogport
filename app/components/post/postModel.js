const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'El titulo es obligatorio']
  },
  description: {
    type: [String],
    required: [true, 'El cuerpo del post es obligatorio']
  },
  image: {
    type: [String],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  },
}, { versionKey: false });

postSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  }
});

 const post = mongoose.model('Post', postSchema);

 module.exports = post
