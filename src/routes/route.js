const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )//1

router.get("/getBooksData", BookController.getBooksData)

router.get("/allBooksList", BookController.allBooksList)//2

router.post("/yearDetails", BookController.yearDetails)//3

router.post("/particularBooks", BookController.particularBooks)//4

router.get("/priceDetails", BookController.priceDetails)//5

router.get("/randomBooks", BookController.randomBooks)//6



 


module.exports = router;