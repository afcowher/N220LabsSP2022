//Adam Cowher
//2/3/2022
//N220

/*defines the removeRed function. This function is meant to pass a color through it, set the red value to 0,
and return the full color (with red set to 0)
*/
function removeRed(c){
   c.setRed(0);
    return c;
}

//setup function - defines the canvas
function setup(){
    createCanvas(800, 600);
}

//draw function - sets the background to grey
function draw(){
    background("#808080");
    /* stores the non-red color as a variable noRed. This non-red color is retrieved using the removeRed()
    function */
    let noRed = removeRed(color(170, 200, 150));
    //sets the fill for the circle to be the non-red color (noRed)
    fill(noRed);
    //draws the circle at the center of the canvas with a diameter of 50
    circle(400, 300, 50);
}