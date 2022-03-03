//Adam Cowher
//3/3/2022
//N220

//global variable to store the score
var score = 0;

//array that stores the CPU's options
var options = ["Rock", "Paper", "Scissors"];

//accesses the score div and writes the initial score
var scoreDiv = document.getElementById("scoreDiv");
scoreDiv.innerHTML = "Score: " + score;

//accesses the results div
var resultsDiv = document.getElementById("resultsDiv");

//accesses the rock div and labels it as "Rock"
var rockDiv = document.getElementById("rockDiv");
rockDiv.innerHTML = "Rock";

//function that initiates when user selects "Rock" - generates a random selection for the CPU, and
//utilizes the RPS logic when necessary. Displays the results in the resultsDiv, and updates the score
//inside the scoreDiv
function playRock(){
    let cpuMove = options[Math.floor(Math.random() * options.length)];
    if (cpuMove == "Scissors"){
        score++;
    }
    if (cpuMove == "Paper"){
        score--;
    }
    resultsDiv.innerHTML = "You chose, " + options[0] + ". computer chose " + cpuMove + ".";
    scoreDiv.innerHTML = "Score: " + score;
}

//accesses the paper div and labels it as "Paper"
var paperDiv = document.getElementById("paperDiv");
paperDiv.innerHTML = "Paper";

//function that initiates when user selects "Paper" - generates a random selection for the CPU, and
//utilizes the RPS logic when necessary. Displays the results in the resultsDiv, and updates the score
//inside the scoreDiv
function playPaper(){
    let cpuMove = options[Math.floor(Math.random() * options.length)];
    if (cpuMove == "Rock"){
        score++;
    }
    if (cpuMove == "Scissors"){
        score--;
    }
    resultsDiv.innerHTML = "You chose, " + options[1] + ". computer chose " + cpuMove + ".";
    scoreDiv.innerHTML = "Score: " + score;
}

//accesses the scissors div and labels it as "Scissors"
var scissorsDiv = document.getElementById("scissorsDiv");
scissorsDiv.innerHTML = "Scissors";

//function that initiates when user selects "Scissors" - generates a random selection for the CPU, and
//utilizes the RPS logic when necessary. Displays the results in the resultsDiv, and updates the score
//inside the scoreDiv
function playScissors(){
    let cpuMove = options[Math.floor(Math.random() * options.length)];
    if (cpuMove == "Rock"){
        score--;
    }
    if (cpuMove == "Paper"){
        score++;
    }
    resultsDiv.innerHTML = "You chose, " + options[2] + ". computer chose " + cpuMove + ".";
    scoreDiv.innerHTML = "Score: " + score;
}

//accesses the guard div and labels it as "Guard"
var guardDiv = document.getElementById("guardDiv");
guardDiv.innerHTML = "Guard";

//function that initiates when user selects "Guard" - generates a random selection for the CPU, and
//subtracts 0.5 from the user's score. Displays the results in the resultsDiv, and updates the score
//inside the scoreDiv
function playGuard(){
    score = score - 0.5;
    let cpuMove = options[Math.floor(Math.random() * options.length)];
    resultsDiv.innerHTML = "You chose, " + "Guard" + ". computer chose " + cpuMove + ".";
    scoreDiv.innerHTML = "Score: " + score;
}