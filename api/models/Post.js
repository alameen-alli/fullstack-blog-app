const mongoose = require('mongoose');
const {Schema, model} = mongoose;
mongoose.set('strictQuery', true);

const PostSchema = new Schema ({
    title: String,
    summary: String,
    content: String,
    image: String
}, {
    timestamps: true
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;