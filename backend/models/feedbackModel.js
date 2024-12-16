const { Schema, model } = require('../connection');

const userSchema = new Schema({
    name: { type: String, requred: true },
    email: { type: String, requred: true, unique: true },
    feedback: { type: String, requred: true },
});

module.exports = model('feed', userSchema);