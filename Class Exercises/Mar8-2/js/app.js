let txtName = document.getElementById("txtName");

let dvInputResult = document.getElementById("inputResult");

function threeInput(){
    let input = txtName.value;
    let multiInput = `${input}, ${input}, ${input}`;
    dvInputResult.innerHTML = multiInput;
}