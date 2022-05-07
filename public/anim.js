"use strict";

// FahrzeuglÃ¤nge
var l = 200;

// HTML-Objekte
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var weiterButton = document.getElementById("weiter");
var velField = document.getElementById("startVel");
var accelField = document.getElementById("accel"); 

var animTimer;
var stopped = true;
var velocity = velField.valueAsNumber / 10; 
var accel = accelField.valueAsNumber;
var wheelRad = 0.15 * l;
var timer;
var storeVel;

// Anfangsposition herstellen
drawAmpel("red");
drawAll(0);
var pos = 0;
startButton.addEventListener("click", function(){
    window.clearInterval(animTimer);
    startAnimation();
});

function startAnimation() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    pos = 0;
    drawAll(pos);
    drawAmpel("redyellow");
    var ampelDelay = window.setTimeout(function(){
        drawAmpel("green");
        window.clearTimeout(ampelDelay);
        var schreckDelay = window.setTimeout(function(){
            // Alles auf Start setzen!
            window.clearTimeout(schreckDelay);
            velocity = velField.valueAsNumber / 10;
            accel = accelField.valueAsNumber;
            storeVel = velocity;
            stopped = false;
            timer = 0;

            // Button-Funktionen
            stopButton.addEventListener("click", function(){
                velocity = 0;
                stopped = true;
            });
            
            weiterButton.addEventListener("click", function(){
                velocity = velField.valueAsNumber / 10;
                stopped = false;
            });

            animTimer = window.setInterval(bobbyAnimation, 1);

        }, 800);
    }, 2000);
}

