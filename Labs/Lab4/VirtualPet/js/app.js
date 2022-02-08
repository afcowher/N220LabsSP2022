//Adam Cowher
//2/10/2022
//N220

//defines the pet object
let pet = {
    x: 400,
    y: 300,
    size: 30,
    offsetX: 100
};

//setup the application
function setup() {
    //creates the drawing canvas
    createCanvas(800, 600);
}

//draws to the screen
function draw() {
    //sets the background to grey
    background("#808080");

    //draws the pet at an offset X position of the mouse - using the pet object properties
    circle(mouseX - pet.offsetX, mouseY, pet.size);

    //if the mouse is pressed, the pet returns to the mouse, but it does not go past the mouse
    if(mouseIsPressed && pet.offsetX > 0){
        pet.offsetX = pet.offsetX - 1;
    }

    //if the mouse is not pressed, the pet runs away from the mouse 
    if(!(mouseIsPressed)){
        pet.offsetX = pet.offsetX + 1;
    }
}