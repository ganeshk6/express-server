const express = require('express')
const router = express.Router()

router.post('/',(req, res, next)=>{
    res.send(`A new product has been added.`)
})
router.get('/', (req, res, next)=>{
    res.send(`Here is the list of all products.`)
})

module.exports = router