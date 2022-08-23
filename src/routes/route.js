const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const authrController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuhor", authrController.createAuthor  )//1

router.post("/createBook", BookController.createBook  )//1

router.get("/getBooksData", BookController.getBooksData)//2

router.get("/updateBooks", BookController.updateBooks)//3

router.get("/findBooks", BookController.findBooks)//4

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;