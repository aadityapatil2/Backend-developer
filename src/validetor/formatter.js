let trim = function(){
    const t = "   Function  up    ".trim()
    console.log("trin :-",t)
}

let LowerCase = function(){
    const l = " HELLO, My nmae is AADITYA PATIL".toLocaleLowerCase()
    console.log("lowercase:-",l)
}
let uppercase = function(){
    const l = " HELLO, My nmae is AADITYA PATIL".toLocaleUpperCase()
    console.log("uppercase:-",l)
}
module.exports.trim = trim
module.exports.LowerCase = LowerCase
module.exports.uppercase = uppercase
