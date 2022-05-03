//Adam Cowher
//5/3/2022
//N220

//retrieves the div with id "numDiv"
let numDiv = document.getElementById("numDiv");

//defines the starting number of 1000
let startNum = 1000;

//displays the starting number of 1000 in the numDiv before any user clicking
numDiv.innerHTML = startNum;

//decrements the number by 10%. This function is run once the div is clicked
function reduceNum() {
    //formula to reduce the current value by 10% on each click
    startNum = startNum - (startNum * .1);
    //display the new value to the numDiv
    numDiv.innerHTML = startNum;
}