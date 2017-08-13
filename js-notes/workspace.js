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

function success(position) {
	let myLat = Math.round(position.coords.latitude);
	let myLong = Math.round(position.coords.longitude);
	$("#lat").html(myLat);
	$("#long").html(myLong);

	const weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=:" + myLong + "&lat=:" + myLat + "/";
	console.log(weatherAPI); // TEST

	console.log("myLat is: " + myLat); // TEST
	console.log("myLong is: " + myLong); // TEST

	const data = {
		"weather": weatherAPI.weather[0].main,
		"description": weatherAPI.weather[0].description,
		"icon": weatherAPI.weather[0].icon,
		"temp": weatherAPI.main.temp
	};
	function showWeather() {
		$("#info").text(data.temp);
	}
  	$.getJSON(weatherAPI, data, showWeather);
}

function failure(position) {
	$("#info").html("<p>Attempt to get coordinates failed :(</p>");
}

$(document).ready(function() {
	let x = navigator.geolocation;
	x.getCurrentPosition(success, failure);
});

//extra note to self:
  	// $.getJSON(weatherAPI, function(json){
  	// 	let yourTemp = json.main.temp;
   //  	// $(".info").html(yourTemp);
   //  	console.log(yourTemp);
  	// });


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