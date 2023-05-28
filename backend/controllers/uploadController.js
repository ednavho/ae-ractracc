
const jwt = require('jsonwebtoken');
const Upload = require('../models/uploadModel');
const User = require('../models/userModel');
require("dotenv").config();

// @desc    Create new post 
// @route   POST api/uploads/createUpload (FIX THIS)
const createUpload = async (req, res) => {
    const { userId, imagepath, caption, location } = req.body;

    try {

        //res.send(file);
        // const user = await User.findOne({ _id: userId });
        const upload = await Upload.create({
            userId: userId,
            imagepath: imagepath,
            caption: caption,
            location: location,
        });
        return res.status(201).json({ upload });
    } catch (err) {
        return res.status(400).json({
            message: 'Error creating upload',
            error: err
        });
    }
}

// @desc    Get posts for logged in user (for web app)
// @route   GET api/uploads/getUploads
const getUploads = async (req, res) => {
    try {
        let uploads = await Upload.find({ userId: req.user._id })
            .sort({ created_at: -1 }); // Sort in descending order of 'created_at' field
            //.limit(req.limit); // Limit the results to 'limit' number of documents
        const uploadsData = uploads.map((upload) => 
            ({
                _id: upload.id,
                userId: upload.userId,
                imagepath: upload.imagepath, // backend/media/uploads/userID_postID.png
                caption: upload.caption,
                location: upload.location,
            })
        );
        return res.status(200).json(uploadsData);

    } catch (err) {
        return res.status(404).json({
            message: 'Error fetching uploads',
            error: err
        });
    }
}

// @desc    Get feed posts for logged in user (for web app)
// @route   GET api/uploads/getFeed
const getFeed = async (req, res) => {
    try {
        let uploads = await Upload.find({})
            .skip((req.page - 1) * req.limit)
            .limit(req.limit) // Limit the results to 'limit' number of documents
            .sort({ createdAt: -1 }); // Sort in ascending order of 'created_at'
        let uploadsData = uploads.map((upload) =>
            ({
                _id: upload.id,
                userId: upload.userId,
                imagepath: upload.imagepath,
                caption: upload.caption,
                location: upload.location,
            })
        );
        return res.status(200).json(uploadsData);
        
    } catch (err) {
        return res.status(404).json({
            message: 'Error fetching feed',
            error: err
        });
    }
}

const getCount = async (req, res) => {
    try {
        const count = await Upload.countDocuments();
        
        return res.status(200).json({count : count});
        
    } catch (err) {
        return res.status(404).json({
            message: 'Error fetching feed',
            error: err
        });
    }
}



// @desc    Delete study session
// @route   DELETE api/uploads/deleteUpload
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
    getFeed,
    getCount,
    deleteUpload
}