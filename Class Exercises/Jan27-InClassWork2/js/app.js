//Adam Cowher
//1/27/2022
//N220

//variable that is opposite of mouseX
let oppX = 10;
//variable that is opposite of mouseY
let oppY = 10;
//setup the application
function setup(){
   //create a 400x400 canvas
   createCanvas(400, 400);
}

function draw(){
    //set a background
    background(87, 86, 84); 
    fill(255, 255, 0);
    //draw the circle with the variables
    circle(-mouseX, -mouseY, 10);

}