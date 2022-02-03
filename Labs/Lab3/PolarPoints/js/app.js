//Adam Cowher
//2/3/2022
//N220

//defines the polarPoint function
function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}

//setup function - defines the canvas
function setup(){
    createCanvas(800, 600);
}


//draw function
function draw(){
    let res = polarPoint(30);
    translate(100, 100);
    background("#0000FF");
    circle(res.x, res.y, 10);
}