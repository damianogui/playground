
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-10');
  var main_container = select('#main_container');
  html = select('html');

}

function draw() {
  background(255,10);
  stroke(0,0,255);
  strokeWeight(2);
  line(pmouseX,pmouseY,mouseX,mouseY);
}