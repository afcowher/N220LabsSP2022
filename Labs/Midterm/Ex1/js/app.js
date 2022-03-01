//Adam Cowher
//3/1/2022
//N220

//starting array
var konami = ["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];

//access the div with id mDiv
var mDiv = document.getElementById("mDiv");

//for loop that goes for as long as the array is, and prints each array value in the div
for (let i = 0; i < konami.length; i++) {
    mDiv.innerHTML += konami[i] + " - "
};