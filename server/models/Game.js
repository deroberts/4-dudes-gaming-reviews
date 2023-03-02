const {Schema} = require('mongoose');

const GameSchema = new Schema({
    gameTitle: {
        type: String,
        required: true,
        trim: true,
    },
});