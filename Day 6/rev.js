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
		res.sendFile(__dirname+"/frontend/login.html")
})

app.get('/loginsubmit',function (req, res) {
		var logcheck={ 
		 nam:req.query.nam}
		 var all={
 nam:req.query.nam,
 pas:req.query.pas
		 }

		db.Pi.find(logcheck, function(err, data) {
			if (data.length>0){
				app.set('view engine','ejs');
					db.Pi.find({},function(err,dat){

				res.render('dash',{ab:data,use:dat })

					})
			
			}
			else{
				res.send("no user Found!")
				
			}
		})


})

app.get('/signup',function (req, res) {
		res.sendFile(__dirname+"/frontend/signup.html")
})

app.get('/signupsubmit',function (req, res) {
		var details={
					 nam: req.query.nam,
					 ema: req.query.ema,
					 pas: req.query.pas,
        			
		}

		var search={ema:req.query.ema}
	db.Pi.find(search, function(err, data) {
			if (data.length>0){
				res.send("Already Signed up using this email ")
			}
			else{
				res.send("SignedIn!")
				db.Pi.insert(details, function(err,data ){
		if (err){
		console.log(err)}
		else{
		console.log(details +" is inserted" )
		}
		})
			}
		})
		
		

	
		
})



app.listen(8001, function(){
console.log("here")
})