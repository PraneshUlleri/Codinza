var telegram = require('telegram-bot-api');

var api = new telegram({
        token: '872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA',
        updates:{enabled:true}
});


api.on('message',function(a){

console.log(a.text);

var msg =parseInt(a.txt);

console.log(typeof(a.text))
if(msg=="hi")
api.sendMessage({
	chat_id: a.chat.id,
 	text:"hello"
})



if(isNaN(msg)){
console.log("not number")
}
else
	var num=parseFloat(msg)
		if(num % 2 == 0)
		api.sendMessage({
			chat_id: a.chat.id,
		 	text:"Even"
		})
		else if (num % 1 == 0)
		api.sendMessage({
			chat_id: a.chat.id,
		 	text:"Odd"
		})

});






// api.getMe()
// .then(function(data)
// {
//     console.log(data);
// })
// .catch(function(err)
// {
//     console.log(err);
// });