let canvasWidth = 700; // OK
let canvasHeigth = 400; // OK
// let pantallaActual.textoBarraVidaYo = false
let fontPokemon;  // OK
let img;
let escribiendo = false  // OK pero cambiar nombre
let menu = ["FIGHT", "BAG", "POKEMON", "RUN"]

let pokemonActual = Yo.pokemons[0]
let pokemonEnemigo = Enemy.pokemons[0]

let textoOnlyText =
  `Que haras ${pokemonActual.nombre}?`
let optionPosition = 0

let restaPP = 1
let rectUpBotLeft, rectUpBotRigth, rectUpTopLeft, rectUpTopRigth, rectPokemon, rectPokemonSelect, seleccionPokemonActual;

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
  mensajeHuir: false ,
  espera: false
}

let selecciones = {
  pokemon1: true,
  pokemon2: false,
  pokemon3: false,
  pokemon4: false,
  pokemon5: false,
  pokemon6: false,
  cancelar: false
}

let cancelarSeleccion = false
let selectPokemon = "Cancelar"

let posiciones = {
  arriba: true,
  izquierda: true,
  abajo: false,
  derecha: false,
};
let ultimaSeleccion = 1;






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
  if(pantallaActual.selecciónPokemon){
    rectPokemon.draw();
    rectPokemonSelect.forEach((el)=>el.draw())
    seleccionPokemonActual.draw()
    return
  }
  rectUp.draw();
  rectDown.draw()
  rectUpBotLeft.draw()
  rectUpBotRigth.draw()
  rectUpTopRigth.draw()
  rectUpTopLeft.draw()
  if (pokemonActual.vida <= 0){
    rectDown.setText( `${pokemonActual.nombre} se ha debilitado (osea muerto)`)
    pantallaActual.espera = true
    return
  }
  if( pokemonEnemigo <= 0){
    rectDown.setText( `${pokemonEnemigo.nombre} se ha debilitado (osea muerto)`)
    return
  }
  
if(pantallaActual.menu){
  rectDownRight.draw()
  rectDownRightSelect.draw()
  rectDownOption1.forEach((el)=>el.draw())

}else if (pantallaActual.selecciónAtaques ){
  rectDownLeft.draw()
  rectDownLeftPp.draw()
  rectDownLeftSelect.draw()
  rectDownOption2.forEach((el)=>el.draw())
  rectDownLeft2.draw()
} else if(pantallaActual.textoBarraVidaYo){

}else if(pantallaActual.inicioCombate){
  rectDown.setText("Quieres pegarme?")
  
}
rectDownLeftSelect.posicionSelect();

}


function keyPressed() {
  if(pantallaActual.selecciónPokemon){
    
    selectorPokemon(key)
    return 
    
  }
  if (key === "Enter" || key === " ") {
    rectDown.setText(textoOnlyText)
    for(i = 0; i < 4; i++ ){
      rectDownOption2[i].setText(pokemonActual.Ataques[i].nombre)
    }
    if(ultimaSeleccion === 3){
      pantallaActual.menu = false;
      pantallaActual.selecciónPokemon = true
      return 
    }
    if(pantallaActual.espera){
      pantallaActual.espera = false;
      pantallaActual.menu = false;
      pantallaActual.selecciónPokemon = true
      return
    }

    if (pantallaActual.menu) {
      actualizarInterfazPokemon(); 
      pantallaActual.selecciónAtaques = true;
      pantallaActual.menu = false;
      
    }else if (pantallaActual.selecciónAtaques ){
      if(pokemonActual.Ataques[optionPosition].pp == 0 ){
        
        return
      }
      //Del 2/3 al 3/3
      pantallaActual.selecciónAtaques = false;
      pantallaActual.textoBarraVidaEnemigo = true
      pantallaActual.textoBarraVidaYo = true
     

      
      
    }else if(pantallaActual.textoBarraVidaYo){
      //Del 3/3 al 1/3
      if(!pokemonEnemigo.vida === 0){
        rectDown.setText("Quieres pegarmessasddasdasdasd?")
        return
      }
        rectUpBotRigth.printVida(pokemonEnemigo, pokemonActual)
      pantallaActual.menu = false;
      pantallaActual.selecciónAtaques = false
      pantallaActual.textoBarraVidaEnemigo = true
      pantallaActual.textoBarraVidaYo = false
    } else {
      pantallaActual.menu = true
      pantallaActual.textoBarraVidaEnemigo = true;
      actualizarInterfazPokemon()
    }

  }

  rectDownRightSelect.move(key);
  rectDownRightSelect.limit();

  rectDownLeftSelect.move(key);
  rectDownLeftSelect.limit(key);

}



