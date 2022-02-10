let tv = {
    bodySize: 300,
    bodyPos: 100,
    screenSize: 200,
    screenPos: 150,
    bodyColor: 'black',
    screenColor: 'grey'
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    drawTV(tv);
}

function drawTV(a){
    fill(a.bodyColor);
    rect(a.bodyPos, a.bodyPos, a.bodySize);
    if (mouseIsPressed) {
        fill(a.screenColor);
        rect(a.screenPos, a.screenPos, a.screenSize);
    }
}