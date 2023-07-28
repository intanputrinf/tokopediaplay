const express = require('express');
const productController = require('../controllers/product.controller');

// Implement routes for product...
const router = express.Router();

router.post('/products', commentController.createProduct);
router.get('/products/:videoId', commentController.getProductsByVideoId);

module.exports = router;