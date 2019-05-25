const TelegramBot = require('node-telegram-bot-api');
 var telegram = require('telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = '872363712:AAG_QyQauhEmIo6Q2N50YrSCtuExT11y9JA';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 var api = new telegram({
    token: token,
    updates: {
                enabled: true
             }
});
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
 
bot.onText(/\/news (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  const resp = 'news is out  \n ddfedcf \n fcfe shit just got real bitch'; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
 



// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
 if (msg=="hi"){
const url = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjqsPDL4bTiAhUHKY8KHWqqARAQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fhi.org%252Fen%252Fmaking-of-hi-campaign%26psig%3DAOvVaw1bgH186DIvjxGyCt5VfxWN%26ust%3D1558807735644786&psig=AOvVaw1bgH186DIvjxGyCt5VfxWN&ust=1558807735644786';
api.sendPhoto({
    chat_id : chatId,
    caption: 'This is my test image',
    photo: url//replace your image url here
})
 }
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'hi');
});