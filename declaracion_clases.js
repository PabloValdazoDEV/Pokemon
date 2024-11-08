const rectUp = new RectUpNew(
  0,
  0,
  canvasWidth,
  (canvasHeigth / 3) * 2,
  [0, 225, 255]
);
const rectDown = new RectDownNew(
  0,
  (canvasHeigth / 3) * 2,
  canvasWidth,
  canvasHeigth / 3,
  "#275167",
  textoOnlyText
);

const rectDownRight = new RectDownRidhtNew(
  canvasWidth / 2,
  (canvasHeigth / 3) * 2,
  canvasWidth / 2,
  (canvasHeigth / 3) * 1,
  "#fff"
);
const rectDownLeft = new RectDownRidhtNew(
  0,
  (canvasHeigth / 3) * 2,
  (canvasWidth / 3) * 2,
  (canvasHeigth / 3) * 1,
  "#fff"
);

const rectDownRightSelect = new RectSelect(
  rectDownRight,
  rectDownRight.posX,
  rectDownRight.posY + 7,
  rectDownRight.sizeWidth / 2,
  rectDownRight.sizeHegth / 2 - 13,
  [255, 255, 255, 0]
);
const rectDownLeftSelect = new RectSelect(
  rectDownLeft,
  rectDownLeft.posX,
  rectDownLeft.posY + 7,
  rectDownLeft.sizeWidth / 2,
  rectDownLeft.sizeHegth / 2 - 13,
  [255, 255, 255, 0]
);
const rectDownOption1 = [
  new RectDownOptionNew(
    rectDownRight.posX,
    rectDownRight.posY,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHegth / 2,
    0,
    menu[0]
  ),
  new RectDownOptionNew(
    rectDownRight.posX + rectDownRightSelect.sizeWidth,
    rectDownRight.posY,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHegth / 2,
    0,
    menu[1]
  ),
  new RectDownOptionNew(
    rectDownRight.posX,
    rectDownRight.posY + rectDownRightSelect.sizeHegth,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHegth / 2,
    0,
    menu[2]
  ),
  new RectDownOptionNew(
    rectDownRight.posX + rectDownRightSelect.sizeWidth,
    rectDownRight.posY + rectDownRightSelect.sizeHegth,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHegth / 2,
    0,
    menu[3]
  ),
];
const rectDownOption2 = [
  new RectDownOptionNew(
    rectDownLeft.posX - 25,
    rectDownLeft.posY,
    rectDownLeft.sizeWidth / 2,
    rectDownLeft.sizeHegth / 2,
    0,
    habilidades[0]
  ),
  new RectDownOptionNew(
    rectDownLeft.posX + rectDownLeftSelect.sizeWidth - 25,
    rectDownLeft.posY,
    rectDownLeft.sizeWidth / 2,
    rectDownLeft.sizeHegth / 2,
    0,
    habilidades[1]
  ),
  new RectDownOptionNew(
    rectDownLeft.posX - 25,
    rectDownLeft.posY + rectDownLeftSelect.sizeHegth + 5,
    rectDownLeft.sizeWidth / 2,
    rectDownLeft.sizeHegth / 2,
    0,
    habilidades[2]
  ),
  new RectDownOptionNew(
    rectDownLeft.posX + rectDownLeftSelect.sizeWidth - 25,
    rectDownLeft.posY + rectDownLeftSelect.sizeHegth + 5,
    rectDownLeft.sizeWidth / 2,
    rectDownLeft.sizeHegth / 2,
    0,
    habilidades[3]
  ),
];
