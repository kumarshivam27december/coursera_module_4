// names.js
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  window.names = names;

})(window);

// speakHello.js
(function (window) {
  var helloSpeaker = {};

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

// speakGoodbye.js
(function (window) {
  var byeSpeaker = {};

  var speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);

// script.js
(function () {
  // Array of names
  var names = window.names;

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];

    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
      // If it does, print "Goodbye" + name to the console
      byeSpeaker.speak(name);
    } else {
      // If it doesn't, print "Hello" + name to the console
      helloSpeaker.speak(name);
    }
  }
})();


