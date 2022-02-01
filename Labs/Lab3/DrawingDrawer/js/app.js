//Adam Cowher
//2/3/2022
//N220

//drawCar function - stores + defines the car object while also defining the function for making a car
function drawCar(x, y){
    //defines the 'car' object. Specifies the size of a tire, the size of a body, 
    //and the colors of each of those components
    let car = {
        tireSize: 10,
        bodySize: 30,
        bodyColor: "#00FF00",
        tireColor: "#000000"
    };


    //this block of code actually creates the car using the object properties defined above. The fill()
    //functions color the body and tires, while the rect() and circle() functions draw the car itself.
    //All of these functions are retrieving values from the car object above, but in the case of the
    //rect() and circle() they are retrieving the (x, y) parameters from drawCar() as well
    fill(car.bodyColor);
    rect(x, y, car.bodySize);
    fill(car.tireColor);
    circle(x, y + car.bodySize, car.tireSize);
    circle(x + car.bodySize, y + car.bodySize, car.tireSize);
}

//setup function that defines a canvas
function setup(){
    createCanvas(800, 600);
}

//draw function - puts a background and utilizes drawCar() by drawing a car at the user's mouse position
function draw(){
    background("#808080");
    drawCar(mouseX, mouseY);
}