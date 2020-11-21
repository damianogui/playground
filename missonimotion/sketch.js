// For more: https://github.com/auduno/clmtrackr

var ctracker;
var emotionData;
var ec;
var xpos = 300;
var ypos = 400;

function setup() {



  // setup canvas
  var cnv = createCanvas(windowWidth,windowHeight);
  textSize(18);
  fill('#EFEFEF');
  rect(0,0,windowWidth,windowHeight);

  // setup camera capture

  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(windowWidth/2-200, 50);

  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);


  ec = new emotionClassifier();
  ec.init(emotionModel);
  emotionData = ec.getBlank();

}

function draw() {
  //clear();
  var cp = ctracker.getCurrentParameters();
  var er = ec.meanPredict(cp);
  fill('#EFEFEF');
  noStroke();
  rect(0,ypos,300,300);

  for (var i=0; i<er.length; i++) {
    fill(0);
    text(er[i].emotion+' '+nfc(er[i].value, 2), 20, ((i+1)*30)+ypos);
    if (i==0){fill('#92302E');}
    if (i==1){fill('#32306B');}
    if (i==2){fill('#7FA6C4');}
    if (i==3){fill('#C69870');}
    ellipse(xpos,10+((i+1)*30)+ypos,nfc(er[i].value, 2)*20);
    xpos+=0.3;
  }



  if (xpos > windowWidth){
    fill('#EFEFEF');
    noStroke();
    rect(0,ypos,windowWidth,300);
    xpos = 300;
  }
}
