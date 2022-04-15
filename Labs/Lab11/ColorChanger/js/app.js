//Adam Cowher
//4/14/2022
//N220

//retrieves the first div from the HTML and adds an event listener to run the changeColor() function when clicked
let divOne = document.getElementById("divOne");
divOne.addEventListener("click", changeColor);

//retrieves the second div from the HTML and adds an event listener to run the changeColor() function when clicked
let divTwo = document.getElementById("divTwo");
divTwo.addEventListener("click", changeColor);

//retrieves the third div from the HTML and adds an event listener to run the changeColor() function when clicked
let divThree = document.getElementById("divThree");
divThree.addEventListener("click", changeColor);

//takes the event target and changes its background to its respective data attribute
function changeColor(event){
    event.target.style.backgroundColor = event.target.dataset.color;
}