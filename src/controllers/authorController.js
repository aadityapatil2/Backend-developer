const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}


const updateprice = async function(req,res){
    const newprice = await AuthorModel.find().updateMany({rating : {$gt : 3.5 }},{$set :{age : (age+10)}})
    res.send({data: newprice})
}
module.exports.createAuthor= createAuthor
module.exports.updateprice = updateprice
