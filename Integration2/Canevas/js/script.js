
// RECTANGLE
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.lineTo(500, 500);
// Dégradé
let grd = ctx.createLinearGradient(0,80,200,0);
grd.addColorStop(0, "lightblue");
grd.addColorStop(1, "orange");
// Couleur d'arrière plan et dégradé
ctx.fillStyle = grd;
ctx.fillRect(70, 150, 350, 200);


// CERCLE
let canvas1 = document.getElementById('monCanvas');
ctx = canvas1.getContext('2d');
let centerX = canvas1.width / 2;
let centerY = canvas1.height / 2;
let radius = 200;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#1610ab';
ctx.stroke();


// ELLIPSE
let canevas = document.getElementById('canvas');
ctx = canevas.getContext('2d');
ctx.fillStyle = '#0eff53';
ctx.beginPath();
ctx.ellipse(250, 250, 100, 200, 45 * Math.PI/90, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = '#800080';
ctx.lineWidth = 5;
ctx.stroke();


// LIGNE
let canvas = document.getElementById('myCanvas2');
ctx = canvas.getContext('2d');
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.lineWidth = 10;
// Couleur
ctx.strokeStyle = '#ff0000';
ctx.stroke();


// POLYGON
function drawTriangle(context, x, y, triangleWidth, triangleHeight, fillStyle){
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + triangleWidth / 2, y + triangleHeight);
    context.lineTo(x - triangleWidth / 2, y + triangleHeight);
    context.closePath();
    context.fillStyle = fillStyle;
    context.fill();
}

window.onload = function(){
    let canvas = document.getElementById("myCanvas3");
    let context = canvas.getContext("2d");

    let grd;
    let triangleWidth = 300;
    let triangleHeight = 300;
    let triangleY = canvas.height / 2 - triangleWidth / 2;

    grd = context.createLinearGradient(canvas.width  / 5, triangleY, canvas.width / 5, triangleY + triangleHeight);
    grd.addColorStop(0, "#ea52ff");
    grd.addColorStop(1, "#008544");
    drawTriangle(context, canvas.width / 2, triangleY, triangleWidth, triangleHeight, grd);

};



