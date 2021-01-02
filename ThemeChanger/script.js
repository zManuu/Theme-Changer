/*

  Colors:
  White: #E6E6E6
  Black: #1A1A1A

*/

function print(s) {
  console.log(s);
}

var currentTheme = 0;

// Example:
// #E6E6E6 -> "white"
// #1A1A1A -> "black"
var colors = ["#E6E6E6", "#1A1A1A"];

function nextTheme() {
  if (currentTheme == 0) {
    applyDark();
    currentTheme = 1;
  } else {
    applyLight();
    currentTheme = 0;
  }
}

function applyDark() {
  document.body.style.background = colors[1];

  var themeChanges = document.getElementsByClassName("themeChanger");
  for (var i = 0; i < themeChanges.length; i++) {
    var current = themeChanges[i];
    current.style.background = colors[1];
    current.style.color = colors[0];
  }
}

function applyLight() {
  document.body.style.background = colors[0];

  var themeChanges = document.getElementsByClassName("themeChanger");
  for (var i = 0; i < themeChanges.length; i++) {
    var current = themeChanges[i];
    current.style.background = colors[0];
    current.style.color = colors[1];
  }
}

// Apply light theme at start
applyLight();
