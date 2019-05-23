var a = require('fs')
a.readFile('file.txt',function(a,b){

	if (a){
		console.log(a)
		}
	else {
			console.log(b.toString())
		}
})
