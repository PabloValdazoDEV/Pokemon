let canvasWidth = 700;
let canvasHeigth = 400;
let option1 = true;
let option2 = false;
let onlyText = false;
let fontPokemon;
let img;
let ok = false

// Precargar recuersos
function preload() {
  fontPokemon = loadFont("assets/pokemon_pixel_font.ttf");
  img = [loadImage("assets/flecha_OK.png")];
}

// Establecer dimensiones del canvas
function setup() {
  createCanvas(canvasWidth, canvasHeigth);
}

//Pintar
function draw() {
  background(220);
  rectUp.draw();
  rectDown.draw();
  

  rectDownRigth.draw();
  RectDownSelect.draw();

 
if(option1){
  RectDownOption1.forEach((w)=>w.draw())
}else if (option2 ){
  RectDownOption2.forEach((w)=>w.draw())
}else {
  RectDownOption3.draw()
}
  
  
}

class RectExternal {
  constructor(upOrDown, posX, posY, sizeWidth, sizeHegth, color) {
    this.upOrDown = upOrDown;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
  }
  draw() {
    if (this.upOrDown === "Down") {
      let borderWidth1 = 7;
      let borderWidth2 = 5;
      let borderWidth3 = 3;

      strokeWeight(borderWidth1);
      stroke("#27302F");
      fill("#27302F");
      rect(this.posX, this.posY, this.sizeWidth, this.sizeHegth, 0);


      strokeWeight(borderWidth2);
      stroke("#C5AA46");
      fill("#C5AA46");
      rect(
        this.posX + borderWidth1,
        this.posY + borderWidth1,
        this.sizeWidth - 2 * (borderWidth1 + 1),
        this.sizeHegth - 2 * (borderWidth1 + 1),
        8
      );

      strokeWeight(borderWidth3);
      stroke("#EAEFF9");
      fill(this.color);
      rect(
        this.posX + borderWidth1 + borderWidth2,
        this.posY + borderWidth1 + borderWidth2,
        this.sizeWidth - 2 * (borderWidth1 + borderWidth2 + 1),
        this.sizeHegth - 2 * (borderWidth1 + borderWidth2 + 1),
        4
      );
    } else if (this.upOrDown === "Select") {
      let borderWidth1 = 7; 
      let borderWidth2 = 5; 

      strokeWeight(borderWidth1);
      stroke("#27302F");
      fill("#27302F");
      rect(this.posX, this.posY, this.sizeWidth, this.sizeHegth, 0);

      strokeWeight(borderWidth2);
      stroke("#6B687F");
      fill("#6B687F");
      rect(
        this.posX + borderWidth1,
        this.posY + borderWidth1,
        this.sizeWidth - 2 * (borderWidth1 + 1),
        this.sizeHegth - 2 * (borderWidth1 + 1),
        8
      );

      fill(this.color);
      noStroke();
      rect(
        this.posX + borderWidth1 + borderWidth2 ,
        this.posY + borderWidth1 + borderWidth2 ,
        this.sizeWidth - 2 * (borderWidth1 + borderWidth2 + 1),
        this.sizeHegth - 2 * (borderWidth1 + borderWidth2 + 1),
        4
      );

    } else {
      fill(this.color);
      noStroke();
      rect(this.posX, this.posY, this.sizeWidth, this.sizeHegth);

      fill(0);
    }
  }
}

class RectSelect {
  constructor(dad, posX, posY, sizeWidth, sizeHegth, color, text) {
    this.dad = dad;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
    this.text = text;
  }
  draw() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth - 30, this.sizeHegth - 30);
    fill(0);
    image(img[0], this.posX + 25, this.posY + this.sizeHegth / 2 - 10, 15, 30);
  }
}
class RectDown {
  constructor(dad, posX, posY, sizeWidth, sizeHegth, color, text) {
    this.dad = dad;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
    this.text = text;
    this.currentTextIndex = 0; // Índice para efecto de máquina de escribir
    this.textSpeedCounter = 0; // Contador de velocidad
    this.textSpeedDelay = 1; // Ajusta este valor para controlar la velocidad

  }

  draw() {
    
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth - 30, this.sizeHegth - 30);

    fill(0);
    textFont(fontPokemon);
    textSize(40);

