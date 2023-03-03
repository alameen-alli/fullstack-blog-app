const mongoose = require('mongoose');
const {Schema, model} = mongoose;
mongoose.set('strictQuery', true);


const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true}
})

const UserModel = model('User', UserSchema);

module.exports = UserModel;

// https://youtu.be/xKs2IZZya7c?t=3780 - unique:true error