//Adam Cowher
//4/7/2022
//N220

//retrieves the user input string
let userString = document.getElementById("userString");

//retrieves the div to display the cleaned up string
let resultDiv = document.getElementById("resultDiv");

//takes the user's input and returns the cleaned up version (no #)
function cleanup(x){
    //defines an array to store all non-# characters
    let resultArr = [];
    //checks each character of the user's string for an #
    for(let i = 0; i < x.length; i++) {
        //if there is not a # in the character, push that character to the array
        if(!(x[i].includes("#"))) {
            resultArr.push(x[i]);
        }
    }
    return resultArr;
}

//display the cleaned up user string
function cleanupResult(){
    let formatText = cleanup(userString.value);
    //formats result as a string and provides spacing
    resultDiv.innerHTML = formatText.join("");
}