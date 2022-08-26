const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const productSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    productId: {
        type: ObjectId,
        ref: 'Product'
    },
    amount: Number,
    isFreeAppUser: Boolean
}, { timestamps: true });

module.exports = mongoose.model('oredr', productSchema) //users
