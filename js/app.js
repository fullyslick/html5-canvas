var mycanvas = document.querySelector('#mycanvas'); // gets the canvas HTML element

var ctx = mycanvas.getContext('2d'); // gets the context of the canvas 2d or  3d


(function justMoving() {

  // Holds the x position of the rectangle.
  // Gets update in the interval
  let x = 0;

  setInterval(function() {

    // Update the x position
    x += 2;

    // Redraws the background
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, mycanvas.width, mycanvas.height);

    // Redraws the rectangle with a new position
    ctx.fillStyle = "#ccff00";
    ctx.fillRect(x, 120, 30, 30);
  }, 30);
}());
