var mycanvas = document.querySelector('#mycanvas'); // gets the canvas HTML element

var ctx = mycanvas.getContext('2d'); // gets the context of the canvas 2d or  3d


(function justMoving() {

  // Holds the x position of the rectangle.
  // Gets update in the interval
  let x = 0;

  // Decalre the background image object
  const chessGridImage = new Image();

  setInterval(function() {

    // Update the x position
    x += 2;

    // When the green rectangle goes out of canvas reset its x postion to 0
    // This creates loop effect
    if (x == 300) {
      x = 0;
    }

    // Redraws the background
    ctx.drawImage(chessGridImage, 0, 0, mycanvas.width, mycanvas.height);

    // Redraws the rectangle with a new position
    ctx.fillStyle = "#ccff00";
    ctx.fillRect(x, 120, 30, 30);
  }, 30);

  // Set the source file of the  background image object
  chessGridImage.src = 'chessgrid.gif';
}());
