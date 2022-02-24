//Adam Cowher
//2/23/2022
//N220

//retrieves the div with id "beep"
let beepDiv = document.getElementById("beep");

for (let i = 1; i <= 25; i++){
    //prints the last number to the end of the div
    beepDiv.append(i + ", ");
}