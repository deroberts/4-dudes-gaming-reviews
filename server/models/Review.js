const {Schema, model} = require('mongoose');
const Platform = require('./Platform');

const ReviewSchema = new Schema({
    reviewTitle: {
        type: String,
        required: true,
        trim: true,
    },
    reviewBody: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    },
    Platforms: [Platform]
})

const Review = model('Review', ReviewSchema);

module.exports = Review;