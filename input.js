/* Creates a framework for keeping track of inputs */

// Load additional scripts
loadScript('keys.js');

// Input listeners
window.addEventListener('keydown', onKeyDown, true);
window.addEventListener('keyup', onKeyUp, true);


var input = new function() {
  
  // Raw data on what keys are being press currently
  this.keysDown = [];
  
  /* Adds a key down */
  this.setKeyDown = function(keyNum) {
    this.keysDown[keyNum] = true;
  }
  
  /* Removes a key down state */
  this.setKeyUp = function(keyNum) {
    this.keysDown[keyNum] = false;
  }
  
  /* Determine if a key is down from the passed in key enum */
  this.isKeyDown = function(keyName) {
    if(this.keysDown[keyName.keyCode] == true) {
      return(true);
    }
    return(false);
  }
  
}

function onKeyDown(event) {
  //console.log(event);
  input.setKeyDown(event.keyCode);
  
  // disable scroll bar for arrow keys
  if(event.keyCode == KEYS.LEFT_ARROW.keyCode || event.keyCode == KEYS.RIGHT_ARROW.keyCode ||
     event.keyCode == KEYS.UP_ARROW.keyCode || event.keyCode == KEYS.DOWN_ARROW.keyCode) {
    event.preventDefault();
  }
}

function onKeyUp(event) {
  input.setKeyUp(event.keyCode);
  
  // disable scroll bar for arrow keys
  if(event.keyCode == KEYS.LEFT_ARROW.keyCode || event.keyCode == KEYS.RIGHT_ARROW.keyCode ||
     event.keyCode == KEYS.UP_ARROW.keyCode || event.keyCode == KEYS.DOWN_ARROW.keyCode) {
    event.preventDefault();
  }
}