//Adam Cowher
//4/7/2022
//N220

//retrieves the div to display the random number
let resultDiv = document.getElementById("resultDiv");

//displays the random number in a div
function randNumResult(){
    resultDiv.innerHTML = "Your random number is: " + randNumGenerator();
}

//generates a random number between 1 and 10
function randNumGenerator(){
    let randNum = Math.floor(Math.random() * 11);
    return randNum;
}