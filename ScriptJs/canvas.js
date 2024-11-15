let canvasWidth = 700;
let canvasHeigth = 400;

let fontPokemon;
let img;
let escribiendo = false;
let menu = ["FIGHT", "BAG", "POKEMON", "RUN"];

let pokemonActual = Yo.pokemons[0];
let pokemonEnemigo = Enemy.pokemons[0];

let textoOnlyText = `Que haras ${pokemonActual.nombre}?`;
let optionPosition = 0;

let restaPP = 1;
let rectUpBotLeft,
  rectUpBotRigth,
  rectUpTopLeft,
  rectUpTopRigth,
  rectPokemon,
  rectPokemonSelect,
  seleccionPokemonActual;

let pantallaActual = {
  inicioCombate: true,
  menu: false,
  selecciónAtaques: false,
  textoBarraVidaEnemigo: false,
  textoBarraVidaYo: false,
  selcciónObjetos: false,
  seleccionObjetoPokemon: false,
  textoObjeto: false,
  selecciónPokemon: false,
  mensajeHuir: false,
  espera: false,
};

let selecciones = {
  pokemon1: true,
  pokemon2: false,
  pokemon3: false,
  pokemon4: false,
  pokemon5: false,
  pokemon6: false,
  cancelar: false,
};

let cancelarSeleccion = false;
let selectPokemon = "Cancelar";

let posiciones = {
  arriba: true,
  izquierda: true,
  abajo: false,
  derecha: false,
};
let ultimaSeleccion = 1;

let todosMuertos = false;

function preload() {
  fontPokemon = loadFont("assets/pokemon_pixel_font.ttf");
  img = [
    loadImage("assets/flecha_OK.png"),
    loadImage("assets/Campo.png"),
    loadImage("assets/Vida-enemy.png"),
    loadImage("assets/back.png"),
  ];
  cargaDeImages();
}

function setup() {
  createCanvas(canvasWidth, canvasHeigth);
}

function draw() {
  background(220);

  if (pantallaActual.selecciónPokemon && !todosMuertos) {
    rectPokemon.draw();
    rectPokemonSelect.forEach((el) => el.draw());
    seleccionPokemonActual.draw();
    return;
  }
  rectUp.draw();
  rectDown.draw();
  if (todosMuertos) {
    pantallaActual.textoBarraVidaEnemigo = false;
  }
  rectUpBotLeft.draw();
  rectUpBotRigth.draw();
  rectUpTopRigth.draw();
  rectUpTopLeft.draw();
  if (pokemonActual.vida <= 0) {
    if (todosMuertos) return;
    rectDown.setText(
      "Has perdido: actualiza la pagina \npara intentarlo de nuevo, VAGOOOO!"
    );
    pantallaActual.selecciónPokemon = true;

    return;
  }
  if (pokemonEnemigo <= 0) {
    if (todosMuertos) return;

    rectDown.setText(`${pokemonEnemigo.nombre} se ha debilitado (osea muerto)`);

    if (Adversario.pokemons.length === 0) return;
    Enemy.pokemons.shift();
    siguientePokemonEnemigo();
    return;
  }

  if (pantallaActual.menu) {
    if (todosMuertos) return;
    rectDownRight.draw();
    rectDownRightSelect.draw();
    rectDownOption1.forEach((el) => el.draw());
  } else if (pantallaActual.selecciónAtaques) {
    if (todosMuertos) return;
    rectDownLeft.draw();
    rectDownLeftPp.draw();
    rectDownLeftSelect.draw();
    rectDownOption2.forEach((el) => el.draw());
    rectDownLeft2.draw();
  } else if (pantallaActual.textoBarraVidaYo) {
  } else if (pantallaActual.inicioCombate) {
    rectDown.setText("Quieres pegarme?");
  }
  rectDownLeftSelect.posicionSelect();
}

