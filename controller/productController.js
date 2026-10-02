const path = require('path')

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
}

module.exports = {
    getAllProducts
}