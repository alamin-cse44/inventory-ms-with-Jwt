const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");
const uploader = require('../middleware/uploader');
const verifyToken = require('../middleware/verifyToken');
const authorization = require('../middleware/authorization');

router.post("/file-upload", uploader.single("image"), productController.fileUpload)
// router.post("/file-upload", uploader.array("image"), productController.fileUpload)

router.route('/bulk-update')
.patch(productController.bulkUpdateProduct)

/**
 * .patch(verifyToken, authorization('admin', 'store-manager') ,productController.bulkUpdateProduct)
 */

router.route('/bulk-delete')
.delete(productController.bulkDeleteProduct)

router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)

/** 
 * post(verifyToken, productController.createProduct)
 */


router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct)


module.exports = router;