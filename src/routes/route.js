const express = require('express');
const lodash = require('lodash')

const router = express.Router();

// =====================POST++++++++++++++++++++++++++

router.post('/post-me', function (req, res) {
  let id = req.body.name
  let password = req.body.password
  console.log(id, password)
  console.log(req.body)
  // res.send(req.body)
  res.send(id)

})


router.post('/post-me-1', function (req, res) {
  let arr = ["aaditya", 22]
  let p = req.body.element
  arr.push(p)
  res.send({ msg: arr, status: true })

})

let players =
  [
    {
      "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalandhar",
      "sports": [
        "swimming"
      ]
    },
    {
      "name": "gopal",
      "dob": "1/09/1995",
      "gender": "male",
      "city": "delhi",
      "sports": [
        "soccer"
      ],
    },
    {
      "name": "lokesh",
      "dob": "1/1/1990",
      "gender": "male",
      "city": "mumbai",
      "sports": [
        "soccer"
      ],
    },
  ]



router.post('/players', function (req, res) {
  //LOGIC WILL COME HERE
  let newplayer = req.body.player
  let n = newplayer.name

  for (i = 0; i < players.length; i++) {
    if (players[i].name == n) {
      return res.send("Sorry, This name is already exist!")
    }
  }
  players.push(newplayer)
  res.send({players})

})



module.exports = router;
// adding this comment for no reason

