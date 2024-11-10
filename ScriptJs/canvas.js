let canvasWidth = 700; // OK
let canvasHeigth = 400; // OK
// let pantallaActual[1] = true;  // OK
// let option2 = false; // OK
let onlyText = true; // OK
let espera = false
let fontPokemon;  // OK
let img;
let escribiendo = false  // OK pero cambiar nombre
let menu = ["FIGHT", "BAG", "POKEMON", "RUN"]

let pueba

let pokemonActual = Natalia.pokemos[0]
let pokemonEnemigo = Pablo.pokemos[0]

let textoOnlyText =
  `Que haras ${pokemonActual.nombre}?`
let optionPosition = 0

let restaPP = 1
let rectUpBotLeft, rectUpBotRigth, rectUpTopLeft, rectUpTopRigth;

let pantallaActual = {
  inicioCombate: false,
  menu: true,
  selecciónAtaques: false,
  textoBarraVidaEnemigo: false,
  textoBarraVidaYo: false,
  selcciónObjetos: false,
  seleccionObjetoPokemon: false,
  textoObjeto: false,
  selecciónPokemon: false, 
  mensajeHuir: false 
}




// Precargar recuersos
function preload() {
  fontPokemon = loadFont("assets/pokemon_pixel_font.ttf");
  img = [loadImage("assets/flecha_OK.png"), loadImage("assets/Campo.png"), loadImage("assets/Vida-enemy.png"),loadImage("assets/back.png")
    
  ];
  cargaDeImages()
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
  rectUpBotLeft.draw()
  rectUpBotRigth.draw()
  rectUpTopRigth.draw()
  rectUpTopLeft.draw()
  if (pokemonActual.vida <= 0){
    rectDown.setText( `${pokemonActual.nombre} se ha debilitado (osea muerto)`)
    return
  }
  if( pokemonEnemigo <= 0){
    rectDown.setText( `${pokemonEnemigo.nombre} se ha debilitado (osea muerto)`)
    return
  }
  
if(pantallaActual[1]){
  rectDownRight.draw()
  rectDownRightSelect.draw()
  rectDownOption1.forEach((el)=>el.draw())

}else if (pantallaActual[2] ){
  rectDownLeft.draw()
  rectDownLeftPp.draw()
  rectDownLeftSelect.draw()
  rectDownOption2.forEach((el)=>el.draw())
  rectDownLeft2.draw()
} else if(espera){

}
rectDownLeftSelect.posicionSelect()
}


function keyPressed() {

  if (key === "Enter" || key === " ") {
    rectDown.setText(textoOnlyText)
    for(i = 0; i < 4; i++ ){
      rectDownOption2[i].setText(pokemonActual.Ataques[i].nombre)
    }

    if(pantallaActual[1] ){
      //Del 1/3 al 2/3
      pantallaActual[1] = false;
      pantallaActual[2] = true
      pantallaActual[3] = false
 
    }else if (pantallaActual[2] ){
      if(pokemonActual.Ataques[optionPosition].pp == 0 ){
        return
      }
      //Del 2/3 al 3/3
      pantallaActual[2] = false;
      pantallaActual[3] = true
      espera = true

      
      
    }else if(espera){
      //Del 3/3 al 1/3
      rectUpTopLeft.printVida(pokemonEnemigo, pokemonActual)
      pantallaActual[1] = false;
      pantallaActual[2] = false
      pantallaActual[3] = true
      espera = false
    } else {
      pantallaActual[1] = true
      pantallaActual[3] = true
    }

  }
  rectDownRightSelect.move(key);
  rectDownRightSelect.limit();

  rectDownLeftSelect.move(key);
  rectDownLeftSelect.limit();

}



