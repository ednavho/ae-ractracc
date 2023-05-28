const express = require("express");
const router = express.Router();

// controllers
const { registerUser, loginUser, verifyToken, getEveryone, getWho, getUsername } = require('../controllers/userController');

// middleware
const { authenticateToken } = require('../middleware/userAuth');

// routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify', verifyToken);
router.get('/everyone', getEveryone);
router.get('/whoami', authenticateToken, getWho);
router.get('/getUsername/:id', getUsername)

module.exports = router;