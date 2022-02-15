//Adam Cowher
//2/17/2022
//N220

//retrieves the mcDiv div
let mc = document.getElementById("mcDiv");

//writes "HELLO" and appends an "mc" to the end. This function is run once the user clicks inside the div
function addMc(){
    mc.innerHTML += "HELLO";
    mc.append("mc");
}