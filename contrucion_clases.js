class RectUpNew{
  constructor(posX, posY, sizeWidth, sizeHegth, color, text){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
  }
  rect(){
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.sizeWidth, this.sizeHegth);
  }
  draw(){
    this.rect()
  }
  
}
class RectDownNew{
  constructor(posX, posY, sizeWidth, sizeHegth, color, text){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
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

  border(bordes,posX, posY, sizeWidth, sizeHegth, borderColor, fillColor, radius){
    strokeWeight(bordes);
    stroke(borderColor);
    fill(fillColor);
    rect(posX, posY, sizeWidth, sizeHegth, radius);
  }
  borders(){
    fill(this.color);
    noStroke();
    rect( this.posX, this.posY, this.sizeWidth, this.sizeHegth );
    let borderWidth = [7, 5, 3];
    this.border(
      borderWidth[0],
      this.posX,
      this.posY,
      this.sizeWidth,
      this.sizeHegth,
      "#27302F",
      "#27302F",
      0
    );
    this.border(
      borderWidth[1],
      this.posX + borderWidth[0],
      this.posY + borderWidth[0],
      this.sizeWidth - 2 * (borderWidth[0] + 1),
      this.sizeHegth - 2 * (borderWidth[0] + 1),
      "#C5AA46",
      "#C5AA46",
      8
    );
    this.border(
      borderWidth[2],
      this.posX + borderWidth[0] + borderWidth[1],
      this.posY + borderWidth[0] + borderWidth[1],
      this.sizeWidth - 2 * (borderWidth[0] + borderWidth[1] + 1),
      this.sizeHegth - 2 * (borderWidth[0] + borderWidth[1] + 1),
      "#EAEFF9",
      this.color,
      4
    ); 
  }
  rect(){
    fill(0);
    noStroke();
    if (!onlyText) return
    textFont(fontPokemon);
    textSize(40);
    fill(255);
    textAlign(LEFT, TOP);
    text(
      this.separar().substring(0, this.currentTextIndex),
      this.posX + 30,
      this.posY + 15
    );
    if (this.textSpeedCounter >= this.textSpeedDelay) {
      if (this.currentTextIndex < this.separar().length) {
        this.currentTextIndex++;
      } else {
        escribiendo = !ok; 
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
  constructor(posX, posY, sizeWidth, sizeHegth, color){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
  }

  border(bordes,posX, posY, sizeWidth, sizeHegth, borderColor, fillColor, radius){
    strokeWeight(bordes);
    stroke(borderColor);
    fill(fillColor);
    rect(posX, posY, sizeWidth, sizeHegth, radius);
  }
  borders(){
    fill(this.color);
    noStroke();
    rect( this.posX, this.posY, this.sizeWidth, this.sizeHegth );
    let borderWidth = [7, 5];
    this.border(
      borderWidth[0],
      this.posX,
      this.posY,
      this.sizeWidth,
      this.sizeHegth,
      "#27302F",
      "#27302F",
      0
    );
    this.border(
      borderWidth[1],
      this.posX + borderWidth[0],
      this.posY + borderWidth[0],
      this.sizeWidth - 2 * (borderWidth[0] + 1),
      this.sizeHegth - 2 * (borderWidth[0] + 1),
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
      this.sizeHegth - 2 * 13,
      4
    );
  }
  draw(){
    this.borders()
    this.rect()
  }
  
}
class RectDownOptionNew{
  constructor(posX, posY, sizeWidth, sizeHegth, color, text){
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHegth = sizeHegth;
    this.color = color;
    this.text = text;
  }
  rect(){
      fill(this.color);
      textFont(fontPokemon);
      textSize(40);

      textAlign(LEFT, CENTER);
        text(
          this.text,
          this.posX + this.sizeWidth / 3,
          this.posY + this.sizeHegth / 2
        );
  }
  draw(){
    this.rect()

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
  limit() {

    if(onlyText){
      return
    }else {
      if (this.posX < this.dad.posX ) {
        this.posX = this.dad.posX ;
      }
  
      if (
        this.posX + this.sizeWidth > this.dad.posX + this.dad.sizeWidth
      ) {
        if(option1){
          this.posX = (this.dad.posX + this.dad.sizeWidth) / 2 + this.sizeWidth;
        }else{
  
          this.posX = (this.dad.posX + this.dad.sizeWidth) / 2;
        }
      }
  
      if (this.posY < this.dad.posY + 7) {
        this.posY = this.dad.posY + 7;
      }
  
      if (
        this.posY + this.dad.sizeHegth / 2 > this.dad.posY + this.dad.sizeHegth 
      ) {
        this.posY = this.dad.posY  + this.sizeHegth +7;
      }
    }
  
  }
  move(key){
    if (key === "ArrowUp") {
      this.posY -= this.sizeHegth;
    }
    if (key === "ArrowDown") {
      this.posY += this.sizeHegth;
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
    rect(this.posX, this.posY, this.sizeWidth - 30, this.sizeHegth - 30);
    fill(0);
    image(img[0], this.posX + 25, this.posY + this.sizeHegth / 2 - 10, 15, 30);
  }
}
