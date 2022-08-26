const productModel = require('../models/productModel')

const createProduct = async function (req, res) {
    const data = req.body
    let allproduct = await productModel.create(data)
    res.send({ data: allproduct, status: true })
}

module.exports.createProduct = createProduct