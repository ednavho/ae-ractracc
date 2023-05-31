const mongoose = require('mongoose');

// schema describing auth token in db
const tokenSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'user',
        },
        token: { type: String, required: true },
    },
    { collection: 'tokens' }
);

const model = mongoose.model('token', tokenSchema);

module.exports = model;