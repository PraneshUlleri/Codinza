var telegram = require('telegram-bot-api');
var req = require ('request')
var api = new telegram({
        token: '872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA',
        updates:{enabled:true}
});


api.on('message',function(a){

console.log(a.text);
var money= a.text

if(a.text=="hi")
api.sendMessage({
	chat_id: a.chat.id,
 	text:"hello"
})

if(a.text== "money"){
api.sendMessage({
	chat_id: a.chat.id,
 	text:"USD -> INR"
})
req('https://api.exchangeratesapi.io/latest?base=USD', function (error, response, body) {
api.sendMessage({
	chat_id: a.chat.id,
 	text: JSON.parse(body).rates.INR
  			 
})
})
}

})