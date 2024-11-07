
const rectUp = new RectExternal(
    "Up",
    0,
    0,
    canvasWidth,
    (canvasHeigth / 3) * 2,
    [0, 225, 255]
  );
  const rectDown = new RectExternal(
    "Down",
    0,
    (canvasHeigth / 3) * 2,
    canvasWidth,
    (canvasHeigth / 3) * 1,
    "#275167"
  );
  
  
    const rectDownRigth = new RectExternal(
      "Select",
      canvasWidth / 2,
      (canvasHeigth / 3) * 2,
      canvasWidth / 2,
      (canvasHeigth / 3) * 1,
      "#fff"
    );
  
  
  
  const RectDownSelect = new RectSelect(
    rectDownRigth,
    rectDownRigth.posX,
    rectDownRigth.posY + 7,
    rectDownRigth.sizeWidth / 2 ,
    rectDownRigth.sizeHegth / 2 - 13,
    [255, 255, 255, 0]
  );
  const RectDownOption1 = [
    new RectDown(
      rectDownRigth,
      rectDownRigth.posX ,
      rectDownRigth.posY,
      rectDownRigth.sizeWidth / 2 ,
      rectDownRigth.sizeHegth / 2,
      [255, 255, 255, 0],
      "FIGHT",
      
    ),
    new RectDown(
      rectDownRigth,
      rectDownRigth.posX + RectDownSelect.sizeWidth ,
      rectDownRigth.posY,
      rectDownRigth.sizeWidth / 2 ,
      rectDownRigth.sizeHegth / 2,
      [255, 255, 255,0],
      "BAG",
      
    ),
    new RectDown(
      rectDownRigth,
      rectDownRigth.posX ,
      rectDownRigth.posY + RectDownSelect.sizeHegth ,
      rectDownRigth.sizeWidth / 2 ,
      rectDownRigth.sizeHegth / 2,
      [255, 255, 255,0],
      "POKEMON",
      
    ),
    new RectDown(
      rectDownRigth,
      rectDownRigth.posX + RectDownSelect.sizeWidth ,
      rectDownRigth.posY + RectDownSelect.sizeHegth ,
      rectDownRigth.sizeWidth / 2 ,
      rectDownRigth.sizeHegth / 2,
      [255, 255, 255,0],
      "RUN",
      
    ),
  ];
  const RectDownOption2 = [
    new RectDown(
      rectDown,
      rectDown.posX ,
      rectDown.posY + 16,
      rectDown.sizeWidth / 4 ,
      rectDown.sizeHegth / 4,
      [255, 255, 255, 0],
      "ATAQ1",
      
    ),
    new RectDown(
      rectDown,
      rectDown.posX + rectDown.sizeWidth / 3 ,
      rectDown.posY + 16,
      rectDown.sizeWidth / 4 ,
      rectDown.sizeHegth / 4,
      [255, 255, 255,0],
      "ATAQ2",
      
    ),
    new RectDown(
      rectDown,
      rectDown.posX ,
      rectDown.posY + rectDown.sizeHegth / 2 + 5,
      rectDown.sizeWidth / 4 ,
      rectDown.sizeHegth / 4,
      [255, 255, 255,0],
      "ATAQ3",
      
    ),
    new RectDown(
      rectDown,
      rectDown.posX + rectDown.sizeWidth / 3 ,
      rectDown.posY + rectDown.sizeHegth / 2 + 5 ,
      rectDown.sizeWidth / 4 ,
      rectDown.sizeHegth / 4,
      [255, 255, 255,0],
      "ATAQ4",
      
    ),
  ];
  
  const RectDownOption3 =
    new  RectDown(
      rectDown,
      rectDown.posX ,
      rectDown.posY + 10,
      rectDown.sizeWidth -  30 ,
      rectDown.sizeHegth,
      [255, 255, 255, 0],
      textoOnlyText
       
    );
  
  
  const RectUpEnemy = new RectExternal("Enemy", rectUp.posX, rectUp.posY, rectUp.sizeWidth, rectUp.sizeHegth / 3 * 2, [255, 255, 255], 2)

  




  const prueba = new RectDownNew(0, 100, canvasWidth, canvasHeigth / 3, "#275167", textoOnlyText)
  
//   const prueba2 = new RectDownRidhtNew(canvasWidth / 2,100,canvasWidth / 2,(canvasHeigth / 3) * 1,"#fff");

  const prueba3 = new RectDownRidhtNew(canvasWidth / 2,100,canvasWidth /  2,(canvasHeigth / 3) * 1,"#fff");
  const prueba4 = new RectDownRidhtNew(0,100,(canvasWidth / 3) * 2,(canvasHeigth / 3) * 1,"#fff");

  const prueba5 = new RectSelect(prueba3,prueba3.posX,prueba3.posY + 7,prueba3.sizeWidth / 2 ,prueba3.sizeHegth / 2 - 13,[255, 255, 255, 0]);
  const prueba6 = new RectSelect(prueba4,prueba4.posX,prueba4.posY + 7,prueba4.sizeWidth / 2 ,prueba4.sizeHegth / 2 - 13,[255, 255, 255, 0]);
