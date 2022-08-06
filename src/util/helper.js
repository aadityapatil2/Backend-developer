
let printdate = function(){
    console.log("Data :-",Date())
    
}


let printmonth = function(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let name = month[d.getMonth()];
    console.log("Month :- ",name)
    
    
}

let getBetchinfo = function(){
    console.log("Betch information :-","Plotunium, W3D5, the topic for today is Nodejs-intro")
}
module.exports.printdate = printdate
module.exports.printmonth = printmonth
module.exports.getBetchinfo = getBetchinfo