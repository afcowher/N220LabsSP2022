//Adam Cowher
//2/17/2022
//N220

//retrieves the div with id "square"
let divSquare = document.getElementById("square");

//variable storing the div's starting height/weight
let squareWidthHeight = 100;

//increases the width and height of the div by 10%. This function is run once the div is clicked
function increaseSize() {
    divSquare.style.width += (1.1 * squareWidthHeight) + "px";
    divSquare.style.height += (1.1 * squareWidthHeight) + "px";
}