$(document).ready(function() {
  let myLat;
  let myLon;
  let x = navigator.geolocation;
  let position = x.getCurrentPosition(success, failure);
});

function failure(position) {
  $("#lat").text("Attempt to get coordinates failed.");
}

function success(position) {
  // define variables to represent user's lat & lon
  myLat = Math.round(position.coords.latitude);
	myLon = Math.round(position.coords.longitude);
  // insert variables into corresponding HTML paragraphs // TEST CODE
	$("#lat").html(myLat); // TEST CODE
	$("#lon").html(myLon); // TEST CODE
}

// Create XHR object
let myrequest = new XMLHttpRequest();

// Create callback function
myrequest.onreadystatechange = function() {
  if (myrequest.readyState === 4) {
    document.getElementById('destination').innerHTML = myrequest.responseText;
  }
}

// Create variable to hold personalized URL
let weatherAPI = "https://fcc-weather-api.glitch.me/";

// Open a request
myrequest.open("GET", weatherAPI);

// Send the request
myrequest.send();

// function showWeather(lat, lon) {
//   const weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat + "/";
//   console.log("weatherAPI is: " + weatherAPI); // TEST
// };