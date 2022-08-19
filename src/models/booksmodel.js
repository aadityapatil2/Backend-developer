const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

const booksSchema = new mongoose.Schema({
    name: String,
    // author_id: {
    //     type: ObjectId,
    //     ref: 'Author'
    // },
    price: Number,
    ratings: Number,

}, { timestamps: true });

module.exports = mongoose.model('b', booksSchema);