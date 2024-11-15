class RectUpNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, color) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
  }
  rect() {
    fill(this.color);
    noStroke();
    image(img[1], this.posX, this.posY, canvasWidth, (canvasHeigth / 3) * 2);
  }
  draw() {
    this.rect();
  }
}
class RectDownNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, color, text) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
    this.text = text;
    this.currentTextIndex = 0;
    this.textSpeedCounter = 0;
    this.textSpeedDelay = 1;
  }
  setText(newText) {
    if (this.text !== newText) {
      this.text = newText;
      this.currentTextIndex = 0;
      escribiendo = false;
    }
  }
  separar() {
    return this.text.replaceAll(" ", "  ");
  }
  border(
    bordes,
    posX,
    posY,
    sizeWidth,
    sizeHeigth,
    borderColor,
    fillColor,
    radius
  ) {
    strokeWeight(bordes);
    stroke(borderColor);
    fill(fillColor);
    rect(posX, posY, sizeWidth, sizeHeigth, radius);
  }
  borders() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
    let borderWidth = [7, 5, 3];
    this.border(
      borderWidth[0],
      this.posX,
      this.posY,
      this.sizeWidth,
      this.sizeHeigth,
      "#27302F",
      "#27302F",
      0
    );
    this.border(
      borderWidth[1],
      this.posX + borderWidth[0],
      this.posY + borderWidth[0],
      this.sizeWidth - 2 * (borderWidth[0] + 1),
      this.sizeHeigth - 2 * (borderWidth[0] + 1),
      "#C5AA46",
      "#C5AA46",
      8
    );
    this.border(
      borderWidth[2],
      this.posX + borderWidth[0] + borderWidth[1],
      this.posY + borderWidth[0] + borderWidth[1],
      this.sizeWidth - 2 * (borderWidth[0] + borderWidth[1] + 1),
      this.sizeHeigth - 2 * (borderWidth[0] + borderWidth[1] + 1),
      "#EAEFF9",
      this.color,
      4
    );
  }
  rect() {
    fill(0);
    noStroke();

    textFont(fontPokemon);
    textSize(40);
    fill(255);
    textAlign(LEFT, TOP);
    text(
      this.separar().substring(0, this.currentTextIndex),
      this.posX + 30,
      this.posY + 20
    );
    if (this.textSpeedCounter >= this.textSpeedDelay) {
      if (this.currentTextIndex < this.separar().length) {
        this.currentTextIndex++;
      } else {
        escribiendo = !escribiendo;
      }
      this.textSpeedCounter = 0;
    } else {
      this.textSpeedCounter++;
    }
  }
  draw() {
    this.borders();
    this.rect();
  }
}
class RectDownRidhtNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, color) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
  }

  border(
    bordes,
    posX,
    posY,
    sizeWidth,
    sizeHeigth,
    borderColor,
    fillColor,
    radius
  ) {
    strokeWeight(bordes);
    stroke(borderColor);
    fill(fillColor);
    rect(posX, posY, sizeWidth, sizeHeigth, radius);
  }
  borders() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
    let borderWidth = [7, 5];
    this.border(
      borderWidth[0],
      this.posX,
      this.posY,
      this.sizeWidth,
      this.sizeHeigth,
      "#27302F",
      "#27302F",
      0
    );
    this.border(
      borderWidth[1],
      this.posX + borderWidth[0],
      this.posY + borderWidth[0],
      this.sizeWidth - 2 * (borderWidth[0] + 1),
      this.sizeHeigth - 2 * (borderWidth[0] + 1),
      "#6B687F",
      "#6B687F",
      8
    );
  }
  rect() {
    fill(this.color);
    noStroke();
    rect(
      this.posX + 12,
      this.posY + 12,
      this.sizeWidth - 2 * 13,
      this.sizeHeigth - 2 * 13,
      4
    );
  }
  draw() {
    this.borders();
    this.rect();
  }
}
class RectDownOptionNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, color, text, size) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
    this.text = text;
    this.size = size || 32;
  }
  setText(newText) {
    if (this.text !== newText) {
      this.text = newText;
    }
  }
  rect() {
    fill(this.color);
    textFont(fontPokemon);
    textSize(this.size);

    textAlign(LEFT, CENTER);
    text(
      this.text,
      this.posX + this.sizeWidth / 3,
      this.posY + this.sizeHeigth / 2
    );
  }
  draw() {
    this.rect();
  }
}
class RectSelect {
  constructor(dad, posX, posY, sizeWidth, sizeHeigth, color, text) {
    this.dad = dad;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
    this.text = text;
  }
  printAtack(position) {
    rectDownLeft2.setText(
      `PP        ${pokemonActual.Ataques[position].pp}/${pokemonActual.Ataques[position].ppTotal} \nTIPO/${pokemonActual.Ataques[position].tipo.toUpperCase()}`
    );
    if (!pokemonEnemigo.vida <= 0) {
      textoOnlyText = `El pokemon ${pokemonActual.nombre} ha usado ${pokemonActual.Ataques[position].nombre} \ncontra ${pokemonEnemigo.nombre}`;
    }
    optionPosition = position;
  }
  posicionSelect() {
    if (pantallaActual.selecciónAtaques) {
      if (this.posX == 0 && this.posY <= this.dad.posY + this.sizeHeigth - 10) {
        this.printAtack(0);
      } else if (
        this.posX < this.posX + this.sizeWidth - 10 &&
        this.posY <= this.dad.posY + this.sizeHeigth - 10
      ) {
        this.printAtack(1);
      } else if (
        this.posX == 0 &&
        this.posY >= this.dad.posY + this.sizeHeigth + 7
      ) {
        this.printAtack(2);
      } else if (
        this.posX == this.posX &&
        this.posY >= this.dad.posY + this.sizeHeigth + 7
      ) {
        this.printAtack(3);
      }
    } else if (pantallaActual.textoBarraVidaYo) {
      this.calculoPP();

      textoOnlyText = `El pokemon ${pokemonEnemigo.nombre} del enemigo ha usado \n${pokemonEnemigo.Ataques[optionPosition].nombre} contra ${pokemonActual.nombre}`;
    } else {
      restaPP = 1;
      textoOnlyText = `Que haras ${pokemonActual.nombre}?`;
    }
  }
  calculoPP() {
    if (pokemonActual.Ataques[optionPosition].p === 0) {
      return;
    }
    if (restaPP) {
      pokemonActual.Ataques[optionPosition].pp -= restaPP;
      restaPP = 0;
    }
  }
  limit(key) {
    if (this.posX < this.dad.posX) {
      this.posX = this.dad.posX;
    }

    if (this.posX + this.sizeWidth > this.dad.posX + this.dad.sizeWidth - 30) {
      if (pantallaActual.menu) {
        this.posX = (this.dad.posX + this.dad.sizeWidth) / 2 + this.sizeWidth;
      } else {
        this.posX = (this.dad.posX + this.dad.sizeWidth) / 2 - 30;
      }
    }

    if (this.posY < this.dad.posY + 7) {
      this.posY = this.dad.posY + 7;
    }

    if (
      this.posY + this.dad.sizeHeigth / 2 >
      this.dad.posY + this.dad.sizeHeigth
    ) {
      this.posY = this.dad.posY + this.sizeHeigth + 7;
    }
  }
  move(key) {
    if (key === "Backspace") {
      pantallaActual.selecciónAtaques = false;
      pantallaActual.menu = true;
    }

    if (key === "ArrowUp") {
      this.posY -= this.sizeHeigth;
      posiciones.arriba = true;
      posiciones.abajo = false;
    }
    if (key === "ArrowDown") {
      this.posY += this.sizeHeigth;
      posiciones.abajo = true;
      posiciones.arriba = false;
    }
    if (key === "ArrowRight") {
      this.posX += this.sizeWidth;
      posiciones.derecha = true;
      posiciones.izquierda = false;
    }
    if (key === "ArrowLeft") {
      this.posX -= this.sizeWidth;
      posiciones.izquierda = true;
      posiciones.derecha = false;
    }

    if (pantallaActual.menu) {
      if (posiciones.arriba && posiciones.izquierda) {
        ultimaSeleccion = 1;
      } else if (posiciones.arriba && posiciones.derecha) {
        ultimaSeleccion = 2;
      } else if (posiciones.abajo && posiciones.izquierda) {
        ultimaSeleccion = 3;
      } else if (posiciones.abajo && posiciones.derecha) {
        ultimaSeleccion = 4;
      }
    }
  }

