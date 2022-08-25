const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { timeStamp } = require('console');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const requestListener = function (req, res) {
//   res.end("Your IP Addresss is: " + req.socket.localAddress);
// };

mongoose.connect("mongodb+srv://Backend-Developer:VOsRhEoMTbd0U6U6@cluster0.a48nwas.mongodb.net/AP@2000-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );
  
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
