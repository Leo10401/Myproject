const { Schema, model } = require('../connection');

const petSchema = new Schema({
    name: { type: String, required: true },
    category : { type : String, required: true},
    age: { type: Number, required: true },
    breed : {type: String},
    detail : {type: String},
    adoptedin: { type: Date, default: Date.now }
});

module.exports = model('pet', petSchema);