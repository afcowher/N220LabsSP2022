//Adam Cowher
//3/3/2022
//N220

//access the div with id xDiv
var xDiv = document.getElementById("xDiv");

//access the div with id aDiv - sets its div text
var aDiv = document.getElementById("aDiv");
aDiv.innerHTML = "hello"

//access the div with id bDiv - sets its div text
var bDiv = document.getElementById("bDiv");
bDiv.innerHTML = "my"

//access the div with id cDiv - sets its div text
var cDiv = document.getElementById("cDiv");
cDiv.innerHTML = "name"

//access the div with id dDiv - sets its div text
var dDiv = document.getElementById("dDiv");
dDiv.innerHTML = "is"

//access the div with id eDiv - sets its div text
var eDiv = document.getElementById("eDiv");
eDiv.innerHTML = "mister"

//access the div with id fDiv - sets its div text
var fDiv = document.getElementById("fDiv");
fDiv.innerHTML = "code"


//highlight function for the aDiv - adds the div's text to the xDiv, highlights the div in yellow, bolds 
//the text, and clears all other divs
function aDivHighlight(){
    xDiv.innerHTML += "hello ";
    aDiv.style.backgroundColor = "#FFFF00";
    aDiv.style.fontWeight = "900";
    fDiv.style.backgroundColor = "";
    fDiv.style.fontWeight = "";
    bDiv.style.backgroundColor = "";
    bDiv.style.fontWeight = "";
    cDiv.style.backgroundColor = "";
    cDiv.style.fontWeight = "";
    dDiv.style.backgroundColor = "";
    dDiv.style.fontWeight = "";
    eDiv.style.backgroundColor = "";
    eDiv.style.fontWeight = "";
}


//highlight function for the bDiv - adds the div's text to the xDiv, highlights the div in yellow, bolds 
//the text, and clears all other divs
function bDivHighlight(){
    xDiv.innerHTML += "my ";
    bDiv.style.backgroundColor = "#FFFF00";
    bDiv.style.fontWeight = "900";
    aDiv.style.backgroundColor = "";
    aDiv.style.fontWeight = "";
    fDiv.style.backgroundColor = "";
    fDiv.style.fontWeight = "";
    cDiv.style.backgroundColor = "";
    cDiv.style.fontWeight = "";
    dDiv.style.backgroundColor = "";
    dDiv.style.fontWeight = "";
    eDiv.style.backgroundColor = "";
    eDiv.style.fontWeight = "";
}


//highlight function for the cDiv - adds the div's text to the xDiv, highlights the div in yellow, bolds 
//the text, and clears all other divs
function cDivHighlight(){
    xDiv.innerHTML += "name ";
    cDiv.style.backgroundColor = "#FFFF00";
    cDiv.style.fontWeight = "900";
    aDiv.style.backgroundColor = "";
    aDiv.style.fontWeight = "";
    bDiv.style.backgroundColor = "";
    bDiv.style.fontWeight = "";
    fDiv.style.backgroundColor = "";
    fDiv.style.fontWeight = "";
    dDiv.style.backgroundColor = "";
    dDiv.style.fontWeight = "";
    eDiv.style.backgroundColor = "";
    eDiv.style.fontWeight = "";
}


//highlight function for the dDiv - adds the div's text to the xDiv, highlights the div in yellow, bolds 
//the text, and clears all other divs
function dDivHighlight(){
    xDiv.innerHTML += "is ";
    dDiv.style.backgroundColor = "#FFFF00";
    dDiv.style.fontWeight = "900";
    aDiv.style.backgroundColor = "";
    aDiv.style.fontWeight = "";
    bDiv.style.backgroundColor = "";
    bDiv.style.fontWeight = "";
    cDiv.style.backgroundColor = "";
    cDiv.style.fontWeight = "";
    fDiv.style.backgroundColor = "";
    fDiv.style.fontWeight = "";
    eDiv.style.backgroundColor = "";
    eDiv.style.fontWeight = "";
}

//highlight function for the eDiv - adds the div's text to the xDiv, highlights the div in yellow, bolds 
//the text, and clears all other divs
function eDivHighlight(){
    xDiv.innerHTML += "mister ";
    eDiv.style.backgroundColor = "#FFFF00";
    eDiv.style.fontWeight = "900";
    aDiv.style.backgroundColor = "";
    aDiv.style.fontWeight = "";
    bDiv.style.backgroundColor = "";
    bDiv.style.fontWeight = "";
    cDiv.style.backgroundColor = "";
    cDiv.style.fontWeight = "";
    dDiv.style.backgroundColor = "";
    dDiv.style.fontWeight = "";
    fDiv.style.backgroundColor = "";
    fDiv.style.fontWeight = "";
}

//highlight function for the fDiv - adds the div's text to the xDiv, highlights the div in yellow, bolds 
//the text, and clears all other divs
function fDivHighlight(){
    xDiv.innerHTML += "code ";
    fDiv.style.backgroundColor = "#FFFF00";
    fDiv.style.fontWeight = "900";
    aDiv.style.backgroundColor = "";
    aDiv.style.fontWeight = "";
    bDiv.style.backgroundColor = "";
    bDiv.style.fontWeight = "";
    cDiv.style.backgroundColor = "";
    cDiv.style.fontWeight = "";
    dDiv.style.backgroundColor = "";
    dDiv.style.fontWeight = "";
    eDiv.style.backgroundColor = "";
    eDiv.style.fontWeight = "";
}