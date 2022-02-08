//Adam Cowher
//2/10/2022
//N220

//defines the boxCar object with properties
let boxCar = {
    width: 50, 
    height: 50, 
    carColor: "#FF0000",
    tireColor: "#000000",
    x: 400,
    y: 300,
    tireSize: 25
};

//takes the properties from boxCar and utilizes them to draw the boxCar to the canvas
function spawnCar(a){
    fill(a.carColor);
    rect(a.x, a.y, a.width, a.height);
    fill(a.tireColor);
    circle(a.x, a.y + a.width, a.tireSize);
    circle(a.x + a.width, a.y + a.width, a.tireSize);
}

//setup the application
function setup(){
    //creates the drawing canvas
    createCanvas(800,600);

    //sets the background to grey
    background("#808080");
}

//draws to the screen
function draw(){
    //draws the boxCar to the screen using properties from the boxCar object (without spawnCar function)
    fill(boxCar.carColor);
    rect(boxCar.x - 200, boxCar.y - 200, boxCar.width, boxCar.height);
    fill(boxCar.tireColor);
    circle(boxCar.x - 200, (boxCar.y + boxCar.width) - 200, boxCar.tireSize);
    circle((boxCar.x + boxCar.width) - 200, (boxCar.y + boxCar.width) - 200, boxCar.tireSize);
    
    //draws the boxCar to the screen using the spawnCar function
    spawnCar(boxCar);
}