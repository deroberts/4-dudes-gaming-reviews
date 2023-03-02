const {Schema} = require('mongoose');

const platfomSchema = new Schema({
    platformName: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = platfomSchema;