/* Creates a framework for keeping track of inputs */

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
  
  this.setKeyUp = function(keyNum) {
    this.keysDown[keyNum] = false;
  }
  
  this.isKeyDown = function(keyNum) {
    if(this.keysDown[keyNum] == true) {
      return(true);  
    }
    return(false);
  }
  
}

function onKeyDown(event) {
  //console.log(event);
  input.setKeyDown(event.keyCode);
  
  // disable scroll bar for arrow keys
  if(event.keyCode == 36 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 40) {
    event.preventDefault();
  }
}

function onKeyUp(event) {
  input.setKeyUp(event.keyCode);
  
  // disable scroll bar for arrow keys
  if(event.keyCode == 36 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 40) {
    event.preventDefault();
  }
}