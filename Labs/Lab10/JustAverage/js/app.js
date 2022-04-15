//Adam Cowher
//4/14/2022
//N220


//converts the user's string into numerical values that are then added and averaged
function addAvgNum() {
    //retrieves the user's string from the input field
    let userString = document.getElementById("userString").value;
    //splits the user's string, separating by commas
    let userStringArray = userString.split(",");
    //declares sum variable
    let sum = 0;
    //declares average variable
    let avg = 0;
    //loops through the user's string and converts it into a numerical value
    for(i = 0; i < userStringArray.length; i++){

          sum += parseInt(userStringArray[i]);

    }
    //calculates the average by diving the sum of the user's numbers by how many the user provided
    avg = sum / userStringArray.length;
    //displays the sum to the sumDiv
    document.getElementById("sumDiv").innerHTML = "Sum: " + sum;
    //displays the average to the avgDiv
    document.getElementById("avgDiv").innerHTML = "Average: " + avg;
    //resets the input field for further use
    userString = document.getElementById("userString").value = "";

  }