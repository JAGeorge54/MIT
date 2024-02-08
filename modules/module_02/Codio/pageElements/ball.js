var ball = document.getElementById("ball");
var velocity = 100;
var positionX = 0;

function moveBall(){
    positionX = positionX + velocity;
    ball.style.left = positionX;
}