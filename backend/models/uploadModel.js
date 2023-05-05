const mongoose = require('mongoose');

// schema describing a post in db
const uploadSchema = new mongoose.Schema(
    {
        user: { type: String, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        imagepath: { type: String, required: true }, 
        location: { type: String, required: true }, // city, state, country?
        date: { type: Date, required: true },
    },
    {
        timestamps: true
    },
    { collection: 'uploads' }
);

const model = mongoose.model('post', uploadSchema);

module.exports = model;