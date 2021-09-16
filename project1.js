var screen = 1;

//Screen 2 variables
var sc1Img1, sc2Img1, sc2Img2, sc2Img3, sc2Img4, sc2Img5, sc2Img6, sc4Img1, sc2Img7, sc3Img1;

//Screen 3 variables
var x1 = 15,
  x2 = 185,
  x3 = 15,
  x4 = 185;
var y1 = 50,
  y2 = 50,
  y3 = 145,
  y4 = 145;
var roboFont;
var img1, img2, img3, img4;
var img1Draggable = true,
  img2Draggable = true,
  img3Draggable = true,
  img4Draggable = true;
var correctPlacement = 0,
  rectY = 250,
  quesY = 470,
  ans1Y = 500,
  ans2Y = 500,
  ans3Y = 550,
  ans4Y = 550,
  correctAns = 0;

function preload() {
  // roboFont = loadFont('./Roboto-Light.ttf');
  img1 = createImg('./2.png');
  img2 = createImg('./1.png');
  img3 = createImg('./3.png');
  img4 = createImg('./4.png');
  sc2Img1 = createImg('./continents/North America.png');
  sc2Img2 = createImg('./continents/Europe.png');
  sc2Img3 = createImg('./continents/Africa.png');
  sc2Img4 = createImg('./continents/Asia.png');
  sc2Img5 = createImg('./continents/South America.png');
  sc2Img6 = createImg('./continents/Australia.png');
  sc4Img1 = createImg('./Final.png');
  sc1Img1 = createImg('./funwithflags logo-01.png');
  sc2Img7 = createImg('./back-03.png');
  sc3Img1 = createImg('./back-03.png');
}

function setup() {
  createCanvas(360, 640);
  ellipseMode(CORNER);
  // textFont(roboFont);
  textFont('Roboto-Light');
  textSize(30);
  textAlign(CENTER);
  img1.hide();
  img2.hide();
  img3.hide();
  img4.hide();
  sc2Img1.hide();
  sc2Img2.hide();
  sc2Img3.hide();
  sc2Img4.hide();
  sc2Img5.hide();
  sc2Img6.hide();
  sc4Img1.hide();
  sc2Img7.hide();
  sc3Img1.hide();
  sc1Img1.hide();
}

function draw() {
  // screen = 3;
  if (screen == 1) {
    screen1();
  } else if (screen == 2) {
    screen2();
  } else if (screen == 3) {
    screen3();
  } else if (screen == 4) {
    screen4();
  }
}

function screen1() {
  background(37, 38, 66);
  // fill('white');
  image(sc1Img1, 5, 50, 350, 250);
  // ellipse(70, 50, 220, 220);

  fill(37, 38, 66);
  stroke(239, 210, 138);
  rect(50, 370, 260, 50, 25, 25, 25, 25);
  fill(239, 210, 138);
  // text('Play Game', 107, 405);
  text('Play Game', 55, 380, 260, 50);
}

function mousePressed() {
  if (screen == 1) {
    if (mouseX >= 50 && mouseX <= 310 && mouseY >= 370 && mouseY <= 420) {
      screen = 2;
    }
  } else if (screen == 2) {
    if (mouseX >= 180 && mouseX <= 355 && mouseY >= 260 && mouseY <= 384) {
      screen = 3;
    } else if (mouseX >= 10 && mouseX <= 40 && mouseY >= 48 && mouseY <= 78) {
      screen = 1;
    }
  } else if (screen == 3) {
    if (mouseX >= 10 && mouseX <= 170 && mouseY >= ans1Y && mouseY <= ans1Y + 40) {
      screen = 4;
    } else if (mouseX >= 10 && mouseX <= 35 && mouseY >= 12 && mouseY <= 37) {
      screen = 2;
    }
  }
}

function screen2() {
  background(37, 38, 66);
  noStroke();
  fill(239, 210, 138);
  text('Select Continent', 0, 50, 360, 50);

  image(sc2Img7, 10, 48, 30, 30);

  image(sc2Img1, 0, 100, 175, 124);
  textSize(12);
  text("North America", 0, 230, 175, 30);
  image(sc2Img2, 180, 100, 175, 124);
  text("Europe", 180, 230, 175, 30);

  image(sc2Img3, 0, 260, 175, 124);
  text("Africa", 0, 390, 175, 30);
  image(sc2Img4, 180, 260, 175, 124);
  text("Asia", 180, 390, 175, 30);

  image(sc2Img5, 0, 420, 175, 124);
  text("South America", 0, 550, 175, 30);
  image(sc2Img6, 180, 420, 175, 124);
  text("Australia", 180, 550, 175, 30);
  textSize(30);
}

