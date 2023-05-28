const express = require("express");
const router = express.Router();
const multer = require("multer");


// controllers
const { createUpload, getUploads, getFeed, getCount, deleteUpload } = require('../controllers/uploadController');

// middleware
const { authenticateToken } = require('../middleware/userAuth');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/'); // Specify the folder where you want to store the images
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Generate a unique filename
    },
});
  
const upload = multer({ storage: storage });

// routes
router.post('/createUpload', upload.single('image'), createUpload);
router.get('/getUploads', authenticateToken, getUploads);
router.get('/getFeed', getFeed);
router.get('/getCount', getCount);
router.delete('/deleteUpload', deleteUpload);


module.exports = router;