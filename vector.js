/* vector class.  Give postion and direction of objects in teh game. */

function Vector(x, y) {
  // Defaults
  if (typeof x == "undefined") {
    this.x = 0;
  } else {
    this.x = x;
  }
  
  if (typeof y == "undefined") {
    this.y = 0;
  } else {
    this.y = y;
  }
}