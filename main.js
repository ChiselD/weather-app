$(document).ready(function() {
  let myLat;
  let myLon;
  let myRequest;
  let position = navigator.geolocation.getCurrentPosition(success, failure, {timeout: 10000});
});

function success(position) {

  // Define variables to represent user's lat & lon
  myLat = position.coords.latitude;
  myLon = position.coords.longitude;

  // Confirm that lat and lon were successfully identified // TEST CODE
  console.log("Your latitude is " + myLat + " and your longitude is " + myLon); // TEST CODE

  // Create variable to hold personalized URL for user
  let weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=" + myLon + "&lat=" + myLat;
  console.log("weatherAPI is: " + weatherAPI); // TEST CODE

  // Create XHR object
  myRequest = new XMLHttpRequest();

  // Create callback function
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
      document.getElementById('destination').innerHTML = myRequest.responseText;
    }
  }

  // Open a request
  myRequest.open("GET", weatherAPI);

  // Define showWeather function
  function showWeather(weatherReport) {
  	$("#location").text(weatherReport.name);
    $("#temperature").text(weatherReport.main.temp);
    $("#weather").text(weatherReport.weather[0].main);
    $("#detailed").text(weatherReport.weather[0].description);
  }
  // Get weather info as JSON
  $.getJSON(weatherAPI, showWeather);

}


// Send the request (inside a function, so that the code only runs once you click the button)
function sendAJAX() {
  myRequest.send();
}


// Function to run if coordinates could not be found
function failure(position) {
  $("#destination").text("Attempt to get coordinates failed.");
}



//////

// This JSON object is here merely for my own reference!

// {
// 	"coord": {
// 		"lon":-84,
// 		"lat":34
// 	},
// 	"weather":[{
// 		"id":802,
// 		"main":"Clouds",
// 		"description":"scattered clouds",
// 		"icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F03d.png?1499366020890"
// 	}],
// 	"base":"stations",
// 	"main":{
// 		"temp":31.3,
// 		"pressure":1015,
// 		"humidity":58,
// 		"temp_min":31,
// 		"temp_max":32
// 	},
// 	"visibility":16093,
// 	"wind":{
// 		"speed":2.6,
// 		"deg":300
// 	},
// 	"clouds":{
// 		"all":40
// 	},
// 	"dt":1502654280,
// 	"sys":{
// 		"type":1,
// 		"id":780,
// 		"message":0.0043,
// 		"country":"US",
// 		"sunrise":1502621817,
// 		"sunset":1502670226
// 	},
// 	"id":4205196,
// 	"name":"Lawrenceville",
// 	"cod":200
// }

//////