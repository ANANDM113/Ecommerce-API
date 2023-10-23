const express   =   require('express');

const router    =   express.Router();

const productController =   require('../controllers/products_controller');

router.get('/',productController.displayProducts);
router.post('/create',productController.createProducts);
router.delete('/:id',productController.deleteProduct);
router.post('/:id/update_quantity',productController.updateProduct)

module.exports  =   router;