    if (this.sizeWidth === canvasWidth - 30) {
      fill(255);
      textAlign(LEFT, TOP);
      text(
        this.text.substring(0, this.currentTextIndex), // Mostrar hasta el índice actual
        this.posX + 30,
        this.posY + 15
      );

      // Incrementa el índice del texto progresivamente para el efecto de escritura
      if (this.textSpeedCounter >= this.textSpeedDelay) {
        if (this.currentTextIndex < this.text.length) {
          this.currentTextIndex++; // Incrementa el índice
        } else {
          if(!ok){
            ok = true;
            console.log("hola")
          }
           // Establece opt en true cuando termina el texto
        }
        this.textSpeedCounter = 0; // Reinicia el contador
      } else {
        this.textSpeedCounter++; // Incrementa el contador de velocidad
      }
    }else {
      textAlign(LEFT, CENTER);
      text(
        this.text,
        this.posX + this.sizeWidth / 3,
        this.posY + this.sizeHegth / 2
      );
    }
 
    
  }
}

function limit() {

  if(onlyText){
    return 
  }else {
    if (RectDownSelect.posX < rectDownRigth.posX ) {
      RectDownSelect.posX = rectDownRigth.posX ;
    }
  
    if (
      RectDownSelect.posX + RectDownSelect.sizeWidth > rectDownRigth.posX + rectDownRigth.sizeWidth 
    ) {
      if(option1){
        RectDownSelect.posX = (rectDownRigth.posX + rectDownRigth.sizeWidth) / 2 + RectDownSelect.sizeWidth;
      }else{
  
        RectDownSelect.posX = (rectDownRigth.posX + rectDownRigth.sizeWidth) / 2;
      }
    }
  
    if (RectDownSelect.posY < rectDownRigth.posY + 7) {
      RectDownSelect.posY = rectDownRigth.posY + 7;
    }
  
    if (
      RectDownSelect.posY + RectDownSelect.sizeHegth > rectDownRigth.posY + rectDownRigth.sizeHegth
    ) {
      RectDownSelect.posY = (rectDownRigth.posY + rectDownRigth.sizeHegth) / 2  + RectDownSelect.sizeHegth * 2 + 20;
    }
  }
  
}

function keyPressed() {
  if (key === "Enter" || key === " ") {

    if(option1){
      //Cuando haces click en la primera opcion
      option1 = false;
      option2 = true
      rectDownRigth.posX = 0;
      RectDownSelect.posX = 0;
      rectDownRigth.sizeWidth = (canvasWidth / 3) * 2;
      RectDownSelect.sizeWidth = (canvasWidth / 3)

    }else if (option2){
      //Cuando haces click en la Segunda opcion
      option2 = false;
      onlyText = true
      rectDownRigth.posX = canvasWidth;
      RectDownSelect.posX = canvasWidth * 2;

    }else {
      //Cuando haces click en solo texto
      onlyText = false
      option1 = true
      rectDownRigth.posX = canvasWidth / 2;
      RectDownSelect.posX = canvasWidth / 2;
      rectDownRigth.sizeWidth = canvasWidth / 2 ;
      RectDownSelect.sizeWidth = (canvasWidth / 4)

    }
  }
  if(onlyText){
    return 
  }
  if (key === "ArrowUp") {
    RectDownSelect.posY -= RectDownSelect.sizeHegth;
  }
  if (key === "ArrowDown") {
    RectDownSelect.posY += RectDownSelect.sizeHegth;
  }
  if (key === "ArrowRight") {
    RectDownSelect.posX += RectDownSelect.sizeWidth;
  }
  if (key === "ArrowLeft") {
    RectDownSelect.posX -= RectDownSelect.sizeWidth;
  }
  

  limit();
}

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
function dobleEspacio (string){
  return string.replaceAll(" " , "   ")

}
const RectDownOption3 =
  new  RectDown(
    rectDown,
    rectDown.posX ,
    rectDown.posY + 10,
    rectDown.sizeWidth -  30 ,
    rectDown.sizeHegth,
    [255, 255, 255, 0],
    dobleEspacio(`Texto Corrrido y con saltos de parrafos \nIDGHE8YU G 8WYG yqg dygdqwd`)
     
  );

  
//Crear cuadros del Select 1 [ Texto, [Lucha, Mochila, Pokemons, Huida]]
//Crear cuadros del Select 2 [ [Ataque 1, Ataque 2, Ataque 3, Ataque 4], Datos del ataque]
//Crear cuadros del onlytext