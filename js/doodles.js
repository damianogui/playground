
function setup() {
  // Check if device is mobile (width <= 700px) OR has a coarse pointer (touch)
  if (window.matchMedia('(max-width: 700px)').matches || window.matchMedia('(pointer: coarse)').matches) {
    noLoop(); // Stop draw loop
    return; // Do not create canvas
  }

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-10');
  var main_container = select('#main_container');
  html = select('html');
}

function draw() {
  if (window.matchMedia('(max-width: 700px)').matches) return;

  background(255, 10);
  stroke(0, 0, 255);
  strokeWeight(2);
  line(pmouseX, pmouseY, mouseX, mouseY);
}