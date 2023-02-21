var bgcolor;
var button1;
var slider;
var input;

var img;
// var vid;
var theta = 0;
var detailS1;
var detailS1_p;
var detailS2;
var detailS2_p;
var detailX;
var detailX_p;
var detailY;
var detailY_p;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  img = loadImage('images/crystal.jpg');
  img1 = loadImage('images/ambitious.jpg');
  img2 = loadImage('images/pixel.jpg');
  img3 = loadImage('images/image1.png');
  img4 = loadImage('images/crystal.jpg');
  img5 = loadImage('images/metal.jpeg');
  img6 = loadImage('images/crystal6.jpg');
  // vid = createVideo(['images/vid1.mp4']);
  // vid.elt.muted = true;
  // vid.loop();
  // vid.hide();

  detailS1_p = createP(['size']);
  detailS1_p.position(100, 320);
  detailS1_p.addClass('detail_p');
  detailS1 = createSlider(110, 320, 180);
  detailS1.position(100, 370);
  detailS1.addClass('slider');

  detailS2_p = createP(['thickness']);
  detailS2_p.position(100, 400);
  detailS2_p.addClass('detail_p');
  detailS2 = createSlider(50, 200, 120);
  detailS2.position(100, 450);
  detailS2.addClass('slider');

  detailX_p = createP(['corner']);
  detailX_p.position(100, 480);
  detailX_p.addClass('detail_p');
  detailX = createSlider(3, 24, 9);
  detailX.position(100, 520);
  detailX.addClass('slider');

  detailY_p = createP(['roundness']);
  detailY_p.position(100, 550);
  detailY_p.addClass('detail_p');
  detailY = createSlider(3, 20, 0);
  detailY.position(100, 600);
  detailY.addClass('slider');

  button1_p = createP(['material']);
  button1_p.position(100, 630);
  button1_p.addClass('detail_p');

  button1 = createButton('ambious');
  button1.position(100, 675);
  button1.addClass('button');
  button1.mousePressed(changeTexture1);

  button2 = createButton('pixelated');
  button2.position(199, 675);
  button2.addClass('button');
  button2.mousePressed(changeTexture2);

  button3 = createButton('striped');
  button3.position(298, 675);
  button3.addClass('button');
  button3.mousePressed(changeTexture3);

  button4 = createButton('crystal');
  button4.position(100, 720);
  button4.addClass('button');
  button4.mousePressed(changeTexture4);

  button5 = createButton('metal');
  button5.position(199, 720);
  button5.addClass('button');
  button5.mousePressed(changeTexture5);

  button6 = createButton('diamond');
  button6.position(298, 720);
  button6.addClass('button');
  button6.mousePressed(changeTexture6);

}

function changeTexture1() {
  img = img1;
}

function changeTexture2() {
  img = img2;
}

function changeTexture3() {
  img = img3;
}

function changeTexture4() {
  img = img4;
}

function changeTexture5() {
  img = img5;
}

function changeTexture6() {
  img = img6;
}

function draw() {
  background(0);

  translate(0, 0, 0);
  push();
  rotateZ(theta * 0.08);
  rotateX(theta * 0.08);
  rotateY(theta * 0.08);

  var strokeColor = color(255, 255, 255, 60);
  noFill();
  stroke(strokeColor);
  sphere(380, 5, 4);
  pop();

  translate(0, 0, 0);
  push();
  rotateZ(190 + theta * mouseX * 0.0003);
  rotateX(50 + theta * mouseX * 0.0003);
  rotateY(100 + theta * mouseX * 0.0003);
  texture(img);
  stroke(255);
  torus(detailS1.value(), detailS2.value(), detailX.value(), detailY.value());
  pop();
  
  theta += 0.05;

  //fill(255, 0, 175);
  //ellipse(100, 100, slider.value(), slider.value());

  //nameP.html(input.value());
  //text(input.value(), 10, 20);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
