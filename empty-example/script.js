//Author: Dylan Collins
//Date Started: 06/10/22
//Purpose of Program: Assignment one - House

var moonStartingPos = -200;
var imageBackground;
let y = 0;
let cnvX = 2000 / 2;
let cnvY = 1000 / 2;
let vel = 15;

function setup() {
  //Co-ord print function call
  mouseClicked();
  //create a 2000px x 1000px canvas
  createCanvas(2000, 1000);
  //Load background image
  imageBackground = loadImage("nightsky.png");
}

function draw() {
  background(imageBackground);
  //Moon move & reset
  moonStartingPos = moonStartingPos + 3;
  if (moonStartingPos >= width) {
    moonStartingPos = -200;
  }
  moonObject();
  road();
  cloudPos();
  cloudDraw();
  house();
  witch();
  spaceCraft();
  streetLamp();
  keyPressed();
}

function road() {
  //Road base
  strokeWeight(0);
  fill(155);
  rect(0, 900, 2000, 100);
  //Road lines
  var linePos1 = 50;
  var linePos2 = 0;
  for (count = 0; count <= 21; count++) {
    stroke(255);
    strokeWeight(15);
    line(linePos1, 950, linePos2, 950);
    linePos1 = linePos1 + 100;
    linePos2 = linePos2 + 100;
  }
  //Curb
  strokeWeight(0);
  fill(100);
  rect(0, 880, 2000, 20);
}

function house() {
  //chimney
  fill(130, 121, 98);
  rect(150, 300, 75, 100);
  fill(25);
  rect(142, 290, 90, 20);
  //wall elements
  fill(130, 121, 98);
  rect(100, 480, 550, 400);
  rect(650, 630, 250, 250);
  //wall shadow with alpha
  fill(33, 33, 33, 100);
  triangle(650, 880, 650, 630, 700, 880);
  //roof elements
  fill(25);
  triangle(50, 480, 360, 200, 700, 480);
  triangle(650, 480, 650, 630, 950, 630);
  //door elements
  //door frame
  fill(180);
  rect(325, 680, 125, 200);
  //door proper
  fill(54, 22, 4);
  rect(330, 685, 115, 195);
  //door knob
  fill(255, 196, 0);
  ellipse(350, 800, 15, 15);
  //letterbox
  rect(365, 825, 50, 10);
  //door window
  arc(385, 750, 75, 75, 3.1, 0);
  windows();
  bush();
  bricks();
}

function bush() {
  var xpos1 = 150;
  var xpos2 = 200;
  var xpos3 = 100;
  var xpos4 = 110;
  var moveFactor = 450;
  fill(0, 99, 38);
  ellipse(xpos1, 830, 100, 100);
  ellipse(xpos2, 835, 100, 90);
  ellipse(xpos3, 855, 50, 50);
  ellipse(xpos4, 835, 50, 50);
  ellipse(xpos1 + moveFactor, 830, 100, 100);
  ellipse(xpos2 + moveFactor, 835, 100, 90);
  ellipse(xpos3 + moveFactor, 855, 50, 50);
  ellipse(xpos4 + moveFactor, 835, 50, 50);
}

function windows() {
  var xpos1 = 180,
    xpos2 = 185,
    xpos3 = 170;
  var moveFactor = 325;
  var winR, winG, winB;
  if (mouseX >= 330 && mouseX <= 444 && mouseY >= 685 && mouseY <= 879) {
    winR = random(255);
    winG = random(255);
    winB = random(255);
  } else {
    winR = 118;
    winG = 150;
    winB = 232;
  }
  fill(180);
  rect(xpos1, 680, 85, 170);
  fill(winR, winG, winB);
  rect(xpos2, 685, 75, 160);
  fill(180);
  rect(xpos3, 840, 110, 15);
  fill(180);
  rect(xpos1 + moveFactor, 680, 85, 170);
  fill(winR, winG, winB);
  rect(xpos2 + moveFactor, 685, 75, 160);
  fill(180);
  rect(xpos3 + moveFactor, 840, 110, 15);
  fill(180);
  rect(820, 670, 80, 170);
  fill(winR, winG, winB);
  rect(825, 675, 75, 160);
  fill(180);
  rect(815, 830, 100, 15);
}

function bricks() {
  fill(59, 44, 29);
  rect(135, 565, 50, 20, 5);
  rect(160, 589, 50, 20, 5);
  rect(445, 635, 50, 20, 5);
  rect(420, 610, 50, 20, 5);
  rect(475, 610, 50, 20, 5);
}

function mouseClicked() {
  print(mouseX + "," + mouseY);
}

