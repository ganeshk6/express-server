const path = require('path')

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
}

const addProduct = (req, res) =>{
    const { name } = req.body;
    console.log("Value returned from post "+name);
    res.json({value: name});
}

module.exports = {
    getAllProducts,
    addProduct
}