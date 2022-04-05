//Adam Cowher
//4/7/2022
//N220

//retrieves the value of the user's input
let inputNum = document.getElementById("inputNum");

//retrieves the div to display divisibility results
let resultDiv = document.getElementById("resultDiv");

//updates the div on the screen to tell if what the user typed is divisible by 7
function divisibilityResult(){
    //check divisibilityCheck() result of user's input
    let isNumDiv = divisibilityCheck(inputNum.value);
    if(isNumDiv == true){   
        resultDiv.innerHTML = inputNum.value + " is divisible by 7.";
    }else{
        resultDiv.innerHTML = inputNum.value + " is NOT divisible by 7.";
    }
}

//checks if number is divisible by 7
function divisibilityCheck(x){
    //check if user's input is divisibility by 7
    if (x % 7 == 0){
        return true;
    }else{
        return false;
    }
}