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
