var mycanvas = document.querySelector('#mycanvas'); // gets the canvas HTML element

var ctx = mycanvas.getContext('2d'); // gets the context of the canvas 2d or  3d

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, mycanvas.width, mycanvas.height );

ctx.fillStyle = "#ccff00";
ctx.fillRect(120, 120, 30, 30);
