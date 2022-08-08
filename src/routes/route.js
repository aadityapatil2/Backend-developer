const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')
// const getlogger = require('../logger/logger')
// const dateprint = require('../util/helper')
// const monthprint = require('../util/helper')
// const getinfo = require('../util/helper')
// const gettrim = require('../validetor/formatter')
// const getlower = require('../validetor/formatter')
// const getupper = require('../validetor/formatter')
const router = express.Router();
const month = ["jan","feb","march","apr","may","jun","jul","aug","sept","oct","nov","des"]
const odd = [1,3,5,7,9,11,13,15,17,19]
const pair = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
const dublicatenumber = ([1],[1,2],[1,2,3],[1,2,3,4],[1,2,3,4,5])


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)

console.log(lodash.chunk(month ,4))
console.log(lodash.tail(odd ,9))
console.log(lodash.fromPairs(pair))
console.log(lodash.union(dublicatenumber))
    // abc.printName()

    // getlogger.Wellcome()

    // dateprint.printdate()

    // monthprint.printmonth()

    // getinfo.getBetchinfo()

    // gettrim.trim()

    // getlower.LowerCase()

    // getupper.uppercase()

    res.send('Assignment of Nodejs!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason