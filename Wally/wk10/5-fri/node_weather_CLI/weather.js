var request = require('request');

//  weather api key in .bashrc
var givenCity = process.argv[2];

url = "http://api.openweathermap.org/data/2.5/weather?q=" + givenCity + "&APPID=" + process.env.WEATHER_KEY;

request(url, function(error, response, body) {
  console.log(Math.round((JSON.parse(body).main.temp - 273.15)) + " deg C.");
});
