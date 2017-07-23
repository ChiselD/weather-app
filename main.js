function getWeather() {
	//
}

if ("geolocation" in navigator) {
	console.log("geolocation is available!");
	navigator.geolocation.getCurrentPosition(getWeather);
} else {
	console.log("geolocation is not available :(");
}