  draw() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth - 30, this.sizeHeigth - 30);
    fill(0);
    image(img[0], this.posX + 25, this.posY + this.sizeHeigth / 2 - 10, 15, 30);
  }
}
class RectUpBotNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, image) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.image = image;
  }
  setImage(newImage) {
    if (this.imame !== newImage) {
      this.image = newImage;
    }
  }
  rect() {
    fill(0);
    image(this.image, this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
  }
  draw() {
    this.rect();
  }
}
class RectUpBotLifeNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, image, vida, pokemon) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.image = image;
    this.vida = vida;
    this.vidaTotal = vida;
    this.pokemon = pokemon;

    this.colorVerde = [33, 202, 56];
    this.colorAmarillo = [248, 224, 56];
    this.colorRojo = [248, 88, 56];
    this.colorBarraVida = this.colorVerde;

    if (this.posX === 50) {
      this.barraVida = [
        this.posX + 100,
        this.posY + 40,
        104 * 2.5 - 130,
        37 * 2.5 - 80,
      ];
    } else {
      this.barraVida = [
        this.posX + 120,
        this.posY + 40,
        this.sizeWidth - 140,
        this.sizeHeigth - 80,
      ];
    }

    this.vidaActualBarra = this.barraVida[2];
  }

  printVida(pokemonAtacante, pokemonDefensor) {
    if (todosMuertos) return;

    const nuevaVida =
      pokemonDefensor.vida - pokemonAtacante.Ataques[optionPosition].dano;
    pokemonDefensor.vida = nuevaVida;

    if (nuevaVida <= 0) {
      pokemonDefensor.vida = 0;
      this.setLife(0);
      if (Adversario.pokemons[0] === pokemonDefensor) {
        Adversario.pokemons.shift();
        if (todosMuertos) return;
      }
      if (Adversario.pokemons.length > 0) {
        pokemonEnemigo = Adversario.pokemons[0];
        actualizarInterfazPokemon();

        pantallaActual = {
          inicioCombate: false,
          menu: true,
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
        rectDown.setText(`Que haras ${pokemonActual.nombre}?`);
      } else {
        pantallaActual.menu = false;
        pantallaActual.textoBarraVidaEnemigo = false;
        rectDown.setText(
          "Has ganado, toma un pin del Fary! Si quieres \njugar de nuevo actualiza la pagina VAGOOOOO"
        );
      }
    } else {
      this.setLife(nuevaVida);
    }
  }

  setLife(newLife, newVidaTotal) {
    this.vida = newLife;
    if (newVidaTotal) {
      this.vidaTotal = newVidaTotal;
    }
  }
  setVida(pokemon) {
    if (pokemon !== this.pokemon) {
      this.pokemon = pokemon;
      this.vida = pokemon.vida;
      this.vidaTotal = pokemon.vidaTotal;
      this.vidaActualBarra = (this.vida / this.vidaTotal) * this.barraVida[2];
    }
  }

  animateLifeBar() {
    const targetWidth = (this.vida / this.vidaTotal) * this.barraVida[2];

    if (this.vidaActualBarra > targetWidth) {
      this.vidaActualBarra -= (this.vidaActualBarra - targetWidth) * 0.1;
      this.updateColor();
      if (Math.abs(this.vidaActualBarra - targetWidth) < 0.5) {
        this.vidaActualBarra = targetWidth;
      }
    } else if (this.vidaActualBarra < targetWidth) {
      this.vidaActualBarra += (targetWidth - this.vidaActualBarra) * 0.1;
      this.updateColor();
      if (Math.abs(this.vidaActualBarra - targetWidth) < 0.5) {
        this.vidaActualBarra = targetWidth;
      }
    }
  }

  updateColor() {
    const vidaPorcentaje = this.vidaActualBarra / this.barraVida[2];
    if (vidaPorcentaje > 0.5) {
      const t = (vidaPorcentaje - 0.5) * 2;
      this.colorBarraVida = this.interpolateColor(
        this.colorAmarillo,
        this.colorVerde,
        t
      );
    } else {
      const t = vidaPorcentaje * 2;
      this.colorBarraVida = this.interpolateColor(
        this.colorRojo,
        this.colorAmarillo,
        t
      );
    }
  }

  interpolateColor(colorA, colorB, t) {
    return [
      colorA[0] + (colorB[0] - colorA[0]) * t,
      colorA[1] + (colorB[1] - colorA[1]) * t,
      colorA[2] + (colorB[2] - colorA[2]) * t,
    ];
  }

  rect() {
    fill(this.colorBarraVida);
    noStroke();
    rect(
      this.barraVida[0],
      this.barraVida[1],
      this.vidaActualBarra,
      this.barraVida[3]
    );

    fill(0);
    image(this.image, this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
  }
  setPokemon(newPokemon) {
    if (this.pokemon !== newPokemon) {
      this.pokemon = newPokemon;
    }
  }

  text() {
    fill(0);
    textFont(fontPokemon);
    textSize(30);
    textAlign(LEFT, CENTER);
    text(
      this.pokemon.nombre.toUpperCase(),
      pokemonActual === this.pokemon ? this.posX + 40 : this.posX + 20,
      this.posY + 18
    );
  }

  textLv() {
    fill("#F8F8D8");
    noStroke();
    rect(
      pokemonActual === this.pokemon ? this.posX + 195 : this.posX + 185,
      this.posY + 10,
      45,
      25
    );
    fill(0);
    textFont(fontPokemon);
    textSize(30);
    textAlign(LEFT, CENTER);
    text(
      "Lv 50",
      pokemonActual === this.pokemon ? this.posX + 195 : this.posX + 185,
      this.posY + 19
    );
  }

  textlive() {
    if (this.pokemon === pokemonActual) {
      fill(0);
      textFont(fontPokemon);
      textSize(30);
      textAlign(LEFT, CENTER);
      text(`${this.vida}/${this.vidaTotal}`, this.posX + 165, this.posY + 63);
    }
  }

  draw() {
    this.animateLifeBar();
    this.rect();
    this.text();
    this.textLv();
    this.textlive();
  }
}
class RectPokemon {
  constructor(
    posX,
    posY,
    sizeWidth,
    sizeHeigth,
    image,
    pokemon,
    pokemonImagen
  ) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.image = image;
    this.pokemon = pokemon;
    this.pokemonImagen;
    this.hover = false;
  }
  rect() {
    fill(0);
    noStroke();
    image(this.image, this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
  }
  setImagePokemon(newImagen) {
    this.pokemonImagen = newImagen;
  }
  pintartexto() {
    if (this.hover) {
      fill("#ffffff50");
      rect(
        this.posX + 4,
        this.posY + 4,
        this.sizeWidth - 8,
        this.sizeHeigth - 8,
        30,
        0,
        0,
        30
      );
    }
    fill(0);
    image(this.pokemonImagen, this.posX - 10, this.posY - 10, 75, 75);

    textFont(fontPokemon);
    textSize(28);
    fill("#515151");
    textAlign(LEFT, TOP);
    text(this.pokemon.nombre, this.posX + 76, this.posY + 8);

    fill(255);
    text(this.pokemon.nombre, this.posX + 75, this.posY + 7);
    fill("#515151");
    text("50", this.posX + 122, this.posY + 34);

    fill(255);
    text("50", this.posX + 121, this.posY + 33);
    fill("#515151");
    text(
      `${this.pokemon.vida}    ${this.pokemon.vidaTotal}`,
      this.posX + 281,
      this.posY + 31
    );
    fill(255);
    text(
      `${this.pokemon.vida}    ${this.pokemon.vidaTotal}`,
      this.posX + 280,
      this.posY + 30
    );

    fill(255);
    text(this.pokemon.nombre, this.posX + 75, this.posY + 7);
    if (this.pokemon.vida < this.pokemon.vidaTotal / 4) {
      fill(248, 88, 56);
    } else if (this.pokemon.vida < this.pokemon.vidaTotal / 2) {
      fill(248, 224, 56);
    } else {
      fill(33, 202, 56);
    }

    rect(
      this.posX + 237,
      this.posY + 20,
      (118 * this.pokemon.vida) / this.pokemon.vidaTotal,
      8
    );
  }

  textoPatalla() {
    if (selecciones.cancelar) {
      fill("#ffffff20");
      rect(this.posX + 549, this.posY + 345, 140, 30, 20);
    }
    textFont(fontPokemon);
    textSize(28);
    fill(0);
    textAlign(LEFT, TOP);
    text("Que pokemon vas a elegir PICHAAA", this.posX + 30, this.posY + 346);
    textSize(35);
    fill("#515151");
    text("CANCELAR", this.posX + 569, this.posY + 347);
    fill(255);
    text("CANCELAR", this.posX + 568, this.posY + 346);
  }
  draw() {
    this.rect();
    this.pokemon ? this.pintartexto() : this.textoPatalla();
  }
}
class RectPokemonSeleccionado {
  constructor(posX, posY, sizeWidth, sizeHeigth, image, pokemon) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.image = image;
    this.pokemon = pokemon;
    this.hover = false;
    this.imagenPokemon;
  }
  setImagePokemon(newImagen) {
    this.imagenPokemon = newImagen;
  }
  printText() {
    textSize(33);
    fill("#515151");
    text(this.pokemon.nombre, this.posX + 96, this.posY + 56);
    fill(255);
    text(this.pokemon.nombre, this.posX + 95, this.posY + 55);

    textSize(33);
    fill("#0091DB");
    rect(this.posX + 105, this.posY + 80, 50, 25);
    fill("#515151");
    text("Lv50", this.posX + 110, this.posY + 80);
    fill(255);
    text("Lv50", this.posX + 109, this.posY + 79);

    if (this.pokemon.vida < this.pokemon.vidaTotal / 4) {
      fill(248, 88, 56);
    } else if (this.pokemon.vida < this.pokemon.vidaTotal / 2) {
      fill(248, 224, 56);
    } else {
      fill(33, 202, 56);
    }

    rect(
      this.posX + 87,
      this.posY + 114,
      (140 * this.pokemon.vida) / this.pokemon.vidaTotal,
      8
    );

    fill("#515151");
    text(
      `${this.pokemon.vida}      ${this.pokemon.vidaTotal}`,
      this.posX + 136,
      this.posY + 126
    );
    fill(255);
    text(
      `${this.pokemon.vida}      ${this.pokemon.vidaTotal}`,
      this.posX + 135,
      this.posY + 125
    );

    fill(0);
    image(this.imagenPokemon, this.posX, this.posY + 20, 100, 100);
  }
  draw() {
    fill(0);
    image(this.image, this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
    this.printText();
  }
}
