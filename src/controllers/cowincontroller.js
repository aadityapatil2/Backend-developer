const axios = require('axios')

let getstate = async function (req, res) {
    let option = {
        method: "get",
        url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states/'
    }
    let result = await axios(option)
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: data })
}


let getdistrict = async function (req, res) {
    let id = req.params.stateId

    let option = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
    }
    let result = await axios(option)
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: data })
}


let getBypin = async function (req, res) {
    let pin = req.query.pincode
    let date = req.query.date
    
    let option = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let result = await axios(option)
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: data })
}

let getBydist = async function (req, res) {
    let district = req.query.district_id
    let date = req.query.date
    
    let option = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    }
    let result = await axios(option)
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: data })
}
module.exports.getBydist = getBydist
module.exports.getBypin = getBypin
module.exports.getdistrict = getdistrict
module.exports.getstate = getstate
