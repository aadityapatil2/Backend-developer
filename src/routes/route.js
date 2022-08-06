const express = require('express');
const abc = require('../introduction/intro')
const getlogger = require('../logger/logger')
const dateprint = require('../util/helper')
const monthprint = require('../util/helper')
const getinfo = require('../util/helper')
const gettrim = require('../validetor/formatter')
const getlower = require('../validetor/formatter')
const getupper = require('../validetor/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()

    getlogger.Wellcome()

    dateprint.printdate()

    monthprint.printmonth()

    getinfo.getBetchinfo()

    gettrim.trim()

    getlower.LowerCase()

    getupper.uppercase()

    res.send('Assignment of Nodejs!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason