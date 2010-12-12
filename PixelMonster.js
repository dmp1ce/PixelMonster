/* Main file for PixelMonster game. */

// Load additional scripts
loadScript('input.js');
loadScript('vector.js');
loadScript('monster.js');
loadScript('gameBoard.js');
loadScript('draw.js');

// Global game variables
var context;

// Global function calls
setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

window.addEventListener('load', function () {
  // Get the canvas element.
  var elem = document.getElementById('gameCanvas');
  if (!elem || !elem.getContext) {
    return;
  }

  // Get the canvas 2d context.
  context = elem.getContext('2d');
  if (!context) {
    return;
  }
  
  // Set the default location of pixelMonster
  pixelMonster.location.x = 150;
  pixelMonster.location.y = 150;
  
  // Setup the game board
  gameBoard.size.x = 1000;
  gameBoard.size.y = 1000;
  gameBoard.color = '#b5b0b0';
  
}, false);

// Called on every 'tick' of the game
function onTimerTick() {
  
  // Change state of game
  // if keys are pressed then move
  if(input.isKeyDown(KEYS.LEFT_ARROW) == true) {
    pixelMonster.location.x = pixelMonster.location.x - 1;
  }
  
  if(input.isKeyDown(KEYS.RIGHT_ARROW) == true) {
    pixelMonster.location.x = pixelMonster.location.x + 1;
  }
  
  if(input.isKeyDown(KEYS.DOWN_ARROW) == true) {
    pixelMonster.location.y = pixelMonster.location.y + 1;
  }
  
  if(input.isKeyDown(KEYS.UP_ARROW) == true) {
    pixelMonster.location.y = pixelMonster.location.y - 1;
  }
  
  // Clear scene
  context.clearRect(0,0,gameBoard.size.x,gameBoard.size.y); // clear canvas
  
  // Draw background
  context.fillStyle = gameBoard.color;
  context.fillRect(0, 0, gameBoard.size.x, gameBoard.size.y);
  
  // Draw pixelMonster
  pixelMonster.draw();
}

function loadScript(url, callback)
{
    // adding the script tag to the head as suggested before
   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= url;

   // then bind the event to the callback function 
   // there are several events for cross browser compatibility
   script.onreadystatechange = callback;
   script.onload = callback

   // fire the loading
   head.appendChild(script);
}