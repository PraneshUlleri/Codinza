var ab = require ('fs')
var res= ab.readFileSync('file.txt')
console.log (res.toString())
