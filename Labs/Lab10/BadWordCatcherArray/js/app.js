//Adam Cowher
//4/14/2022
//N220

//stores the bad words into an array
let badWords = ["clear", "water", "tires"];

//counter variable for bad words
let tally;

//div to display the results of badWordCheck()
let resultDiv = document.getElementById("resultDiv");

//function to loop through the user's string as an array to check for bad words
function badWordCheck(){
    //sets the initial count of bad words to 0
    tally = 0;
    //declares the empty userString
    let userString = "";
    //retrieves the value of the user input field
    userString = document.getElementById("userString").value;
    //declares an array to split the user's string
    let userWords = [];
    //splits the user's string as an array
    userWords = userString.split(" ");
    //loops through the user's input
    for(let y = 0; y < userWords.length; y++){
            //if a bad word is included in the user's input, increase the tally count for bad words
            if(userWords[y].includes(badWords[y]) == true){
                tally++;
            }
    }
    //display how many bad words were found, or display a message saying there were not any found
    if(tally == 0){
        resultDiv.innerHTML = "No bad words found.";
    }else{
        resultDiv.innerHTML = "There were " + tally + " different bad words found.";
    }
    //resets the input field after each session
    userString.value = "";
}