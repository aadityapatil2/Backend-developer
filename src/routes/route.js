const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController = require ("../controllers/productcontroller")
const ordercontroller = require("../controllers/ordercontroller")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)
router.post("/createProduct", productController.createProduct)
router.post("/createProduct", productController.createProduct)
router.post("/createorder", ordercontroller.createorder)



// router.post("/createBook", BookController.createBook  )




// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {

//         res.send ("Please login or register")
//     }
// }


// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)





module.exports = router;