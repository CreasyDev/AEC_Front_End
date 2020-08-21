
// Canvas
let c = document.getElementById("myCanvas");
// Background
let ctx = c.getContext("2d");
ctx.fillStyle = '#000';
ctx.fillRect(75, 75, 350, 350);

// Moon 1
ctx.fillStyle = '#743fff';
ctx.beginPath();
ctx.ellipse(250, 240, 110, 110, 45 * Math.PI/90, 0, 2 * Math.PI);
ctx.fill();


// Moon 2
ctx.fillStyle = '#000';
ctx.beginPath();
ctx.ellipse(350, 200, 110, 110, 45 * Math.PI/90, 0, 2 * Math.PI);
ctx.fill();


// CERCLE
let canvas2 = document.getElementById('monCanvas2');
ctx = canvas2.getContext('2d');
let centerX = canvas2.width / 2;
let centerY = canvas2.height / 2;
let radius = 100;

ctx.beginPath();
ctx.ellipse(143, 150, 110, 110, 45 * Math.PI/90, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'purple';
ctx.stroke();

// CARRÉ
let canVas3 = document.getElementById('monCanvas3');
ctx = canVas3.getContext("2d");
ctx.beginPath();
ctx.rect(50, 50, 200, 200);
ctx.fillStyle = '#00ff01';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'purple';
ctx.stroke();


// POLYGONE

var canvas4 = document.getElementById('monCanvas4');
ctx = canvas4.getContext('2d');

var poly = [5, 5, 100, 50, 50, 100, 10, 90];

// copy array
var shape = poly.slice(0);

ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(shape.shift(), shape.shift());
while(shape.length) {
    ctx.lineTo(shape.shift(), shape.shift());
}
ctx.closePath();
ctx.fill();