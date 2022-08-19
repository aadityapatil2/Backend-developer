const booksmodel = require("../models/booksModel");
const { create } = require("../models/userModel");

const createBooks = async function (req,res){
    let data = req.body
    let createdata = await create(data)
    res.send({data : createdata, status:true})
}

module.exports.createBooks  = createBooks