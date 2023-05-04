const express = require("express");
const router = express.Router();

// controllers
const { createUpload, getUploads, deleteUpload } = require('../controllers/uploadController');

// middleware
const { authenticateToken } = require('../middleware/userAuth');

// routes
router.post('/createUpload', createUpload);
router.get('/getUploads', authenticateToken, getUploads);
router.delete('/deleteUpload', deleteUpload);

module.exports = router;