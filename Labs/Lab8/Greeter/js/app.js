//Adam Cowher
//3/24/2022
//N220

//retrieves the value of the user's input
let txtName = document.getElementById("txtName");

//generates a greeting based on what the user inputs
function greetUser(){
    let input = txtName.value;
     let greeting = `Hello ${input}!`;
     console.log(greeting);
}