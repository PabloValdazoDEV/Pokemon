const rectUp = new RectUpNew(
    0,
    0,
    canvasWidth,
    (canvasHeigth / 3) * 2,
    [0, 225, 255]
  );
// //   const rectDown = new RectExternal(
// //     "Down",
// //     0,
// //     (canvasHeigth / 3) * 2,
// //     canvasWidth,
// //     (canvasHeigth / 3) * 1,
// //     "#275167"
// //   );
  
  
// //     const rectDownRigth = new RectExternal(
// //       "Select",
// //       canvasWidth / 2,
// //       (canvasHeigth / 3) * 2,
// //       canvasWidth / 2,
// //       (canvasHeigth / 3) * 1,
// //       "#fff"
// //     );
  
  
  
// //   const RectDownSelect = new RectSelect(
// //     rectDownRigth,
// //     rectDownRigth.posX,
// //     rectDownRigth.posY + 7,
// //     rectDownRigth.sizeWidth / 2 ,
// //     rectDownRigth.sizeHegth / 2 - 13,
// //     [255, 255, 255, 0]
// //   );





// //   const RectDownOption1 = [
// //     new RectDown(
// //       rectDownRigth,
// //       rectDownRigth.posX ,
// //       rectDownRigth.posY,
// //       rectDownRigth.sizeWidth / 2 ,
// //       rectDownRigth.sizeHegth / 2,
// //       [255, 255, 255, 0],
// //       "FIGHT",
      
// //     ),
// //     new RectDown(
// //       rectDownRigth,
// //       rectDownRigth.posX + RectDownSelect.sizeWidth ,
// //       rectDownRigth.posY,
// //       rectDownRigth.sizeWidth / 2 ,
// //       rectDownRigth.sizeHegth / 2,
// //       [255, 255, 255,0],
// //       "BAG",
      
// //     ),
// //     new RectDown(
// //       rectDownRigth,
// //       rectDownRigth.posX ,
// //       rectDownRigth.posY + RectDownSelect.sizeHegth ,
// //       rectDownRigth.sizeWidth / 2 ,
// //       rectDownRigth.sizeHegth / 2,
// //       [255, 255, 255,0],
// //       "POKEMON",
      
// //     ),
// //     new RectDown(
// //       rectDownRigth,
// //       rectDownRigth.posX + RectDownSelect.sizeWidth ,
// //       rectDownRigth.posY + RectDownSelect.sizeHegth ,
// //       rectDownRigth.sizeWidth / 2 ,
// //       rectDownRigth.sizeHegth / 2,
// //       [255, 255, 255,0],
// //       "RUN",
      
// //     ),
// //   ];
// //   const RectDownOption2 = [
// //     new RectDown(
// //       rectDown,
// //       rectDown.posX ,
// //       rectDown.posY + 16,
// //       rectDown.sizeWidth / 4 ,
// //       rectDown.sizeHegth / 4,
// //       [255, 255, 255, 0],
// //       "ATAQ1",
      
// //     ),
// //     new RectDown(
// //       rectDown,
// //       rectDown.posX + rectDown.sizeWidth / 3 ,
// //       rectDown.posY + 16,
// //       rectDown.sizeWidth / 4 ,
// //       rectDown.sizeHegth / 4,
// //       [255, 255, 255,0],
// //       "ATAQ2",
      
// //     ),
// //     new RectDown(
// //       rectDown,
// //       rectDown.posX ,
// //       rectDown.posY + rectDown.sizeHegth / 2 + 5,
// //       rectDown.sizeWidth / 4 ,
// //       rectDown.sizeHegth / 4,
// //       [255, 255, 255,0],
// //       "ATAQ3",
      
// //     ),
// //     new RectDown(
// //       rectDown,
// //       rectDown.posX + rectDown.sizeWidth / 3 ,
// //       rectDown.posY + rectDown.sizeHegth / 2 + 5 ,
// //       rectDown.sizeWidth / 4 ,
// //       rectDown.sizeHegth / 4,
// //       [255, 255, 255,0],
// //       "ATAQ4",
      
// //     ),
// //   ];
  
// //   const RectDownOption3 =
// //     new  RectDown(
// //       rectDown,
// //       rectDown.posX ,
// //       rectDown.posY + 10,
// //       rectDown.sizeWidth -  30 ,
// //       rectDown.sizeHegth,
// //       [255, 255, 255, 0],
// //       textoOnlyText
       
// //     );
  
  


//   const RectUpEnemy = new RectExternal("Enemy", rectUp.posX, rectUp.posY, rectUp.sizeWidth, rectUp.sizeHegth / 3 * 2, [255, 255, 255], 2)

  




  const rectDown = new RectDownNew(0, (canvasHeigth / 3) * 2, canvasWidth, canvasHeigth / 3, "#275167", textoOnlyText)
  
// //   const rectDown2 = new RectDownRidhtNew(canvasWidth / 2,(canvasHeigth / 3) * 2,canvasWidth / 2,(canvasHeigth / 3) * 1,"#fff");

  const rectDownRight = new RectDownRidhtNew(canvasWidth / 2,(canvasHeigth / 3) * 2,canvasWidth /  2,(canvasHeigth / 3) * 1,"#fff");
  const rectDownLeft = new RectDownRidhtNew(0,(canvasHeigth / 3) * 2,(canvasWidth / 3) * 2,(canvasHeigth / 3) * 1,"#fff");

  const rectDownRightSelect = new RectSelect(rectDownRight,rectDownRight.posX,rectDownRight.posY + 7,rectDownRight.sizeWidth / 2 ,rectDownRight.sizeHegth / 2 - 13,[255, 255, 255, 0]);
  const rectDownLeftSelect = new RectSelect(rectDownLeft,rectDownLeft.posX,rectDownLeft.posY + 7,rectDownLeft.sizeWidth / 2 ,rectDownLeft.sizeHegth / 2 - 13,[255, 255, 255, 0]);
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
      rectDownLeft.posX + rectDownLeftSelect.sizeWidth  - 25,
      rectDownLeft.posY,
      rectDownLeft.sizeWidth / 2,
      rectDownLeft.sizeHegth / 2,
      0,
      habilidades[1]
    ),
    new RectDownOptionNew(
      rectDownLeft.posX - 25,
      rectDownLeft.posY + rectDownLeftSelect.sizeHegth  + 5,
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