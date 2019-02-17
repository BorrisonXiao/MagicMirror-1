var locationNow = "Blacksburg";

$(document).ready(function() {
  navigator.mediaDevices.getUserMedia({
    audio: true
  });
});

if (annyang) {
  // Let's define a command.
  var commands = {
    hello: function() {
      alert("Hello world!");
    },
    "close the map": function() {
      var displayContainer = document.getElementsByClassName("mapContainer")[0];
      displayContainer.hidden = true;
    },
    "show me the map": function() {
      var displayContainer = document.getElementsByClassName("mapContainer")[0];
      displayContainer.hidden = false;
    },
    "weather in *location": function(location) {
      console.log(locationNow);
      locationNow = location;
      console.log(locationNow);
      refreshWeather();
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();

  annyang.addCallback("result", function(phrases) {
    console.log("I think the user said: ", phrases[0]);
    console.log("But then again, it could be any of the following: ", phrases);
  });
}

function refreshWeather() {
  console.log(locationNow);
  console.log("prcsss ");
  getWeather(locationNow);

}