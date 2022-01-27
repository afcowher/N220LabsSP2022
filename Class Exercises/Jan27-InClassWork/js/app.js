//Adam Cowher
//1/27/2022
//N220

let x = 50;
let y = 50;
let greeting = "Hello world";


//setup the application
function setup(){
    x = x + 50;
    y = y * 3;
    createCanvas(800,600); 
}

function draw(){
    background(86, 87, 84);
    text("Hello work", 50, 50);


    greeting += "d";
    text(greeting, x, y);
}