function keyPressed() {
  if (todosMuertos) return;
  if (pantallaActual.selecciónPokemon) {
    selectorPokemon(key);
    return;
  }
  if (key === "Enter" || key === " ") {
    if (todosMuertos) return;
    rectDown.setText(textoOnlyText);
    for (i = 0; i < 4; i++) {
      rectDownOption2[i].setText(pokemonActual.Ataques[i].nombre);
    }
    if (ultimaSeleccion === 3) {
      if (todosMuertos) return;
      pantallaActual.menu = false;
      pantallaActual.selecciónPokemon = true;
      return;
    }
    if (pantallaActual.espera) {
      if (todosMuertos) return;
      pantallaActual.espera = false;
      pantallaActual.menu = false;
      pantallaActual.selecciónPokemon = true;
      return;
    }

    if (pantallaActual.menu) {
      if (todosMuertos) {
        return;
      }

      actualizarInterfazPokemon();
      pantallaActual.selecciónAtaques = true;
      pantallaActual.menu = false;
      pantallaActual.inicioCombate = false;
    } else if (pantallaActual.selecciónAtaques) {
      if (todosMuertos) return;
      if (pokemonActual.Ataques[optionPosition].pp == 0) {
        return;
      }
      //Del 2/3 al 3/3
      pantallaActual.selecciónAtaques = false;
      pantallaActual.textoBarraVidaEnemigo = true;
      pantallaActual.textoBarraVidaYo = true;

      rectUpTopLeft.printVida(pokemonActual, pokemonEnemigo);
    } else if (pantallaActual.textoBarraVidaYo) {
      if (todosMuertos) return;
      //Del 3/3 al 1/3
      rectUpBotRigth.printVida(pokemonEnemigo, pokemonActual);
      pantallaActual.menu = false;
      pantallaActual.selecciónAtaques = false;
      pantallaActual.textoBarraVidaEnemigo = true;
      pantallaActual.textoBarraVidaYo = false;
    } else {
      pantallaActual.menu = true;
      pantallaActual.textoBarraVidaEnemigo = false;
      actualizarInterfazPokemon();
    }
  }

  rectDownRightSelect.move(key);
  rectDownRightSelect.limit();

  rectDownLeftSelect.move(key);
  rectDownLeftSelect.limit(key);
}

