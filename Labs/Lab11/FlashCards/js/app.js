//Adam Cowher
//4/14/2022
//N220

//retrieves the Indianapolis button and initiates an event listener
let buttonIndianapolis = document.getElementById("Indianapolis");
buttonIndianapolis.addEventListener("click", answerCheck);

//retrieves the Carmel button and initiates an event listener
let buttonCarmel = document.getElementById("Carmel");
buttonCarmel.addEventListener("click", answerCheck);

//retrieves the Gary button and initiates an event listener
let buttonGary = document.getElementById("Gary");
buttonGary.addEventListener("click", answerCheck);

//retrieves the answer output div
let answerDiv = document.getElementById("answer");

//function that checks the value of the button clicked
function answerCheck(event){
    if(event.target.value = "Indianapolis"){
        answerDiv.innerHTML = "Correct!"
    }else{
        answerDiv.innerHTML = "Sorry, but that is incorrect. The correct answer is Indianapolis."
    }
}