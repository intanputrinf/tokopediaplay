const express = require('express');
const videoController = require('../controllers/video.controller');

// Implement routes for video...
const router = express.Router();

router.post('/Videos', commentController.createVideo);
router.get('/Videos/:videoId', commentController.getVideosByVideoId);

module.exports = router;