function bobbyAnimation() {
    if (!stopped){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAmpel("green");
        drawAll(pos);
        if (pos <= canvas.width) {
          pos = pos + (accel * (timer / 1000) + velocity);
        } else {
          pos = 0 - l;
        }
        timer++;
      }
}
function drawAmpel(status) {
    context.save();
  
    context.translate(l + 50, 25);
    context.rect( 0, 0, 30, 90);
    context.fillStyle = "gray";
    context.fill();
  
    if (status === "red") {
      drawCircle(context, 15, 15, 12, 'red');
      drawCircle(context, 15, 45, 12, 'black');
      drawCircle(context, 15, 75, 12, 'black');
    } else if (status === "redyellow") {
      drawCircle(context, 15, 15, 12, 'red');
      drawCircle(context, 15, 45, 12, 'orange');
      drawCircle(context, 15, 75, 12, 'black');
    } else if (status === "green") {
      drawCircle(context, 15, 15, 12, 'black');
      drawCircle(context, 15, 45, 12, 'black');
      drawCircle(context, 15, 75, 12, 'lightgreen');
    }
  
    context.restore();
}
function drawAll(startX) {
    drawSteering(context, startX + 0.5 * l, 0.4 * l);
    drawLight(context, startX + 0.85 * l, 0.55 * l);
    drawBody(context, startX + 0.15 * l, 0.8 * l);
    drawLine(context, startX + 0, 0.7 * l);

    context.save();
    context.translate(startX + 0.15 * l, 0.8 * l);
    context.rotate(startX / wheelRad);
    drawWheel(context, 0, 0);
    context.restore();

    context.save();
    context.translate(startX + 0.85 * l, 0.8 * l);
    context.rotate(startX / wheelRad);
    drawWheel(context, 0, 0);
    context.restore();
} 
function drawBody(context, posX, posY) {
    context.beginPath();
    context.moveTo(posX, posY);
    context.lineTo(0.5 * l + posX, posY + 0.05 * l);
    context.lineTo(0.7 * l + posX, posY);
    context.lineTo(0.8 * l + posX, posY - 0.1 * l);
    context.lineTo(0.7 * l + posX, posY - 0.25 * l);
    context.bezierCurveTo(
      0.6 * l + posX, posY - 0.3 * l,
      posX + 0.4 * l, posY - 0.25 * l,
      posX + 0.4 * l, posY - 0.25 * l
    );
    context.bezierCurveTo(
      0.2 * l + posX, posY - 0.1 * l,
      0.15 * l + posX, posY - 0.2 * l,
      0.15 * l + posX, posY - 0.2 * l
    );
    context.bezierCurveTo(
      posX, posY - 0.3 * l,
      posX, posY - 0.3 * l,
      posX - 0.15 * l, posY - 0.15 * l
    );
    context.lineTo(posX - 0.14 * l, posY);
    context.fillStyle = 'red';
    context.closePath();
    context.fill();
}
function drawLight(context, posX, posY) {
    context.beginPath();
    context.moveTo(posX, posY);
    context.lineTo(posX + 0.005 * l, posY);
    context.bezierCurveTo(
      posX + 0.035 * l, posY,
      posX + 0.06 * l, posY + 0.05 * l,
      posX + 0.03 * l, posY + 0.05 * l
    );

    // Animation
    if (posX % 80 <= 40) {
        context.fillStyle = 'orange';
    } else {
        context.fillStyle = 'yellow';
    }
    
    context.fill();
}
function drawLine(context, posX, posY) {
    context.beginPath();
    context.moveTo(posX, posY);
    context.bezierCurveTo(
      posX + 0.2 * l, posY - 0.2 * l,
      posX + 0.4 * l, posY + 0.1 * l,
      posX + 0.5 * l, posY + 0.15 * l
    );
    context.bezierCurveTo(
      posX + 0.6 * l, posY + 0.2 * l,
      posX + 0.7 * l, posY - 0.1 * l,
      posX + 0.88 * l, posY - 0.1 * l
    );
    context.lineWidth = 0.025 * l;
    context.strokeStyle = '#800000';
    context.lineCap = 'round';
    context.stroke();
}
function drawSteering(context, posX, posY) {
    context.save();
    context.translate(posX, posY);
    context.rotate(345 * Math.PI / 180);
  
    // Stange
    context.beginPath();
    context.moveTo(0.1 * l, 0);
    context.lineTo(0.1 * l, 0.5 * l);
    context.lineWidth = 0.025 * l;
    context.strokeStyle = 'gray';
    context.stroke();
  
    // Hupe
    context.beginPath();
    context.moveTo(0.075 * l, -0.01 * l);
    context.lineTo(0.125 * l, -0.01 * l);
    context.lineWidth = 0.025 * l;
    context.strokeStyle = 'red';
    context.lineCap = 'round';
    context.stroke();
  
    // Steuerrad
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0.2 * l, 0);
    context.lineWidth = 0.025 * l;
    context.strokeStyle = 'white';
    context.lineCap = 'round';
    context.stroke();
  
    // Befestigungsdings
    context.beginPath();
    context.moveTo(0.05 * l, 0);
    context.lineTo(0.15 * l, 0);
    context.lineTo(0.1125 * l, 0.08 * l);
    context.lineTo(0.0875 * l, 0.08 * l);
    context.fillStyle = 'white'
    context.fill();
  
    context.restore();
}
function drawWheel(context, posX, posY) {
    drawCircle(context, posX, posY, wheelRad, 'black');
    drawCircle(context, posX, posY, wheelRad * 0.95, 'gray');
    drawCircle(context, posX, posY, wheelRad * 0.8, 'black');
    drawCircle(context, posX, posY, wheelRad * 0.6, 'white');
    drawCircle(context, posX, posY, wheelRad * 0.5, 'red');
    drawCircle(context, posX, posY, wheelRad * 0.1, 'gray');
    drawCircle(context, posX, posY, wheelRad * 0.08, 'black');
    drawCircle(context, posX, posY, wheelRad * 0.04, 'gray');
  
    context.save();
    context.translate(posX, posY);
    for (var i = 1; i < 6; i++) {
      drawCircle(context, 0.3 * wheelRad, 0, wheelRad * 0.11, '#900000');
      context.rotate(72*(Math.PI/180));
    }
    context.restore();
}
function drawCircle(context, posX, posY, rad, colour) {
    context.beginPath();
    context.arc(posX, posY, rad, 0, 2 * Math.PI, false);
    context.fillStyle = colour;
    context.fill();
}