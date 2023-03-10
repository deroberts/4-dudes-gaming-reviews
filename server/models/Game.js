const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    name: String,
    rating: Number,
    released: String,
});


module.exports = GameSchema;