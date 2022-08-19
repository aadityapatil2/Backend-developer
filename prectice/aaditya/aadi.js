const express = require('express');
const router = express.Router();



let persons = [

    {
        nane: "PK",
        age: 10,
        votingStatus: false
    },

    {
        nane: "SK",
        age: 20,
        votingStatus: false
    },

    {
        nane: "AA",
        age: 70,
        votingStatus: false
    },

    {
        nane: "SC",
        age: 5,
        votingStatus: false
    },

    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.get("/test-query", function (req, res) {
    let newvoting = req.query.age
    let fn = persons.filter(ele => ele > newvoting)
        res.send({ data: fn, status: true })

})

// =====================================================================================
let n = [489, 65, 2, 1, 5, 66, 564, 7, 894, 654798, 518, 89798, 641, 69, 6, 1, 847, 84, 4]
router.get('/number/:input', function (req, res) {
    let data = req.params.input
    let fn = n.filter(ele => ele > data)
    res.send({ data: fn, status: true })
})


router.get('/query', function (req, res) {
    let data = req.query
    let sum1 = data.a
    let sum2 = data.b
    let sum = (sum1 +sum2)
    res.send({ data: sum , status: true })
})
module.exports = router;
