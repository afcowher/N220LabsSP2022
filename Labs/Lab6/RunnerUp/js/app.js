//Adam Cowher
//2/24/2022
//N220

//retrieves the div with id "first"
let firstDiv = document.getElementById("first");

//retrieves the div with id "second"
let secondDiv = document.getElementById("second");

//retrieves the div with id "third"
let thirdDiv = document.getElementById("third");

//array that stores the times - sorted by fastest to slowest time (in seconds)
let times = [100, 150, 200];

//displays the first/fastest time in the array 
firstDiv.append(times[0] + "sec");

//displays the second-fastest time in the array 
secondDiv.append(times[1] + "sec");

//displays the last/slowest time in the array
thirdDiv.append(times[2] + "sec");