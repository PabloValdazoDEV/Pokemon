class RectUpNew{
  constructor(posX, posY, sizeWidth, sizeHeigth, color){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
  }
  rect(){
    fill(this.color);
    noStroke();
    // rect(this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
    image(img[1], this.posX, this.posY, canvasWidth, (canvasHeigth / 3) * 2);
  }
  draw(){
    this.rect()
  }
  
}
class RectDownNew{
  constructor(posX, posY, sizeWidth, sizeHeigth, color, text){
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
  border(bordes,posX, posY, sizeWidth, sizeHeigth, borderColor, fillColor, radius){
    strokeWeight(bordes);
    stroke(borderColor);
    fill(fillColor);
    rect(posX, posY, sizeWidth, sizeHeigth, radius);
  }
  borders(){
    fill(this.color);
    noStroke();
    rect( this.posX, this.posY, this.sizeWidth, this.sizeHeigth );
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
  rect(){
    fill(0);
    noStroke();
    if (!pantallaActual[3]) return
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
  draw(){
    this.borders()
    this.rect()
  }
  
}
class RectDownRidhtNew{
  constructor(posX, posY, sizeWidth, sizeHeigth, color){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
  }

  border(bordes,posX, posY, sizeWidth, sizeHeigth, borderColor, fillColor, radius){
    strokeWeight(bordes);
    stroke(borderColor);
    fill(fillColor);
    rect(posX, posY, sizeWidth, sizeHeigth, radius);
  }
  borders(){
    fill(this.color);
    noStroke();
    rect( this.posX, this.posY, this.sizeWidth, this.sizeHeigth );
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
  rect(){
    fill(this.color);
    noStroke();
    rect(
      this.posX + 12 ,
      this.posY + 12 ,
      this.sizeWidth - 2 * 13,
      this.sizeHeigth - 2 * 13,
      4
    );
  }
  draw(){
    this.borders()
    this.rect()
  }
  
}
class RectDownOptionNew{
  constructor(posX, posY, sizeWidth, sizeHeigth, color, text, size){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.color = color;
    this.text = text;
    this.size = size || 32
  }
  setText(newText) {
    if (this.text !== newText) {
      this.text = newText;
    }
  }
  rect(){
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
  draw(){
    this.rect()

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
  printAtack(position){
    rectDownLeft2.setText(`PP        ${pokemonActual.Ataques[position].pp}/${pokemonActual.Ataques[position].ppTotal} \nTIPO/${pokemonActual.Ataques[position].tipo}`);
    textoOnlyText =`El pokemon ${pokemonActual.nombre} ha usado ${pokemonActual.Ataques[position].nombre} \nescribe el texto`
    optionPosition = position

   
  }
  posicionSelect() {
    if(pantallaActual[2]){

    
    if (this.posX == 0 && this.posY <= this.dad.posY + this.sizeHeigth - 10 ) {

      this.printAtack(0)

    } else if (this.posX < this.posX + this.sizeWidth - 10 && this.posY <= this.dad.posY + this.sizeHeigth - 10 ) {
      this.printAtack(1)
    
    } else if (this.posX == 0 && this.posY >= this.dad.posY + this.sizeHeigth  + 7 ) {

      this.printAtack(2)

    } else if (this.posX == this.posX && this.posY >= this.dad.posY + this.sizeHeigth + 7) {

      this.printAtack(3)
    }
  }else if(espera){
    this.prueba()
    textoOnlyText =`El pokemon ${pokemonActual.nombre} del enemigo ha usado \n${pokemonActual.Ataques[optionPosition].nombre} escribe el texto`
    
    
    
  } else {
    restaPP = 1
textoOnlyText =
  `Que haras ${pokemonActual.nombre}?`
  }
  }
  prueba(){

    if(pokemonActual.Ataques[optionPosition].p === 0){
      return 
    }
    if(restaPP){
      rectUpBotRigth.printVida(pokemonActual, pokemonEnemigo)
        pokemonActual.Ataques[optionPosition].pp -= restaPP;
        restaPP = 0
      
    }
   

  }
  limit() {

      if (this.posX < this.dad.posX ) {
        this.posX = this.dad.posX ;
      }
  
      if (
        this.posX + this.sizeWidth > this.dad.posX + this.dad.sizeWidth - 30
      ) {
        if(pantallaActual[1]){
          this.posX = (this.dad.posX + this.dad.sizeWidth) / 2 + this.sizeWidth ;
        }else{
  
          this.posX = (this.dad.posX + this.dad.sizeWidth) / 2 - 30;
        }
      }
  
      if (this.posY < this.dad.posY + 7) {
        this.posY = this.dad.posY + 7;
      }
  
      if (
        this.posY + this.dad.sizeHeigth / 2 > this.dad.posY + this.dad.sizeHeigth 
      ) {
        this.posY = this.dad.posY  + this.sizeHeigth +7;

      }
    
  
  }
  move(key){
    if (key === "ArrowUp") {
      this.posY -= this.sizeHeigth;
    }
    if (key === "ArrowDown") {
      this.posY += this.sizeHeigth;
    }
    if (key === "ArrowRight") {
      this.posX += this.sizeWidth;
    }
    if (key === "ArrowLeft") {
      this.posX -= this.sizeWidth;
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
class RectUpBotNew{
  constructor(posX, posY, sizeWidth, sizeHeigth, pokemon){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.pokemon = pokemon
  }
  rect(){
    // fill(this.color);
    // noStroke();
    // rect(this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
    fill(0);
    image(this.pokemon, this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
  }
  draw(){
    this.rect()
  }
  
}
class RectUpBotLifeNew {
  constructor(posX, posY, sizeWidth, sizeHeigth, pokemon, vida) {
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeigth = sizeHeigth;
    this.pokemon = pokemon;
    this.vida = vida;
    this.vidaTotal = vida;
    if(this.posX === 50){
      this.barraVida = [this.posX + 100, this.posY + 40, (104 * 2.5) - 130 , (37 * 2.5) - 80];
    }else {
      this.barraVida = [this.posX + 120, this.posY + 40, this.sizeWidth - 140, this.sizeHeigth - 80];
    }
    
    this.vidaActualBarra = this.barraVida[2];
  }

  printVida(pokemonAtacante, pokemonDefensor) {
    const nuevaVida = pokemonDefensor.vida - pokemonAtacante.Ataques[optionPosition].dano;
    pokemonDefensor.vida = nuevaVida
    if (nuevaVida <= 0) {
      pokemonDefensor.vida = 0
      this.setLife(0);
    } else {
      this.setLife(nuevaVida);
    }
  }

  setLife(newLife) {
    this.vida = newLife;
  }

  animateLifeBar() {
    const targetWidth = (this.vida / this.vidaTotal) * (this.barraVida[2]);

    if (this.vidaActualBarra > targetWidth) {
      this.vidaActualBarra -= (this.vidaActualBarra - targetWidth) * 0.1;

      if (Math.abs(this.vidaActualBarra - targetWidth) < 0.5) {
        this.vidaActualBarra = targetWidth;
      }
    }
  }

  rect() {
    fill(33, 202, 56);
    noStroke();
    rect(this.barraVida[0], this.barraVida[1], this.vidaActualBarra, this.barraVida[3]);
   
    
    fill(0);
    image(this.pokemon, this.posX, this.posY, this.sizeWidth, this.sizeHeigth);
  }

  draw() {
    this.animateLifeBar();
    this.rect();
  }
}
