console.log ("hey!  how are you !?");
var hello={
	name: "mando",
	age: "why do you care"
}
console.log(hello.name);
var a = Object.keys(hello)
console.log(a)
a.forEach(function(i){
	console.log(i +" is "+hello[i] )
})
