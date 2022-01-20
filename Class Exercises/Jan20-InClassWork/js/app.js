//Adam Cowher
//1/20/2022
//N220


let size = 5;

//setup the application
function setup(){
    //create canvas of size 800 - big enough to draw on
    createCanvas(800,600);
    console.log(size);

}

function draw(){
    
    background(0);
    circle(mouseX, mouseY, size);
    if(size < 50){
        if (mouseIsPressed) {
            size = size + 1;
          }
    }
    console.log(size);
}