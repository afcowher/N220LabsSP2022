//Adam Cowher
//2/10/2022
//N220

//defines the ball object with properties for the y position, size, color, and velocity
let ball = {
    y: 300,
    size: 30,
    velocity: 1,
    color: 'blue'
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

    //increments the velocity, causing movement
    ball.velocity = ball.velocity + 5;

    //colors the ball using the color property from the ball object
    fill(ball.color);

    //creates a circle using properties of the ball object
    circle(ball.velocity, ball.y, ball.size);

    //checks the right boundary of the canvas for the ball
    if (ball.velocity > 800) {
        ball.velocity = 0;
    }
}