function selectorPokemon(key){
  if (selecciones.pokemon1) {
    if (key === "ArrowUp" || key === "ArrowRight") {
      rectPokemonSelect[0].hover = true;
      selecciones.pokemon2 = true
      selectPokemon = rectPokemonSelect[0].pokemon;
      selecciones.pokemon1 = false
    } else if (key === "ArrowDown") {
      selectPokemon = "Cancelar";
      selecciones.cancelar = true
      selecciones.pokemon1 = false
    }
   


  } else if (selecciones.pokemon2) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[0].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true
      selecciones.pokemon2 = false
    } else if (key === "ArrowDown") {
      rectPokemonSelect[0].hover = false;
      rectPokemonSelect[1].hover = true;
      selectPokemon = rectPokemonSelect[1].pokemon;
      selecciones.pokemon3 = true
      selecciones.pokemon2 = false
    }



  } else if (selecciones.pokemon3) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[1].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true
      selecciones.pokemon3 = false
    } else if (key === "ArrowDown") {
      rectPokemonSelect[1].hover = false;
      rectPokemonSelect[2].hover = true;
      selectPokemon = rectPokemonSelect[2].pokemon;
      selecciones.pokemon4 = true
      selecciones.pokemon3 = false
    }else if(key === "ArrowUp"){
      rectPokemonSelect[1].hover = false;
      rectPokemonSelect[0].hover = true;
      selectPokemon = rectPokemonSelect[0].pokemon;
      selecciones.pokemon2 = true
      selecciones.pokemon3 = false
    }
   


  } else if (selecciones.pokemon4) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[2].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true
      selecciones.pokemon4 = false
    } else if (key === "ArrowDown") {
      rectPokemonSelect[2].hover = false;
      rectPokemonSelect[3].hover = true;
      selectPokemon = rectPokemonSelect[2].pokemon;
      selecciones.pokemon5 = true
      selecciones.pokemon4 = false
    }else if(key === "ArrowUp"){
      rectPokemonSelect[2].hover = false;
      rectPokemonSelect[1].hover = true;
      selectPokemon = rectPokemonSelect[1].pokemon;
      selecciones.pokemon3 = true
      selecciones.pokemon4 = false
    }
    
  } else if (selecciones.pokemon5) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[3].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true
      selecciones.pokemon5 = false
    } else if (key === "ArrowDown") {
      rectPokemonSelect[3].hover = false;
      rectPokemonSelect[4].hover = true;
      selectPokemon = rectPokemonSelect[4].pokemon;
      selecciones.pokemon6 = true
      selecciones.pokemon5 = false
    }else if(key === "ArrowUp"){
      rectPokemonSelect[3].hover = false;
      rectPokemonSelect[2].hover = true;
      selectPokemon = rectPokemonSelect[2].pokemon;
      selecciones.pokemon4 = true
      selecciones.pokemon5 = false
    }

  } else if (selecciones.pokemon6) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[4].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true
      selecciones.pokemon6 = false
    } else if (key === "ArrowDown") {
      rectPokemonSelect[4].hover = false;
      rectPokemon.hover = true
      selecciones.cancelar = true
      selecciones.pokemon6 = false
      selectPokemon = "Cancelar";
    }else if(key === "ArrowUp"){
      rectPokemonSelect[4].hover = false;
      rectPokemonSelect[3].hover = true;
      selectPokemon = rectPokemonSelect[3].pokemon;
      selecciones.pokemon5 = true
      selecciones.pokemon6 = false
    }
    
  } else if (selecciones.cancelar) {
    if(key === "ArrowUp"){
      rectPokemon.hover = false
      rectPokemonSelect[4].hover = true;
      selectPokemon = "Cancelar";
      selecciones.pokemon6 = true
      selecciones.cancelar = false

    }
    
  }

  if (selectPokemon !== "Cancelar") {
    if(!selectPokemon.vida){return }
    if (key === "Enter" || key === " ") {
        const filtro = Yo.pokemons.filter((pokemon) => pokemon !== selectPokemon);
        filtro.unshift(selectPokemon);
        Yo.pokemons = filtro; 
        pokemonActual = selectPokemon; 
        rectUpBotRigth.setPokemon(pokemonActual)
        actualizarInterfazPokemon();
        pantallaActual.menu = true
        pantallaActual.selecciónPokemon = false
        rectUpTopLeft.setVida(pokemonEnemigo)
        rectUpBotRigth.setVida(pokemonActual)

    }
    
}else if(key === "Enter" || key === " "){
  pantallaActual.menu = true
  pantallaActual.selecciónPokemon = false
}

 

}


function actualizarInterfazPokemon() {
  
  for (let i = 0; i < 4; i++) {
      if (pokemonActual.Ataques[i]) {
          rectDownOption2[i].setText(pokemonActual.Ataques[i].nombre);
      } else {
          rectDownOption2[i].setText(""); 
      }
  }

  
  rectUpBotRigth.setLife(pokemonActual.vida);
  seleccionPokemonActual.pokemon = pokemonActual;

  
  textoOnlyText = `Que haras ${pokemonActual.nombre}?`;

  
  rectPokemonSelect = [
      new RectPokemon(303, 25, 370, 55, loadImage("assets/all-pokemon-select.png"), Yo.pokemons[1]), 
      new RectPokemon(303, 85, 370, 55, loadImage("assets/all-pokemon-select.png"), Yo.pokemons[2]), 
      new RectPokemon(303, 145, 370, 55, loadImage("assets/all-pokemon-select.png"), Yo.pokemons[3]),
      new RectPokemon(303, 205, 370, 55, loadImage("assets/all-pokemon-select.png"), Yo.pokemons[4]),
      new RectPokemon(303, 265, 370, 55, loadImage("assets/all-pokemon-select.png"), Yo.pokemons[5])
  ];

}
