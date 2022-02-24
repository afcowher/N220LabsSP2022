//Adam Cowher
//2/24/2022
//N220

//retrieves the div with id "first"
let firstDiv = document.getElementById("first");

//array that stores my favorite things
let favorites = ["Music", "Basketball", "Technology", "Humor", "Video Games"];

//loop that goes for as long as the array is, and prints each array value in the div
for (let i = 0; i < favorites.length; i++) {
    firstDiv.innerHTML += favorites[i] + ", is one of my favorite things.<br>"
}
  
