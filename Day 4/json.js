var req = require ('request')

req('https://api.exchangeratesapi.io/latest', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body).rates.INR); // Print the HTML for the Google homepage.
});