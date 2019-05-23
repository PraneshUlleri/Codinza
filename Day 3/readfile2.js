var am = require('fs')
 am.readFile('file.txt',function(a,b){
if (a){console.log (a) }
	else {console.log(b.toString())}

 })
 console.log('just a duplicate!')