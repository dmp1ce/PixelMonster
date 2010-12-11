/* Main file for PixelMonster game. */

loadScript('input.js');

// Global game variables
var context;
var pixelMonsterLocation = new Object;
pixelMonsterLocation.x = 150;
pixelMonsterLocation.y = 150;

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
  
}, false);


// Simply draw a pixel to the screen
function drawPixel(location, color) {
  // Default pixel color is blue
   if (typeof color == "undefined") {
    color = "BLUE";
  }
  
  context.fillStyle = color;
  context.fillRect(location[0], location[1], 1, 1);
}

// Called on every 'tick' of the game
function onTimerTick() {
  
  // Change state of game
  // if keys are pressed then move
  if(input.keysDown[37] == true) {
    pixelMonsterLocation.x = pixelMonsterLocation.x - 1;
  }
  
  if(input.keysDown[39] == true) {
    pixelMonsterLocation.x = pixelMonsterLocation.x + 1;
  }
  
  if(input.keysDown[40] == true) {
    pixelMonsterLocation.y = pixelMonsterLocation.y + 1;
  }
  
  if(input.keysDown[38] == true) {
    pixelMonsterLocation.y = pixelMonsterLocation.y - 1;
  }
  
  // Clear scene
  context.clearRect(0,0,1000,1000); // clear canvas
  
  // Draw background
  context.fillStyle = '#b5b0b0';
  context.fillRect(0, 0, 1000, 1000);
  
  // Draw pixels
  drawPixel([pixelMonsterLocation.x, pixelMonsterLocation.y]);
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