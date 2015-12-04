var x = 0;
var direction = 1;

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw(){

  background(255);
fill("lightblue");
// stroke("blue");
// strokeWeight(10);
noStroke();
rect(-10, height/2, width+20, height);
fill(0,255,0);
 x = x + direction;
 if(x>width || x < 0 ) {
 direction = direction * -1; }

    arc(x+240, 326, 200, 200, PI, TWO_PI);
    arc(x-240, 325, 200, 200, TWO_PI, PI*.5)
    arc(x+40, 325, 200, 200, TWO_PI, PI*.5) // x (horizontal location), y (vertical location), width, height, arc, arc
fill(0,147,68);
arc(x, 326, 280, 280, PI, TWO_PI); // first two numbers change position
}
