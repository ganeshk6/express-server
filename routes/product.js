const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.post('/',(req, res, next)=>{
    res.send(`A new product has been added.`)
})
router.get('/', productController.getAllProducts)

module.exports = router