//Adam Cowher
//2/17/2022
//N220

//retrieves the div with id "square"
let divSquare = document.getElementById("square");

//defines the starting size of the div square
let size = 100;

//increases the width and height of the div by 10%. This function is run once the div is clicked
function increaseSize() {
    size = 1.1 * size;
    divSquare.style.width = size + "px";
    divSquare.style.height = size + "px";
}