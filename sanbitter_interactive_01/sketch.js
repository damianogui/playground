let sfondo;
let mano;
let sanbitter;
let berry;
let berry3;
let ghiaccio1;
let ghiaccio2;
let lime;
let fragola;
let cocktail;
let mousev;
let bocca;

var props = [];

var easing = 0.05;

var targetX;
var targetY;

function preload() {
  sfondo = createImg("/props/sfondo.png");
  berry3 = createImg("/props/berry3.png");
  lime = createImg("/props/lime.png");
  fragola = createImg("/props/fragola.png");
  cocktail = createImg("/props/cocktail.png");
  mano = createImg("/props/mano.png");
  sanbitter = createImg("/props/sanbitter.gif");
  ghiaccio1 = createImg("/props/ghiaccio1.png");
  ghiaccio2 = createImg("/props/ghiaccio2.png");
  bocca = createImg("/props/bocca.png");
  berry1 = createImg("/props/berry.png");
  berry2 = createImg("/props/berry.png");


}


function setup() {
  createCanvas(windowWidth, windowHeight);

  props.push(new Prop(berry3,0,0,0.9));
  props.push(new Prop(lime,100,-300,1.3));
  props.push(new Prop(mano,0,150,1));
  props.push(new Prop(cocktail,200,-100,1));
  props.push(new Prop(sanbitter,100,-80,1.1));
  props.push(new Prop(berry1,200,0,1.3));
  props.push(new Prop(berry2,100,200,0.9));
  props.push(new Prop(ghiaccio1,50,50,1.1));
  props.push(new Prop(ghiaccio2,250,50,1));
  props.push(new Prop(fragola,300,-100,1.1));
  props.push(new Prop(bocca,300,0,1.1));

}

function draw() {

  sfondo.position(0,0);
  sfondo.size(windowWidth,windowHeight);
  //sfondo.size(0,0);


  targetX = windowWidth/2;
  targetY = windowHeight/2;
  targetX = mouseX; targetY = mouseY;

  if (rotationX != 0){
  targetX = (rotationY*2); targetY = (rotationX*2+windowHeight/2);
}


  fill(255);



  for (var i = 0; i < props.length; i++){
    props[i].display();
  }





}


function Prop(img,xshift,yshift, distance){
  this.img = img;
  this.x = windowWidth/2;
  this.y = windowHeight/2;
  this.xshift = xshift;
  this.yshift = yshift;
  this.dx = 0;
  this.dy = 0;
  this.distance = distance;


  this.display = function(){

    this.dx = targetX - this.x;
    this.x += this.dx * easing;

    this.dy = targetY - this.y;
    this.y += this.dy * easing;

    this.img.position((this.x*this.distance)-this.img.width/2+this.xshift,(this.y*this.distance)-this.img.height/2+this.yshift);

  }
}
