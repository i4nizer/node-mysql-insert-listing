const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')



router.get('/', productController.view)
router.get('/product/view', productController.view)
router.get('/product/add', productController.addPage)
router.post('/product/add', productController.add)



module.exports = router