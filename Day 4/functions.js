var request = require('request')
var telegram = require ('telegram-bot-api')



var api = new telegram({ 
	token:'872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA',
 	updates:{
 		enabled :true
 			}
  });

api.on('message',function(msg){
	var str = msg.text.split(" ")
	base=str[0]
	country=str[1]
	request('https://api.exchangeratesapi.io/latest?base='+base, function(error, response, body) {
	    
	    amount=JSON.parse(body).rates[country]
	    	console.log(amount)
	    api.sendMessage({
		    chat_id: msg.chat.id,
	 		text: "*1 "+base+"* equals *"+amount+" "+country+"*"
	  			 
		})
	})
})
