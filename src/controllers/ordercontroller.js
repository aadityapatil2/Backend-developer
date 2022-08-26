const orderModel = require('../models/orderModel')

const createorder = async function (req, res) {
    const data = req.body
    let allorder = orderModel.create(data)
    res.send({ data: allorder, status: true })

}

module.exports.createorder = createorder