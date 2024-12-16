const { Schema, model } = require('../connection');

const petSchema = new Schema({
    name: { type: String, required: true },
    category : { type : String, required: true},
    age: { type: Number, required: true },
    breed : {type: String},
    image: String,
    details : {type: String},
    adoptedin: { type: Date, default: Date.now },
    phoneno : { type: Number, required: true }
});

module.exports = model('pet', petSchema);