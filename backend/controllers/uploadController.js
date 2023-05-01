const jwt = require('jsonwebtoken');
const Upload = require('../models/uploadModel');
const User = require('../models/userModel');
require("dotenv").config();

// @desc    Create new post 
// @route   POST api/study/createUpload (FIX THIS)
const createUpload = async (req, res) => {
    const { userId, image, location, date} = req.body;

    try {
        const user = await User.findOne({ _id: userId });
        const upload = await Session.create({
            user: user.name,
            userId,
            image,
            location,
            date
        });
        console.log(upload);
        return res.status(201).json(upload);
    } catch (err) {
        return res.status(400).json({
            message: 'Error creating upload',
            error: err
        });
    }
}

// @desc    Get posts for logged in user (for web app)
// @route   GET api/study/getSessions (CHange this route)
const getUploads = async (req, res) => {
    try {
        let uploads = await Upload.find({ userId: req.user._id });
        uploads = uploads.sort((a, b) => b.start - a.start);
        const uploadsData = uploads.map((upload) => 
            ({
                img: upload.image, // fix this for formatting
                loc: upload.start,
                dat: upload.date,
            })
        );
        console.log(uploadsData);
        return res.status(200).json(uploadsData);
    } catch (err) {
        return res.status(404).json({
            message: 'Error fetching sessions',
            error: err
        });
    }
}

// @desc    Delete study session
// @route   DELETE api/study/deleteUpload
const deleteUpload = async (req, res) => {
    try {
        const upload = await Upload.findById(req.params.id);

        if (!upload) {
            return res.status(400).json({
                message: 'Upload not found',
            });
        }
        if (upload.user.toString() !== req.user._id) {
            return res.status(401).json({
                message: 'User not authorized',
            });
        }

        await upload.remove();
        return res.status(200).json({ id: req.params.id });
    } catch (err) {
        return res.status(400).json({
            message: 'Error deleting upload',
            error: err
        });
    }
}


module.exports = {
    createUpload,
    getUploads,
    deleteUpload
}