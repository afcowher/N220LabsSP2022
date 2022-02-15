//Adam Cowher
//2/17/2022
//N220

//retrieves the div with id "square"
let divSquare = document.getElementById("square");

//sets the background color of the div to black - only runs once mouse is hovered over the div
function turnBlack(){
    divSquare.style.backgroundColor = "#000000";
}

//sets the background color of the div to blue - only runs once mouse is hovered off the div
function turnBlue(){
    divSquare.style.backgroundColor = "#0000FF";
}