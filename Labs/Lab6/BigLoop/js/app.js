//Adam Cowher
//2/24/2022
//N220

//retrieves the div with id loop
let loopDiv = document.getElementById("loop");

//for loop that sets the starting counter at 1000, but getting no bigger than 5000, while incrementing by
//1000 each cycle
for (let i = 1000; i <= 5000; i = i + 1000){
    //prints the last number to the end of the div
    loopDiv.append(i + ", ");
}