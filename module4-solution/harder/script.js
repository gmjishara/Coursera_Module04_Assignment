//main function is here
(function greeting() {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (person in names) {
    if (names[person].charAt(0).toLocaleLowerCase() === "j") {
      byeSpeaker.speak(names[person]);
    } else {
      helloSpeaker.speak(names[person]);
    }
  }
})();
