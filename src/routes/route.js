const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const coiwnController = require("../controllers/cowincontroller")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/state",coiwnController.getstate)
router.get("/cowin/distric/:stateId",coiwnController.getdistrict)
router.get("/cowin/Bypin",coiwnController.getBypin)
router.get("/cowin/ByDist",coiwnController.getBydist)










router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",  userController.getUserData)
router.get("/users/:userId", middleware.authenticate, userController.getUserData)

router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)

router.delete('/users/:userId', userController.d)

module.exports = router;