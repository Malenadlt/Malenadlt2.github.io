var x = 0;
var direction = 1;
var mySound;
var analyzer;

function preload() {
  // we have included both an .ogg file and an .mp3 file
  soundFormats('ogg', 'mp3');

  // if mp3 is not supported by this browser,
  // loadSound will load the ogg file
  // we have included with our sketch
  mySound = loadSound('Turtle.mp3');
}

function setup() {
createCanvas(windowWidth,windowHeight);
mySound.setVolume(0.1);
mySound.play();
analyzer = new p5.Amplitude();
analyzer.setInput(mySound);
}

function draw(){
  var rms = analyzer.getLevel() * 10000;
  background(255);
  noStroke();

  fill("lightblue");
  var growing = rms + height/2;

  rect(0,height-growing,width,growing);

fill(0,255,0);
 x = x + direction;
 if(x>width || x < 0 ) {
 direction = direction * -1; }

    arc(x+240, 326, 200, 200, PI, TWO_PI);
    arc(x-240, 325, 200, 200, TWO_PI, PI*.5)
    arc(x+40, 325, 200, 200, TWO_PI, PI*.5) // x (horizontal location), y (vertical location), width, height, arc, arc
fill(0,147,68);
arc(x, 326, 280, 280, PI, TWO_PI); // first two numbers change position

console.log("Analyzer: " + rms);
console.log("Current Second: " + second());
console.log("Current Minute: " + minute());
}
