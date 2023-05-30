const express = require('express');

const productController = require('../controllers/productStore');

const router = express.Router();

router.get('/', productController.getProducts);

router.post('/', productController.postProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
