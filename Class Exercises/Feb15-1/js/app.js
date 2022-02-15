/*
let i = 0;
while(i < 5){
    console.log("Hi!");
    i++;
}

for (let i = 0; i < 5; i++){
    console.log("Hi!");
}
*/
let alienDiv = document.getElementById("alien");

let parks = ["Holiday", "Marott", "Central", "Cool Creek", "Military"];

for (let i = 0; i < parks.length; i++) {
    alienDiv.innerHTML += parks[i];
}