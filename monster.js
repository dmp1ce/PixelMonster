/** source file for the pixel monster's data and methods.
 **/

var pixelMonster = new function() {
  this.location = new Vector();
  this.color = "BLUE";
  this.size = 4;
  
  this.speed = 2; // The rate of speed the pixelMonster has.  Rate = Pixels / tick
  
  // Uses the context variable from the main script
  this.draw = function() {
    drawPixel(this.location, this.color, this.size)
  }
  
  /**
   * Most basic function for moving the monster in a direction
   * @param vector takes a directional vector
   **/
  this.move = new function(v) {
    
  }
}