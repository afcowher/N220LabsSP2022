//Adam Cowher
//3/24/2022
//N220

//retrieves the value of the user's input
let txtName = document.getElementById("txtName");

//calculates the user's tip (assuming 20%) + overall total
function calculateTipTotal(){
    //ensures the user's input is converted into a numerical value
    let input = Number(txtName.value);
     let tip = input * 0.2;
     //displays the tip to the nearest hundredth
     let displayTip = tip.toFixed(2);
     let total = input + tip;
     ////displays the total to the nearest hundredth
     let displayTotal = total.toFixed(2);
     console.log("Tip: $" + displayTip, "Total: $" + displayTotal);
}