let canvasWidth = 700; // OK
let canvasHeigth = 400; // OK
let option1 = true;  // OK
let option2 = false; // OK
let onlyText = false; // OK
let fontPokemon;  // OK
let img;
let escribiendo = false  // OK pero cambiar nombre
let textoOnlyText =
`Esto es una rectDown para ver a hasta donde \nescribe el texto`  // OK
let habilidades = ["ATAQUE1", "ATAQUE2", "ATAQUE3", "ATAQUE4"]
let menu = ["FIGHT", "BAG", "POKEMON", "RUN"]




// Precargar recuersos
function preload() {
  fontPokemon = loadFont("assets/pokemon_pixel_font.ttf");
  img = [loadImage("assets/flecha_OK.png"), loadImage("assets/Campo.png"), loadImage("assets/Vida-enemy.png")];
}

// Establecer dimensiones del canvas
function setup() {
  createCanvas(canvasWidth, canvasHeigth);

}

//Pintar
function draw() {

  background(220);
  rectUp.draw();
  rectDown.draw()
  
if(option1){
  rectDownRight.draw()
  rectDownRightSelect.draw()
  rectDownOption1.forEach((el)=>el.draw())

}else if (option2 ){
  rectDownLeft.draw()
  rectDownLeftSelect.draw()
  rectDownOption2.forEach((el)=>el.draw())
}

}


function keyPressed() {
  if (key === "Enter" || key === " ") {
    rectDown.setText(textoOnlyText)

    if(option1){
      //Del 1/3 al 2/3
      option1 = false;
      option2 = true
     
    }else if (option2){
      //Del 2/3 al 3/3
      option2 = false;
      onlyText = true
      
    }else {
      //Del 3/3 al 1/3
      onlyText = false
      option1 = true
    
      rectDownLeftSelect.move(key);
      rectDownLeftSelect.limit();

    }
  }
  rectDownRightSelect.move(key);
  rectDownRightSelect.limit();

  rectDownLeftSelect.move(key);
  rectDownLeftSelect.limit();
  if(onlyText){
    return
  }
}


function updateTextForRectDownOption3(newText) {
  RectDownOption3.setText(newText);
}