function screen3() {
  background(37, 38, 66);
  // image(sc3Img1, 10, 52, 30, 30);
  noStroke();

  textSize(20);
  fill(239, 210, 138);
  text('Asia - ' + correctAns + '/48', 0, 10, 360, 30);
  image(sc3Img1, 10, 12, 25, 25);
  textSize(30);

  fill(244, 240, 223);
  rect(20, rectY, 320, 170);

  image(img1, x1, y1, 160, 85);
  image(img2, x2, y2, 160, 85);
  image(img3, x3, y3, 160, 85);
  image(img4, x4, y4, 160, 85);
  if ((x1 >= 175) && (x1 <= 335) && (y1 >= 335) && (y1 <= 420)) {
    x1 = 180;
    y1 = 335;
    correctPlacement += img1Draggable ? 1 : 0;
    img1Draggable = false;
  }

  if ((x2 >= 15) && (x2 <= 175) && (y2 >= 335) && (y2 <= 420)) {
    x2 = 20;
    y2 = 335;
    correctPlacement += img2Draggable ? 1 : 0;
    img2Draggable = false;
  }

  if ((x3 >= 175) && (x3 <= 335) && (y3 >= 250) && (y3 <= 335)) {
    x3 = 180;
    y3 = 250;
    correctPlacement += img3Draggable ? 1 : 0;
    img3Draggable = false;
  }

  if ((x4 >= 15) && (x4 <= 175) && (y4 >= 250) && (y4) <= 335) {
    x4 = 20;
    y4 = 250;
    correctPlacement += img4Draggable ? 1 : 0;
    img4Draggable = false;
  }

  if (correctPlacement == 4) {
    correctAns = 1;
    rectY -= 5;
    quesY -= 5;
    ans1Y -= 5;
    ans2Y -= 5;
    ans3Y -= 5;
    ans4Y -= 5;
    y1 -= 5;
    y2 -= 5;
    y3 -= 5;
    y4 -= 5;
    if (rectY < 50) {
      correctPlacement += 5;
    }
  }

  if ((correctPlacement >= 4)) {
    textSize(24);
    text("Which country's flag is this?", 10, quesY, 320, 30);
    stroke(239, 210, 138);
    fill(37, 38, 66);
    rect(10, ans1Y + 10, 155, 40, 20, 20, 20, 20);
    rect(180, ans2Y + 10, 155, 40, 20, 20, 20, 20);
    rect(10, ans3Y + 15, 155, 40, 20, 20, 20, 20);
    rect(180, ans4Y + 15, 155, 40, 20, 20, 20, 20);
    fill(239, 210, 138);
    text("India", 10, ans1Y + 20, 160, ans1Y + 10);
    text("Japan", 180, ans2Y + 20, 160, ans2Y + 10);
    text("China", 10, ans3Y + 25, 160, ans3Y + 10);
    text("Singapore", 180, ans4Y + 25, 160, ans4Y + 10);
  }
}

function screen4() {
  background(37, 38, 66);

  textSize(30);
  fill(239, 210, 138);
  text('Asia - 48/48', 0, 100, 360, 30);
  image(sc4Img1, 26, 240, 307.5, 167);
}

function mouseDragged() {
  if (screen == 3) {
    if ((mouseX >= x1) && (mouseX <= x1 + 160) && (mouseY >= y1) && (mouseY <= y1 + 85) && img1Draggable) {
      x1 = mouseX - 80;
      y1 = mouseY - 42.5;
    } else if ((mouseX >= x2) && (mouseX <= x2 + 160) && (mouseY >= y2) && (mouseY <= y2 + 85) && img2Draggable) {
      x2 = mouseX - 80;
      y2 = mouseY - 42.5;
    } else if ((mouseX >= x3) && (mouseX <= x3 + 160) && (mouseY >= y3) && (mouseY <= y3 + 85) && img3Draggable) {
      x3 = mouseX - 80;
      y3 = mouseY - 42.5;
    } else if ((mouseX >= x4) && (mouseX <= x4 + 160) && (mouseY >= y4) && (mouseY <= y4 + 85) && img4Draggable) {
      x4 = mouseX - 80;
      y4 = mouseY - 42.5;
    }
  }
}
