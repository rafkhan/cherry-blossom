window.onload = function() {
  'use strict';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*
  var haxNouns = ['hacker', 'developer',
      'programmer', 'nerd', 'code monkey',
      'wannabe designer', 'techno lover',
      'music listener'];

  var haxText = document.getElementById('hax');
  var lastRand = 0;

  setInterval(function() {
    var newRand = getRandomInt(0, haxNouns.length - 1);
    while(newRand === lastRand) {
      newRand = getRandomInt(0, haxNouns.length - 1);
    }
    haxText.innerHTML = haxNouns[newRand] + ',';
  }, 2000);
  */
};
