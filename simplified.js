$(document).ready(function() {
  let myLat;
  let myLon;
  let myRequest;
  let x = navigator.geolocation;
  console.log(x);
  // let position = x.getCurrentPosition(success, failure);

  // Check to see if geolocation worked to get coordinates or not
  // if (success condition) {
  // 	success();
  // } else {
  // 	failure();
  // }
  success();
});

function success() {
	//
}