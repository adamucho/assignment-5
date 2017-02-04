
$(document).ready(pageReady);

function pageReady() {
  $("#submit-btn").click(submitFunction);
  function submitFunction() {
    
    event.preventDefault();
var cityName=$("#city-type").val();

$("body").removeClass("nyc sf la austin sydney");

if (cityName == "Austin" || cityName == "ATX" || cityName == "atx") {
	$("body").addClass("austin");
}

if (cityName == "New York City" || cityName == "NYC" || cityName == "nyc" || cityName == "New York") {
	$("body").addClass("nyc");
}

if (cityName == "Sydney") {
	$("body").addClass("sydney");
}

if (cityName == "San Francisco" || cityName == "SF" || cityName == "sf") {
	$("body").addClass("sf");
}

if (cityName == "Los Angeles" || cityName == "LA" || cityName == "la") {
	$("body").addClass("la")
}

 }
 }
