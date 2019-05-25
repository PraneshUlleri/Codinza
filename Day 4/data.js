var mongojs = require ('mongojs')
var db = mongojs('mongodb://pi:abc123321@cluster0-shard-00-00-ccqn3.mongodb.net:27017/Pi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['Pi'])
var school = { class: "X ",
				section: "A",
				}
db.Pi.insert(school, function(err,data ){
if (err){
console.log(err)}
else{
console.log(data +" is inserted" )
}
})
