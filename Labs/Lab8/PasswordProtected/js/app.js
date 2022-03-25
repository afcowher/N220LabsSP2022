//Adam Cowher
//3/24/2022
//N220

//retrieves the value of the user's username
let inUsername = document.getElementById("txtUsername");

//retrieves the value of the user's password
let inPassword = document.getElementById("txtPassword");

//retrieves the value of the div to display the login result
let dvResult = document.getElementById("inputResult");

//checks the user's input in both username + password fields - if correct, display "Success"
//otherwise display "Wrong information"
function loginCheck(){
    let username = inUsername.value;
    let password = inPassword.value;
    if(username == "Username" && password == "Password"){
        dvResult.innerHTML = "Success"
    }else{
        dvResult.innerHTML = "Wrong information"
    }
}