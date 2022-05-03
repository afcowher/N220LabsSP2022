//Adam Cowher
//5/3/2022
//N220

//creates the word array
let wordArr = ["cars", "bikes", "vans", "trucks", "velocipedes"];

//div to display the words
let resultDiv = document.getElementById("resultDiv");

//function to loop through the array
function printArr(){
    //loops through the array, ignoring the first entry in the array by starting at index 1
    for(let i = 1; i < wordArr.length; i++){
        //as the array is looped through, print and add each entry to the resultDiv
        resultDiv.innerHTML += wordArr[i] + " ";
    }
}

//call the function
printArr();