function selectorPokemon(key) {
  if (todosMuertos) return;
  if (key === "Backspace") {
    pantallaActual.menu = true;
    pantallaActual.selecciónPokemon = false;
    rectDown.setText(`Que haras ${pokemonActual.nombre}?`);
    return;
  }

  if (selecciones.pokemon1) {
    if (key === "ArrowUp" || key === "ArrowRight") {
      rectPokemonSelect[0].hover = true;
      selecciones.pokemon2 = true;
      selectPokemon = Pablo.pokemons[1];
      selecciones.pokemon1 = false;
    } else if (key === "ArrowDown") {
      selectPokemon = "Cancelar";
      selecciones.cancelar = true;
      selecciones.pokemon1 = false;
    }
  } else if (selecciones.pokemon2) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[0].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true;
      selecciones.pokemon2 = false;
    } else if (key === "ArrowDown") {
      rectPokemonSelect[0].hover = false;
      rectPokemonSelect[1].hover = true;
      selectPokemon = Pablo.pokemons[2];
      selecciones.pokemon3 = true;
      selecciones.pokemon2 = false;
    }
  } else if (selecciones.pokemon3) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[1].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true;
      selecciones.pokemon3 = false;
    } else if (key === "ArrowDown") {
      rectPokemonSelect[1].hover = false;
      rectPokemonSelect[2].hover = true;
      selectPokemon = Pablo.pokemons[3];
      selecciones.pokemon4 = true;
      selecciones.pokemon3 = false;
    } else if (key === "ArrowUp") {
      rectPokemonSelect[1].hover = false;
      rectPokemonSelect[0].hover = true;
      selectPokemon = Pablo.pokemons[1];
      selecciones.pokemon2 = true;
      selecciones.pokemon3 = false;
    }
  } else if (selecciones.pokemon4) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[2].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true;
      selecciones.pokemon4 = false;
    } else if (key === "ArrowDown") {
      rectPokemonSelect[2].hover = false;
      rectPokemonSelect[3].hover = true;
      selectPokemon = Pablo.pokemons[4];
      selecciones.pokemon5 = true;
      selecciones.pokemon4 = false;
    } else if (key === "ArrowUp") {
      rectPokemonSelect[2].hover = false;
      rectPokemonSelect[1].hover = true;
      selectPokemon = Pablo.pokemons[2];
      selecciones.pokemon3 = true;
      selecciones.pokemon4 = false;
    }
  } else if (selecciones.pokemon5) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[3].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true;
      selecciones.pokemon5 = false;
    } else if (key === "ArrowDown") {
      rectPokemonSelect[3].hover = false;
      rectPokemonSelect[4].hover = true;
      selectPokemon = Pablo.pokemons[5];
      selecciones.pokemon6 = true;
      selecciones.pokemon5 = false;
    } else if (key === "ArrowUp") {
      rectPokemonSelect[3].hover = false;
      rectPokemonSelect[2].hover = true;
      selectPokemon = Pablo.pokemons[3];
      selecciones.pokemon4 = true;
      selecciones.pokemon5 = false;
    }
  } else if (selecciones.pokemon6) {
    if (key === "ArrowLeft") {
      rectPokemonSelect[4].hover = false;
      selectPokemon = "Cancelar";
      selecciones.pokemon1 = true;
      selecciones.pokemon6 = false;
    } else if (key === "ArrowDown") {
      rectPokemonSelect[4].hover = false;
      rectPokemon.hover = true;
      selecciones.cancelar = true;
      selecciones.pokemon6 = false;
      selectPokemon = "Cancelar";
    } else if (key === "ArrowUp") {
      rectPokemonSelect[4].hover = false;
      rectPokemonSelect[3].hover = true;
      selectPokemon = Pablo.pokemons[4];
      selecciones.pokemon5 = true;
      selecciones.pokemon6 = false;
    }
  } else if (selecciones.cancelar) {
    if (key === "ArrowUp") {
      rectPokemon.hover = false;
      rectPokemonSelect[4].hover = true;
      selectPokemon = "Cancelar";
      selecciones.pokemon6 = true;
      selecciones.cancelar = false;
    }
  }

  if (selectPokemon !== "Cancelar") {
    if (!selectPokemon.vida) {
      return;
    }
    if (key === "Enter" || key === " ") {
      if (pokemonActual.vida === 0) {
        pantallaActual.inicioCombate = false;
        pantallaActual.menu = true;

        const filtro = Pablo.pokemons.filter(
          (pokemon) => pokemon !== selectPokemon
        );
        filtro.unshift(selectPokemon);
        Pablo.pokemons = filtro;
        pokemonActual = selectPokemon;
        actualizarInterfazPokemon();

        pantallaActual.selecciónPokemon = false;
      } else {
        if (todosMuertos) return;

        pantallaActual.inicioCombate = false;
        pantallaActual.textoBarraVidaYo = true;
        pantallaActual.menu = true;

        const filtro = Pablo.pokemons.filter(
          (pokemon) => pokemon !== selectPokemon
        );
        filtro.unshift(selectPokemon);
        Pablo.pokemons = filtro;
        pokemonActual = selectPokemon;

        rectUpBotRigth.printVida(pokemonEnemigo, pokemonActual);

        actualizarInterfazPokemon("Cambio");

        pantallaActual.selecciónPokemon = false;
      }
    }
  } else if (key === "Enter" || key === " ") {
    pantallaActual.menu = true;
    pantallaActual.selecciónPokemon = false;
    rectDown.setText(`Que haras ${pokemonActual.nombre}?`);
  }
}

