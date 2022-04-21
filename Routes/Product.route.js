const express = require('express');
const router = express.Router();



const ProductController = require('../Controllers/Product.Colntroller');

// get all products
router.get('/', ProductController.getAllProducts);
// crete product
router.post('/',ProductController.CreateProduct);
// get product by id
router.get('/:id', ProductController.findProductById);
//update product by id
router.patch('/:id', ProductController.UpdateProduct);


module.exports = router;