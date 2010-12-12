/* helper function for rendering */

/**
 * Simply draw a pixel to the screen
 * @param location vector
 * @param color string
 * @param size integer the size and shape of the pixel rectangle
 **/
function drawPixel(location, color, size) {
  // Default pixel color is blue
  if (typeof color == "undefined") {
    color = "BLUE";
  }
  
  context.fillStyle = color;
  context.fillRect(location.x(), location.y(), size, size);
}