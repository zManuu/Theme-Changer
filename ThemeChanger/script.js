function print(s) { console.log(s); }

var currentTheme = 0;

function theme(bg, text, util, name) {
  this.bg = bg;
  this.text = text;
  this.util = util;
  this.name = name;
}

/*
  To create your own themes, you can use the constructor of 'theme'.
  The parameters are used like so:
  1.: background
  2.: text
  3.: util (hr, borderColor, ...)
  4.: name
*/

var themes = [
  new theme("#F5F5F5", "#303030", "#303030", "Light"),
  new theme("#303030", "#F5F5F5", "#F5F5F5", "Dark"),
  new theme("#3C3C3C", "#E39824", "#E0D1B9", "Darcula"),
  new theme("#1A2046", "#3DDFA4", "#A45F38", "Arc Dark"),
  new theme("#1B1B1B", "#3B6FD0", "#227A9D", "Darker"),
  new theme("#401C44", "#E1A7E7", "#E81B5F", "Palenight")
];

function nextTheme() {
  currentTheme++;
  if (currentTheme >= themes.length) {
    currentTheme = 0;
  }
  applyTheme(themes[currentTheme]);
}

function applyTheme(theme) {
  document.body.style.background = theme.bg;

  var changebleElements = document.getElementsByClassName("themeChanger");
  for (var i = 0; i < changebleElements.length; i++) {
    var current = changebleElements[i];
    current.style.background = theme.bg;
    current.style.color = theme.text;
    current.style.borderColor = theme.util;
    if (current.tagName == "HR") {
      current.style.background = theme.util;
    }
  }

  print("Successfully applied the \"" + theme.name + "\" theme!");
}

// Apply light theme at start
applyTheme(themes[0]);
