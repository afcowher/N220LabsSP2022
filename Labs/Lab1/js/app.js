//Adam Cowher
//1/20/2022
//N220

//stores the size value for my face, which in this case is a circle's diameter
let face = 300;

//stores the size value for my eyes, which in this case is a rectangle's width/height. I stored is as a
//single number so that it's a square
let eye = 55;

//setup the application
function setup(){
    //creates the drawing canvas
    createCanvas(800,600);
}

//draws to the screen
function draw(){
    //sets the background color to light blue
    background(0, 204, 204);

    //sets the color of the face to purple
    fill(204, 0, 204);
    
    //draws a circle (the face)
    circle(400, 300, face);
    
    //draws a line (frame of sunglasses)
    line(256, 255, 542, 255);

    //sets the color of the remaining shapes to black (eyes, mouth)
    fill(0);

    //draws 2 rectangles (eyes)
    rect(300, 255, eye);
    rect(440, 255, eye);

    //sets the stroke weight of all drawn objects. I did this for better visibility
    strokeWeight(4);

    //draws 2 lines (smirk)
    line(300, 350, 325, 375);
    line(325, 375, 400, 375);

    //sets the size of the text heading
    textSize(100);

    //creates a text string that I used as the header for my project
    text('Cool Guy', 50, 100);
}