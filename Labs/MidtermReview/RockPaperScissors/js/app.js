//Adam Cowher
//3/3/2022
//N220

var score = 0;

var options = ["Rock", "Paper", "Scissors"];

var scoreDiv = document.getElementById("scoreDiv");
scoreDiv.innerHTML = "Score: " + score;

var resultsDiv = document.getElementById("resultsDiv");

var rockDiv = document.getElementById("rockDiv");
rockDiv.innerHTML = "Rock";

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

var paperDiv = document.getElementById("paperDiv");
paperDiv.innerHTML = "Paper";

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

var scissorsDiv = document.getElementById("scissorsDiv");
scissorsDiv.innerHTML = "Scissors";

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

var guardDiv = document.getElementById("guardDiv");
guardDiv.innerHTML = "Guard";

function playGuard(){
    score = score - 0.5;
    let cpuMove = options[Math.floor(Math.random() * options.length)];
    resultsDiv.innerHTML = "You chose, " + "Guard" + ". computer chose " + cpuMove + ".";
    scoreDiv.innerHTML = "Score: " + score;
}