function actualizarInterfazPokemon(texto) {
  comprobarVivos();

  if (pantallaActual.inicioCombate)
    rectDown.setText(`Que haras ${pokemonActual.nombre}?`);
  if (texto) {
    rectDown.setText(`Que haras ${pokemonActual.nombre}?`);
  }

  rectUpBotRigth.setPokemon(pokemonActual);

  rectUpTopLeft.setPokemon(pokemonEnemigo);

  rectUpTopLeft.setLife(pokemonEnemigo.vida, pokemonEnemigo.vidaTotal);
  rectUpBotRigth.setLife(pokemonActual.vida, pokemonActual.vidaTotal);

  for (let i = 0; i < 4; i++) {
    if (pokemonActual.Ataques[i]) {
      rectDownOption2[i].setText(pokemonActual.Ataques[i].nombre);
    } else {
      rectDownOption2[i].setText("");
    }
  }

  rectUpTopRigth.setImage(loadImage(pokemonEnemigo.imagen.front));
  rectUpBotLeft.setImage(loadImage(pokemonActual.imagen.back));

  seleccionPokemonActual.pokemon = pokemonActual;

  rectUpTopRigth.imagen = loadImage(pokemonEnemigo.imagen.front);
  rectPokemonSelect = [
    new RectPokemon(
      303,
      25,
      370,
      55,
      loadImage("assets/all-pokemon-select.png"),
      Pablo.pokemons[1],
      loadImage(Pablo.pokemons[1].imagen.front)
    ),
    new RectPokemon(
      303,
      85,
      370,
      55,
      loadImage("assets/all-pokemon-select.png"),
      Pablo.pokemons[2],
      loadImage(Pablo.pokemons[2].imagen.front)
    ),
    new RectPokemon(
      303,
      145,
      370,
      55,
      loadImage("assets/all-pokemon-select.png"),
      Pablo.pokemons[3],
      loadImage(Pablo.pokemons[3].imagen.front)
    ),
    new RectPokemon(
      303,
      205,
      370,
      55,
      loadImage("assets/all-pokemon-select.png"),
      Pablo.pokemons[4],
      loadImage(Pablo.pokemons[4].imagen.front)
    ),
    new RectPokemon(
      303,
      265,
      370,
      55,
      loadImage("assets/all-pokemon-select.png"),
      Pablo.pokemons[5],
      loadImage(Pablo.pokemons[5].imagen.front)
    ),
  ];
  seleccionPokemonActual.setImagePokemon(loadImage(pokemonActual.imagen.front));
  rectPokemonSelect.forEach((el, index) => {
    el.setImagePokemon(loadImage(Pablo.pokemons[index + 1].imagen.front));
  });
}

function siguientePokemonEnemigo() {
  if (Adversario.pokemons.length > 0) {
    pokemonEnemigo = Adversario.pokemons[0];
    actualizarInterfazPokemon();
  } else {
    rectDown.setText("¡Has ganado el combate!");
  }
}

function comprobarVivos() {
  const pokemonsVivos = [];
  Pablo.pokemons.forEach((pokemon) => {
    if (pokemon.vida === 0) {
      pokemonsVivos.push(pokemon);
    }
  });
  if (pokemonsVivos.length === 6 || Adversario.pokemons.length === 0) {
    todosMuertos = true;
    pantallaActual = {
      inicioCombate: false,
      menu: false,
      selecciónAtaques: false,
      textoBarraVidaEnemigo: false,
      textoBarraVidaYo: false,
      selcciónObjetos: false,
      seleccionObjetoPokemon: false,
      textoObjeto: false,
      selecciónPokemon: false,
      mensajeHuir: false,
      espera: false,
    };
    rectDown.setText(
      `Ya pesado no le des mas del enter o espacio \nque has ganado PESADOOO`
    );
  }
}
