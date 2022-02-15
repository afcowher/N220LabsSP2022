//Adam Cowher
//2/17/2022
//N220

let divSquare = document.getElementById("square");

let squareWidthHeight = 100;

function increaseSize(){
    divSquare.style.width += (1.1 * squareWidthHeight) + "px";
    divSquare.style.height += (1.1 * squareWidthHeight) + "px";
}