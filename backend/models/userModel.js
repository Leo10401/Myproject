const { Schema, model } = require('../connection');

const userSchema = new Schema({
    name: { type: String, requred: true },
    email: { type: String, unique: true },
    password: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', userSchema);