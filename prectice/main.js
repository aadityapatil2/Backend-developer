const express = require('express');
const bodyParser = require('body-parser');
const aadi = require('./aaditya/aadi.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', aadi);

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});

