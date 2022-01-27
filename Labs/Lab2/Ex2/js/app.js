//Adam Cowher
//1/27/2022
//N220


//setup the application
function setup(){
    //creates a 400x300 canvas
    createCanvas(400,300);
}

//draws to the screen
function draw(){
    //sets the background color to grey
    background(128, 128, 128);

    //draws a circle at the mouse's position, with a diameter of 30
    circle(mouseX, mouseY, 30);

    //checks to see if the mouse's X position is on the left half of the canvas. If so, the circle turns blue
    if(mouseX < 200){
        fill(0, 0, 255);
    }

    //checks to see if the mouse's X position is on the right half of the canvas. If so, the circle turns red
    if(mouseX > 200){
        fill(255, 0, 0);
    }

}