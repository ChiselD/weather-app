$(document).ready(function() {
  let myLat;
  let myLon;
  let myRequest;
  let position = navigator.geolocation.getCurrentPosition(success, failure, {timeout: 10000});
});

function success(position) {

  // Define variables to represent user's lat & lon
  myLat = Math.round(position.coords.latitude);
  myLon = Math.round(position.coords.longitude);

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
  	$("#temperature").text(weatherReport.main.temp);
  	$("#weather").text(weatherReport.weather[0].main);
  }
  // Get weather info as JSON
  $.getJSON(weatherAPI, showWeather);

}

// Send the request (inside a function, so that the code only runs once you click the button)
function sendAJAX() {
	myRequest.send();
}

function failure(position) {
  $("#destination").text("Attempt to get coordinates failed.");
}