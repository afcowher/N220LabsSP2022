//Adam Cowher
//1/20/2022
//N220

//setup the application
function setup(){
    //creates the drawing canvas
    createCanvas(800,600);
}

function draw(){
    background(0, 204, 204);
    fill(204, 0, 204);
    circle(400, 300, 300);
    line(256, 255, 542, 255);
    fill(0);
    rect(300, 255, 55, 55);
    rect(425, 255, 55, 55);
    line(300, 350, 325, 375);
    line(325, 375, 400, 375);
    textSize(100);
    text('Cool Guy', 50, 100);
}