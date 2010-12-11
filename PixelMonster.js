window.addEventListener('load', function () {
  // Get the canvas element.
  var elem = document.getElementById('gameCanvas');
  if (!elem || !elem.getContext) {
    return;
  }

  // Get the canvas 2d context.
  var context = elem.getContext('2d');
  if (!context) {
    return;
  }

  // Now you are done! Let's draw a blue rectangle.
  context.fillStyle = '#b5b0b0';
  context.fillRect(0, 0, 5000, 5000);
  
  
}, false);