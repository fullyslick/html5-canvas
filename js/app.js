var mycanvas = document.querySelector('#mycanvas'); // gets the canvas HTML element

var ctx = mycanvas.getContext('2d'); // gets the context of the canvas 2d or  3d

// Create class constructor for every kvadrat that will be made
function Kvadrat(inputX, inputY, inputSpeed, inputColor) {
  this.posX = inputX;
  this.posY = inputY;
  this.speed = inputSpeed;
  this.color = inputColor;
}

// Create class prototype to hold the move method
Kvadrat.prototype.moveRight = function() {
  // Update the posX position
  this.posX += this.speed;

  // When the green rectangle goes out of canvas reset its posX postion to 0
  // This creates loop effect
  if (this.posX == 300) {
    this.posX = 0;
  }

  // Redraw the kvadrat with a new position
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX, this.posY, 30, 30);
}

// Create the purviKvadrat object from constructor class
const purviKvadrat = new Kvadrat(10, 10, 5, '#ccff00');

// Create the vtoriKvadrat object from constructor class
const vtoriKvadrat = new Kvadrat(20, 80, 10, '#ff0000');

// Declare the background image object
const chessGridImage = new Image();

// Create the moving effect
setInterval(function() {

  // draw the background image -> chessGridImage line 36, line 51
  ctx.drawImage(chessGridImage, 0, 0, mycanvas.width, mycanvas.height);

  // Call the prototype method to move purviKvadrat & vtoriKvadrat
  purviKvadrat.moveRight();
  vtoriKvadrat.moveRight();

}, 30);

// Set the source file of the  background image object
chessGridImage.src = 'chessgrid.gif';
