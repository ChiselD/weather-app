// let temperature;
// let weatherDesc;
// let youAreHere;

// let latitude = position.coords.latitude;
// let longitude = position.coords.longitude;

// function getWeather() {
// 	//
// }

// if ("geolocation" in navigator) {
// 	console.log("geolocation is available!");
// 	navigator.geolocation.getCurrentPosition(function(position) {
// 		getWeather(position.coords.latitude, position.coords.longitude);
// 	});
// 	console.log("Lat is: " + latitude + ", lon is: " + longitude);
// } else {
// 	console.log("geolocation is not available :(");
// }

// $.getJSON("https://fcc-weather-api.glitch.me/", function(json) {
// 	$("#info").html(JSON.stringify(json));
// });

$(document).ready(function() {

  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  $.getJSON(weatherAPI, data, showWeather);
});

// // This JSON object is here merely for my visual reference!
// { "coord": {
//     "lon":159,
//     "lat":35
//   },
//   "weather": [
//     { "id":500,
//     "main":"Rain",
//     "description":"light rain",
//     "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" }
//   ],
//   "base": "stations",
//   "main": {
//   	"temp":22.59,
//   	"pressure":1027.45,
//   	"humidity":100,
//   	"temp_min":22.59,
//   	"temp_max":22.59,
//   	"sea_level":1027.47,
//   	"grnd_level":1027.45
//   },
//   "wind": {
//   	"speed":8.12,
//   	"deg":246.503
//   },
//   "rain": {
//   	"3h":0.45
//   },
//   "clouds": {
//   	"all":92
//   },
//   "dt":1499521932,
//   "sys": {
//   	"message":0.0034,
//   	"sunrise":1499451436,
//   	"sunset":1499503246
//   },
//   "id":0,
//   "name":"",
//   "cod":200
// }