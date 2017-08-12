$(document).ready(function() {
  let myLat;
  let myLon;
  let myRequest;
  let x = navigator.geolocation;
  let position = x.getCurrentPosition(success, failure);
});

function failure(position) {
  $("#lat").text("Attempt to get coordinates failed.");
}

// Send the request (inside a function, in order to engage the button)
function sendAJAX() {
  myRequest.send();
}

function success(position) {
  // define variables to represent user's lat & lon
  myLat = Math.round(position.coords.latitude);
	myLon = Math.round(position.coords.longitude);
  // insert variables into corresponding HTML paragraphs // TEST CODE
	$("#lat").html(myLat); // TEST CODE
	$("#lon").html(myLon); // TEST CODE


  // Create XHR object
  myRequest = new XMLHttpRequest();

  // Create callback function
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
      document.getElementById('destination').innerHTML = myRequest.responseText;
    }
  }

  // Create variable to hold personalized URL
  let weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=" + myLon + "&lat=" + myLat + "/";

  // Open a request
  myRequest.open("GET", weatherAPI);

  // TEST CODE
  console.log(weatherAPI);

}


// function showWeather(lat, lon) {
//   const weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat + "/";
//   console.log("weatherAPI is: " + weatherAPI); // TEST
// };



//////