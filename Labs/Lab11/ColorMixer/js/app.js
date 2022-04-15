//Adam Cowher
//4/14/2022
//N220

//declares initial red value
let red = 0;

//declares initial green value
let green = 0;

//declares initial blue value
let blue = 0;

//retrieves span tag to store current RGB value
document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;

//function that increases R value by 1
function addRed1(){
    //R value increments by 1 each time function is ran
    red += 1;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases R value by 5
function addRed5(){
    //R value increments by 5 each time function is ran
    red += 5;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases R value by 10
function addRed10(){
    //R value increments by 10 each time function is ran
    red += 10;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases G value by 1
function addGreen1(){
    //G value increments by 1 each time function is ran
    green += 1;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases G value by 5
function addGreen5(){
    //G value increments by 5 each time function is ran
    green += 5;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases G value by 10
function addGreen10(){
    //G value increments by 10 each time function is ran
    green +=10;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}


//function that increases B value by 1
function addBlue1(){
    //B value increments by 1 each time function is ran
    blue += 1;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases B value by 5
function addBlue5(){
    //B value increments by 5 each time function is ran
    blue += 5;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

//function that increases B value by 10
function addBlue10(){
    //B value increments by 10 each time function is ran
    blue += 10;
    //retrieves and updates the background color of the color box div with the updated RGB
    document.getElementById("color_box").style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //displays new, current RGB value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}