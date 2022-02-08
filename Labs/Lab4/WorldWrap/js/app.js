//Adam Cowher
//2/10/2022
//N220

let ball = {
    x: 0,
    y: 300,
    size: 30,
    velocity: 1
}

//setup the application
function setup() {
    //creates the drawing canvas
    createCanvas(800, 600);
}

//draws to the screen
function draw() {
    //sets the background to grey
    background("#808080");

    ball.velocity = ball.velocity + 5;
    circle(ball.x + ball.velocity, ball.y, ball.size);
}