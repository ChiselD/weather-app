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

// function to get 'weather' data from JSON object and show it on the page
function displayWeather() {
  $("#weather").html(data.weather);
}


function success(position) {
  // define variables to represent user's lat & lon
  myLat = Math.round(position.coords.latitude);
	myLon = Math.round(position.coords.longitude);
  // insert variables into corresponding HTML paragraphs // TEST CODE
	$("#lat").html(myLat); // TEST CODE
	$("#lon").html(myLon); // TEST CODE

  // Now send received coords in order to get weather info!
  // showWeather(myLat, myLon);
  // displayWeather();

  const data = {
    "weather": weatherAPI.weather[0].main,
    "description": weatherAPI.weather[0].description,
    "icon": weatherAPI.weather[0].icon,
    "temp": weatherAPI.main.temp
  };
}


function showWeather(lat, lon) {
  // Create XHR object
  myRequest = new XMLHttpRequest();

  // Create callback function
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
      document.getElementById('destination').innerHTML = myRequest.responseText;
    }
  }

  // Create variable to hold personalized URL for user
  let weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;

  // Open a request
  myRequest.open("GET", weatherAPI);

  // TEST CODE
  console.log(weatherAPI);
};


// Send the request (inside a function, so that the code only runs once you click the button)
function sendAJAX() {
  myRequest.send();
}



//////