/* vector class.  Give postion and direction of objects in teh game. */

function Vector(x, y) {
  
  // Private vars
  var that = this;
  var _x;
  var _y;
  
  // Optimization flag
  var magnitudeCalculated = false;
  
  // Defaults
  if (typeof x == "undefined") {
    _x = 0;
  } else {
    _x = x;
  }
  
  if (typeof y == "undefined") {
    _y = 0;
  } else {
    _y = y;
  }
  
  
  // Priveged get and set
  this.setx = function(x) {
    that._x = x;
    that.magnitudeCalculated = false;
  }
  
  this.sety = function(y) {
    that._y = y;
    that.magnitudeCalculated = false;
  }
  
  // Get functions
  this.x = function() {
    return(that._x);
  }
  
  this.y = function() {
    return(that._y);
  }
  
  /** Normalize the THIS vector
   * x = ax/|a|
   * y = ay/|a|
   * z = az/|a|
   **/
  this.inormalize = function() {
    if(!that.magnitudeCalculated) {
      magnitude = this.magnitude();
    } else {
      magnitude = that.magnitudeCalculated;
    }
    
    that._x = x/magnitude;
    that._y = y/magnitude;
  }
  
  // Returns the magnitude of this vector
  // |a| = sqrt((ax * ax) + (ay * ay) + (az * az))
  this.magnitude = function() {
    that.magnitudeCalculated = Math.sqrt(Math.pow(_x,2) + Math.pow(_y,2))
    return(that.magnitudeCalculated);
  }
}