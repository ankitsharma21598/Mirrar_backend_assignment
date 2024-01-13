const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to create a new product (POST request)
router.post('/products', productController.createProduct);

// Route to get a product by its ID (GET request)
router.get('/products/:id', productController.getProductById);

// Route to delete a product by its ID (DELETE request)
router.delete('/products/:id', productController.deleteProductById);

// Route to get all products (GET request)
router.get('/products', productController.getAllProducts);

// Route to search for products based on criteria (GET request with query parameters)
router.get('/search', productController.searchProducts);

// Other routes for CRUD operations...

// Export the router for use in other files
module.exports = router;
