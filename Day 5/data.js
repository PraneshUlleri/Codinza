var express= require('express')
var a= require('fs')
var mongojs= require('mongojs')


var db = mongojs('mongodb://pi:abc123321@cluster0-shard-00-00-ccqn3.mongodb.net:27017/Pi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['Pi'])

var app = express()
app.use(express.static('frontend'))
app.get('/home',function (req, res) {
	res.send("HI ! WELCOME to PI's World")
		

		
})

app.get('/home/:name',function (req, res) {
	res.send("HI "+req.params.name+"! WELCOME to PI's World")
	a.readFile('textfile.txt',function(a,b){
			res.send(b.toString())
		})
})

app.get('/search/:name',function (req, res) {
	//res.send("We searched your name in the database")
	
		var usrname=req.params.name
		var search={Username:usrname}
		db.Pi.find(search, function(err, data) {
			if (data.length>0){
				res.send("Found It ")
			}
			else{
				res.send("Ah' I dont remember you here")
			}
		})


	// a.readFile('textfile.txt',function(a,b){
	// 		res.send(b.toString())
	// 	})
})
app.get('/enter/:name',function (req, res) {
	res.send("We will enter your name in the database")
			var dataname = { Username:req.params.name}
		db.Pi.insert(dataname, function(err,data ){
		if (err){
		console.log(err)}
		else{
		console.log(dataname +" is inserted" )
		}
		})

	// a.readFile('textfile.txt',function(a,b){
	// 		res.send(b.toString())
	// 	})
})


app.get('/login',function (req, res) {
		res.sendFile(__dirname+"/frontend/project1.html")
})

app.get('/loginsubmit',function (req, res) {
		var pas=req.query.pas
		var usr=req.query.usr
})

app.get('/login/err',function (req, res) {
	res.send("The  credentials are wrong")
})
app.get('/login/sucess',function (req, res) {
	res.send("Sucess!")
})
app.get('/signup',function (req, res) {
		res.sendFile(__dirname+"/frontend/project2.html")
})

app.get('/signupsubmit',function (req, res) {
		var details={
					 nam: req.query.nam,
					 ema: req.query.ema,
					 pas: req.query.pas,
        			 pho: req.query.pho,
					 gen: req.query.gen,
					 agr: req.query.agr
		}

		var search={ema:req.query.ema}

		db.Pi.insert(details, function(err,data ){
		if (err){
		console.log(err)}
		else{
		console.log(dataname +" is inserted" )
		}
		})

		db.Pi.find(search, function(err, data) {
			if (data.length>0){
				res.send("Already Signed up using this email ")
			}
			else{
				res.send("SignedIn!")
			}
		})
		
		
})


app.get('/signup/err',function (req, res) {
	res.send("signup failed!")
})
app.get('/signup/sucess',function (req, res) {
	res.send("Sucess!")
})

app.listen(8080, function(){
console.log("here")
})