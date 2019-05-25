
var telegram = require('telegram-bot-api');
var request = require('request')            

var api = new telegram({
    token: '872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA',
    updates: {
                enabled: true
             }
});
api.on('message', function(message)
{
    var chat_id = message.chat.id;
    if (message.text=="hi"){
        api.sendPhoto({
            chat_id:message.chat.id ,
             caption: "Welcome to Pi News \nType > news < to see the options",
        
            photo: '/home/pranesh/Github/Codinza/Day\ 4/download.png'
           
           })
        console.log("pic sendPhoto")
    }
if(message.text=="news"){
 
var inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: 'TechCrunch',
                    callback_data: '1-1'
                },
                {
                    text: 'WallStreet',
                    callback_data: '1-2'
                }
            ],
            [
                {
                    text: 'Desi news',
                    callback_data: '2'
                }
            ]
        ]
    };

/*
| 1-1 | 1-2 |
|     2     |
*/

api.sendMessage({
        chat_id:message.chat.id,
        text: 'Click on buttons below',
        reply_markup: JSON.stringify(inlineKeyboard)
    })
  

//When user click on button, 'CallbackQuery' Object will be catch by code below
api.on('inline.callback.query', function(msg) {

    var data = msg.data;
     //Value from 'callback_data' field of clicked button
     if (data=="1-1"){

         api.sendMessage({
            chat_id:message.chat.id,
        text: 'TechCrunch News'
        })
     }
     if (data=="1-2"){
        api.sendMessage({
            chat_id:message.chat.id,
        text: 'WallStreet News'
        })
     }
     if (data=="2"){
        api.sendMessage({
                    chat_id:message.chat.id,
                text: 'Indian News'       
        })
        request('https://newsapi.org/v2/top-headlines?country=in&apiKey=910b63b94d064f158a405ed50f851775', function (error, response, body) {
                
                var min=0; 
                
           var obj=JSON.parse(body).articles
                     console.log(Object.keys(obj).length);
             var max=Object.keys(obj).length;
                var random =Math.floor(Math.random() * (+max - +min)) + +min; 
                api.sendMessage({
                    chat_id:message.chat.id,
                text: JSON.parse(body).articles[random].title       
                 })
               })
       
     }
     else {
        api.sendMessage({
            chat_id:message.chat.id,
        text: 'no idea man!'
        })
     }

    console.log("news on the floor");
})
}


});//api.on
