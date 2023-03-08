const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    name: String,
    rating: Number,
    released: String,
});

const Game = model('Game', GameSchema);

module.exports = Game;