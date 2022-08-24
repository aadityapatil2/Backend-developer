const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body

    if (!book.author) {
        return res.send({ status: false, msg: "author id is a mandatory field" })
    }

    let author = await authorModel.findById(book.author)
    if (!author) {
        return res.send({ status: false, msg: "Author id is not valid" })
    }

    if (!book.publisher) {
        return res.send({ status: false, msg: "Publisher id is a mandatory field" })
    }

    let publisher = await publisherModel.findById(book.publisher)
    if (!publisher) {
        return res.send({ status: false, msg: "Publisher id is not valid" })
    }

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

// 4. Write a GET api that fetches all the books along with their author details 
//(you have to populate for this) as well the publisher details (you have to populate for this) 

const getAllBooksWithCompleteDetails = async function (req, res) {
    let allBooks = await bookModel.find().populate('author publisher')
    res.send({ data: allBooks })

}

const updateSpecificBooks = async function (req, res) {
    //a)
    // get books by the publioshers - Penguin and HarperCollins
    let requiredPublishers =
        await publisherModel.find({ $or: [{ name: "Penguin" }, { name: "HarperCollins" }] }, { _id: 1 })
    //let books = await bookModel.find().populate('publisher')
    //for
    let requiredPublisherIds = []
    for (let i = 0; i < requiredPublishers.length; i++) {
        requiredPublisherIds.push(requiredPublishers[i]._id)
    }

    let updatedBooks = await bookModel.updateMany({ publisher: { $in: requiredPublisherIds } }, { isHardCover: true }, { new: true })
    res.send({ data: updatedBooks })
}

//
// const updateprice = async function(req,res){
    // const newprice = await bookModel.find({price : { $gt : 3.5}})
    // res.send({data: newprice})
// }

module.exports.createBook = createBook
module.exports.getAllBooksWithCompleteDetails = getAllBooksWithCompleteDetails
module.exports.updateSpecificBooks = updateSpecificBooks
