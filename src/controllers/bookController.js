const { count } = require("console")
const BookModel = require("../models/bookModel")


// Task 1- Create a collection of 11+ books.
const createBook = async function (req, res) {
    const book = req.body
    let savedBook = await BookModel.create(book)
    res.send({ msg: savedBook })
}

// Task 2- return all the bookName and authorName only.
const allBooksList = async function (req, res) {
    let list = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}

// Task 3- Return all those bookName which published in a inputed year
const yearDetails = async function (req, res) {
    let yearList = await BookModel.find({ year: req.body.year }).select({ bookName: 1, _id: 0 })
    res.send(yearList)
}

// Task 4- send the reponse after satisfying the any random condition
const particularBooks = async function (req, res) {

    let specificBooks = await BookModel.find(req.body)
    res.send({ msg: specificBooks })
}

// Task 5- send bookName of those book only which have indianprice of 100 inr or 200 inr or 500 inr.
const priceDetails = async function (req, res) {
    let list = await BookModel.find({ "prices.indianPrice": { $in: ["100", "200", "500"] } }).select({ bookName: 1, _id: 0 })
    res.send({ msg: list })
}

//Send the details of those books which are in stock or having more than 500 pags.
const randomBooks = async function (req, res) {
    let allBooks = await BookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}

const getBooksData = async function (req, res) {

    // let allBooks = await BookModel.find( { isPublished: false}).select({ bookName: 1, authorName: 1, _id: 0 })//.count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND

    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3).select({bookName : 1})

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 

    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }

    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})

    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("62fd08b31216a9938f1e960e") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 



    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks = await BookModel.update(
    //     { authorName: "Aaditya" },
    //     { $set: { authorName: "Aaditya patil" } }
    // )





    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 

    // ASYNC AWAIT

    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // // WHEN AWAIT IS USED: - database + axios
    // //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    // console.log(allBooks)
    // let b = 14
    // b= b+ 10
    // console.log(b)
    res.send({ msg: allBooks })
}


module.exports.createBook = createBook//1
module.exports.allBooksList = allBooksList //2
module.exports.yearDetails = yearDetails //3
module.exports.particularBooks = particularBooks //4
module.exports.priceDetails = priceDetails //5
module.exports.randomBooks = randomBooks //6
module.exports.getBooksData = getBooksData