function witch() {
  fill(46, 125, 37);
  ellipse(535, 345, 50, 75);
  triangle(510, 345, 560, 345, 535, 425);
  fill(255);
  ellipse(524, 345, 20, 15);
  ellipse(546, 345, 20, 15);
  fill(255, 0, 0);
  ellipse(526, 345, 10, 14);
  ellipse(548, 345, 10, 14);
  fill(97, 191, 86);
  ellipse(555, 360, 40, 10);
  ellipse(540, 358, 15, 12);
  fill(46, 125, 37);
  ellipse(538, 364, 5, 5);
  ellipse(570, 358, 3, 3);
  fill(0);
  quad(527, 378, 544, 378, 537, 395, 529, 395);
  fill(85, 0, 128);
  ellipse(536, 312, 125, 20);
  triangle(500, 310, 570, 310, 537, 210);
}

function moonObject() {
  fill(251, 255, 194);
  ellipse(moonStartingPos, 300, 275, 275);
  fill(207, 207, 151);
  ellipse(moonStartingPos + 50, 375, 45, 50);
  ellipse(moonStartingPos + 25, 320, 35, 40);
}

function spaceCraft() {
  fill(random(255), random(255), random(255), 50);
  quad(1264, 312, 1329, 312, 357, 206, 573, 480);
  fill(69, 168, 255);
  ellipse(1300, 280, 120, 90);
  fill(102, 118, 140);
  ellipse(1300, 260, 300, 90);
  fill(134, 152, 179);
  ellipse(1300, 235, 350, 100);
  fill(69, 168, 255);
  ellipse(1300, 200, 190, 100);
  fill(random(255), random(255), random(255));
  ellipse(1170, 225, 45, 20);
  ellipse(1422, 225, 45, 20);
  ellipse(1221, 256, 45, 20);
  ellipse(1372, 256, 45, 20);
  ellipse(1297, 266, 45, 20);
}

function cloudDraw() {}

function cloudsObject() {
  fill(255, 255, 255, 240);
  ellipse(830, 137, 150, 100);
  ellipse(50 + 830, 137 - 45, 150, 100);
  ellipse(100 + 830, 137 - 0, 160, 100);
  ellipse(150 + 830, 137 - 30, 100, 75);
  ellipse(830 - 40, 137 + 30, 110, 75);
  ellipse(830 + 140, 137 + 35, 60, 50);
}

function cloudPos() {
  var mouseOffsetX = mouseX / 100;
  var mouseOffsetY = mouseY / 100;
  displayClouds(830 - mouseOffsetX, 137 - mouseOffsetY);
  displayClouds(94 + mouseOffsetX, 288 + mouseOffsetY);
  displayClouds(1260 - mouseOffsetX, 518 - mouseOffsetY);
  displayClouds(1801 + mouseOffsetX, 78 + mouseOffsetY);
}

function displayClouds(xmod, ymod) {
  var xmod;
  var ymod;
  fill(255, 255, 255, 240);
  ellipse(xmod, ymod, 150, 100);
  ellipse(50 + xmod, ymod - 45, 150, 100);
  ellipse(100 + xmod, ymod - 0, 160, 100);
  ellipse(150 + xmod, ymod - 30, 100, 75);
  ellipse(xmod - 40, ymod + 30, 110, 75);
  ellipse(xmod + 140, ymod + 35, 60, 50);
}

function streetLamp() {
  var lampDetailX = 970;
  fill(38, 38, 38);
  rect(955, 860, 80, 20, 5);
  rect(965, 680, 60, 200);
  rect(955, 660, 80, 20, 5);
  rect(985, 430, 20, 250);
  for (count = 1; count <= 6; count++) {
    fill(18, 18, 18);
    rect(lampDetailX, 685, 5, 170);
    lampDetailX = lampDetailX + 10;
  }
  fill(255, 244, 163);
  ellipse(995, 435, 75, 55);
  fill(38, 38, 38);
  rect(955, 405, 80, 30, 5);
  fill(255, 244, 163, 75);
  quad(958, 435, 1035, 435, 1153, 949, 853, 949);
  ellipse(1005, 946, 300, 100);
  //996,Y= 948
}

function keyPressed() {
  fill(0, 255, 0);
  rect(cnvX, cnvY, 100, 100, 5);
  if (keyIsDown(UP_ARROW)) {
    cnvY -= vel;
  }
  if (keyIsDown(DOWN_ARROW)) {
    cnvY += vel;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    cnvX += vel;
  }
  if (keyIsDown(LEFT_ARROW)) {
    cnvX -= vel;
  }

  if (cnvX >= 2000) {
    cnvX = 1;
  } else if (cnvX <= -50) {
    cnvX = 2000;
  }

  if (cnvY >= 1000) {
    cnvY = 0;
  } else if (cnvY <= -50) {
    cnvY = 1000;
  }
}
