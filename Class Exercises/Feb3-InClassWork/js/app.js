//Adam Cowher
//1/27/2022
//N220

let lastPoint = { x: 0, y: 0 };


function distance(p1, p2) {

    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;

    //return the distance
    Math.sqrt(dx * dx + dy * dy);
}

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(220);

    if (mouseIsPressed) {
        lastPoint.x = mouseX;
        lastPoint.y = mouseY;
    }

    let dist = distance(aou.x, aou.y);

    if (dist > 120) {
        stroke("#0000FF");
    } else {
        stroke("#000000");
    }
    line(lastPoint.x, lastPoint.y, mouseX, mouseY);
}