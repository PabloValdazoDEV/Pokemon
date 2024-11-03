let canvasWidth = 700;
let canvasHeigth = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeigth);
}

function draw() {
  background(220);
  rectUp.draw();
  rectDown.draw();
  rectDownMovi.draw();
}

class CuadradosExternos {
  constructor(upOrDown, posX, posY, sizeWidth, sizeHegth, color) {
    this.upOrDown = upOrDown;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
  }
  draw() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth, this.sizeHegth);
  }
}

class CuadradosInternos {
  constructor(dad, posX, posY, sizeWidth, sizeHegth, color) {
    this.dad = dad;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
  }
  draw() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth, this.sizeHegth);
  }
}

function limit() {
  if (rectDownMovi.posX < rectDown.posX + canvasWidth / 2) {
    rectDownMovi.posX = rectDown.posX + canvasWidth / 2;
  }

  if (
    rectDownMovi.posX + rectDownMovi.sizeWidth >
    rectDown.posX + rectDown.sizeWidth
  ) {
    rectDownMovi.posX =
      rectDown.posX + rectDown.sizeWidth - rectDownMovi.sizeWidth;
  }

  if (rectDownMovi.posY < rectDown.posY) {
    rectDownMovi.posY = rectDown.posY;
  }

  if (
    rectDownMovi.posY + rectDownMovi.sizeHegth >
    rectDown.posY + rectDown.sizeHegth
  ) {
    rectDownMovi.posY =
      rectDown.posY + rectDown.sizeHegth - rectDownMovi.sizeHegth;
  }
}

function keyPressed() {
  if (key === "ArrowUp") {
    rectDownMovi.posY -= rectDownMovi.sizeHegth;
  }
  if (key === "ArrowDown") {
    rectDownMovi.posY += rectDownMovi.sizeHegth;
  }
  if (key === "ArrowRight") {
    rectDownMovi.posX += rectDownMovi.sizeWidth;
  }
  if (key === "ArrowLeft") {
    rectDownMovi.posX -= rectDownMovi.sizeWidth;
  }
  if (key === "Enter" || key === " ") {
    console.log("hola");
  }

  limit();
}

const rectUp = new CuadradosExternos(
  "Up",
  0,
  0,
  canvasWidth,
  (canvasHeigth / 4) * 3,
  [0, 225, 255]
);
const rectDown = new CuadradosExternos(
  "Down",
  0,
  (canvasHeigth / 4) * 3,
  canvasWidth,
  (canvasHeigth / 4) * 1,
  [225, 0, 255]
);
const rectDownMovi = new CuadradosInternos(
  rectDown,
  canvasWidth / 2,
  (canvasHeigth / 4) * 3,
  canvasWidth / 4,
  canvasHeigth / 8,
  [255, 255, 255]
);
