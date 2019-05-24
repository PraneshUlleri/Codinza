var telegram = require('telegram-bot-api');
var file = require('fs');
var findInFiles = require('find-in-files');


var api = new telegram({
        token: '872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA',
        updates:{enabled:true}
});


api.on('message',function(a){

console.log(a.text);

if(a.text=="hi")
api.sendMessage({
	chat_id: a.chat.id,
 	text:"hello"
})
file.appendFile("temp.txt", a.text+ "|-| \n", (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});

if(a.text=="search")
api.sendMessage({
	chat_id: a.chat.id,
 	text:"pls tell what to search"

})
});
