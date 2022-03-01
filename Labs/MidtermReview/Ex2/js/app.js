//Adam Cowher
//3/1/2022
//N220

//access the div with id mDiv
var mDiv = document.getElementById("mDiv");

mDiv.innerHTML = "yes";

//function to check what word is currently in the div - if "yes", change to "no" - otherwise change to "yes"
function yesNoCheck(){
    if(mDiv.innerHTML = "yes"){
        mDiv.innerHTML = "no"
    }
    while(mDiv.innerHTML = "no"){
        mDiv.innerHTML = "yes"
    }
}