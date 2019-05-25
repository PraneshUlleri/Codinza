var mongojs = require ('mongojs')
var telegram = require('telegram-bot-api');
var db = mongojs('mongodb://pi:abc123321@cluster0-shard-00-00-ccqn3.mongodb.net:27017/Pi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['Pi'])
var api = new telegram({
        token: '872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA',
        updates:{enabled:true}
});


api.on('message',function(a){

console.log(a.text);
var chatdetails ={
    chat:a.text
} 


// if(a.text=="hi")
// api.sendMessage({
// 	chat_id: a.chat.id,
//  	text:"hello"
// })

// db.Pi.insert(chatdetails, function(err,data ){
// if (err){
// console.log(err)}
// else{
// console.log(data +" is inserted" )
// }})


var search={
	name:1
}
db.Pi.find(search,function(err,data){ 
if (data.length>0)
console.log(1 +" search" )

})


});
