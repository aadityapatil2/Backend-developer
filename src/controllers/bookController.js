const { count } = require("console")
const BookModel = require("../models/bookModel")


//task :1
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}


//task : 2
const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find({ name: "ho" })//.count()
    // console.log(allBooks)
    if (allBooks.length > 0) {
        res.send({ msg: allBooks, condition: true })
    } else {
        res.send({ msg: "No books found", condition: false })
    }
}


//task :3
const updateBooks = async function (req, res) {
    let allBooks = await BookModel.updateOne({ name: "Five Point Someone" }, { $set: { price: "100" } }// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
    )

    res.send({ msg: allBooks })
}


//taks:4
const findBooks = async function (req, res) {
    // let data = req.body 
    let allBooks = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})

    res.send({ msg: allBooks })
}





module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.findBooks = findBooks
