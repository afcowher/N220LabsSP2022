//Adam Cowher
//1/27/2022
//N220


//global variable to store circle's diameter
let diameter = 1;


//setup the application
function setup(){
    //creates the drawing canvas
    createCanvas(800,600);
}



//draws to the screen
function draw(){
    //sets the background color to grey
    background(128, 128, 128);

    //draw a circle to the center of the canvas, with a diameter of 1
    circle(400, 300, diameter);

    //increase the diameter by 1 every frame
    diameter++;

    //if statement - if circle's diameter is greater than 200, set diameter back to 1
    if(diameter > 200){
        diameter = 1;
    }
}