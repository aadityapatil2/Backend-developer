const express = require('express');
const lodash = require('lodash')
const router = express.Router();



router.get('/movies', function (req, res) {
    let movies = ['KGF', 'RRR', 'Bahubali', 'Kesari', 'MS Dhoni']
    res.send(movies)
})


router.get('/movies/:indexNumber', function (req, res) {
    let requestParams = req.params
    let movie = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let movieName = requestParams.indexNumber
    let moviesnumber = movie[movieName]

    if (movieName <= 3) {
        res.send(moviesnumber)
    } else {
        res.send("It's not valid number")
    }

});

router.get('/films', function (req, res) {
    let films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    res.send(films)
})


router.get('/films/:filmld', function (req, res) {
    let RParams = req.params

    let films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    let filmName = RParams.filmld
    let g = filmName - 1
    let filmnumber = films[g]

    if ( g <= 3){
    res.send(filmnumber)
    }else{
        res.send("No movie exists with this id")
    }

})


module.exports = router;
// adding this comment for no reason