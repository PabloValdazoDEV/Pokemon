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
  (canvasWidth / 7) * 5,
  (canvasHeigth / 3) * 1,
  "#fff"
);
const rectDownLeftPp = new RectDownRidhtNew(
  canvasWidth / 7 * 5,
  (canvasHeigth / 3) * 2,
  (canvasWidth / 7) * 2,
  (canvasHeigth / 3) * 1,
  "#fff"
);

const rectDownLeft2 = new RectDownOptionNew(
  rectDownLeftPp.posX - 45,
  rectDownLeftPp.posY,
  rectDownLeftPp.sizeWidth,
  rectDownLeftPp.sizeHeigth,
  0, 
  `PP        ${pokemonActual.Ataques[0].pp}/${pokemonActual.Ataques[0].ppTotal} \nTIPO/${pokemonActual.Ataques[0].tipo}`, 
  32

)

const rectDownRightSelect = new RectSelect(
  rectDownRight,
  rectDownRight.posX,
  rectDownRight.posY + 7,
  rectDownRight.sizeWidth / 2 ,
  rectDownRight.sizeHeigth / 2 - 13,
  [255, 255, 255, 0]
);
const rectDownLeftSelect = new RectSelect(
  rectDownLeft,
  rectDownLeft.posX,
  rectDownLeft.posY + 7,
  rectDownLeft.sizeWidth / 2 - 30,
  rectDownLeft.sizeHeigth / 2 - 13,
  [255, 255, 255, 0]
);



const rectDownOption1 = [
  new RectDownOptionNew(
    rectDownRight.posX,
    rectDownRight.posY,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHeigth / 2,
    0,
    menu[0], 45
  ),
  new RectDownOptionNew(
    rectDownRight.posX + rectDownRightSelect.sizeWidth,
    rectDownRight.posY,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHeigth / 2,
    0,
    menu[1], 45
  ),
  new RectDownOptionNew(
    rectDownRight.posX,
    rectDownRight.posY + rectDownRightSelect.sizeHeigth,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHeigth / 2,
    0,
    menu[2], 45
  ),
  new RectDownOptionNew(
    rectDownRight.posX + rectDownRightSelect.sizeWidth,
    rectDownRight.posY + rectDownRightSelect.sizeHeigth,
    rectDownRight.sizeWidth / 2,
    rectDownRight.sizeHeigth / 2,
    0,
    menu[3], 45
  ),
];

const rectDownOption2 = []
for (i = 0; i < 4; i++){
  if(i === 0){
    const ataque = new RectDownOptionNew(
    rectDownLeft.posX - 30,
    rectDownLeft.posY + 5,
    rectDownLeft.sizeWidth / 2 -20,
    rectDownLeft.sizeHeigth / 2,
      0,
      pokemonActual.Ataques[i].nombre
    )
    rectDownOption2.push(ataque)
  }
  if(i === 1){
    const ataque = new RectDownOptionNew(
    rectDownLeft.posX + rectDownLeftSelect.sizeWidth - 30,
    rectDownLeft.posY + 5,
    rectDownLeft.sizeWidth / 2 -20,
    rectDownLeft.sizeHeigth / 2,
      0,
      pokemonActual.Ataques[i].nombre
    )
    rectDownOption2.push(ataque)
  }
  if(i === 2){
    const ataque = new RectDownOptionNew(
    rectDownLeft.posX - 30,
    rectDownLeft.posY + rectDownLeftSelect.sizeHeigth + 5,
    rectDownLeft.sizeWidth / 2 -20,
    rectDownLeft.sizeHeigth / 2,
      0,
      pokemonActual.Ataques[i].nombre
    )
    rectDownOption2.push(ataque)
  }
  if(i === 3){
    const ataque = new RectDownOptionNew(
    rectDownLeft.posX + rectDownLeftSelect.sizeWidth - 30,
    rectDownLeft.posY + rectDownLeftSelect.sizeHeigth + 5,
    rectDownLeft.sizeWidth / 2-20,
    rectDownLeft.sizeHeigth / 2,
    0,
      pokemonActual.Ataques[i].nombre
    )
    rectDownOption2.push(ataque)
  }

}

function cargaDeImages(){
  
  rectUpBotLeft = new RectUpBotNew(100, rectUp.posY + rectUp.sizeHeigth - 144 , 150, 150, loadImage("assets/back.png"))

  rectUpBotRigth= new RectUpBotLifeNew(rectUp.posX + rectUp.sizeWidth - 300, rectUp.posY + rectUp.sizeHeigth - (37 * 2.5) , 104 * 2.5, 37 * 2.5, loadImage("assets/MiVida-100.png"), pokemonActual.vida)

  rectUpTopRigth = new RectUpBotNew(450, 20 , 150, 150, loadImage("assets/front.png"))

  rectUpTopLeft = new RectUpBotLifeNew(50, 20, (104 * 2.5), 29 * 2.5, loadImage("assets/EnemigoVida-100.png"), pokemonActual.vida)
  
}