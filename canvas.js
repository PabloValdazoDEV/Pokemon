let canvasWidth = 700; // OK
let canvasHeigth = 400; // OK
let option1 = true;  // OK
let option2 = false; // OK
let onlyText = false; // OK
let fontPokemon;  // OK
let img;
let ok = false  // OK pero cambiar nombre
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
  // // rectDown.draw();


  // // rectDownRigth.draw();
  // // RectDownSelect.draw();

  // RectUpEnemy.draw()

  rectDown.draw()
  
if(option1){
  // // RectDownOption1.forEach((w)=>w.draw())
  rectDownRight.draw()
  rectDownRightSelect.draw()
  rectDownOption1.forEach((el)=>el.draw())

}else if (option2 ){
  // // RectDownOption2.forEach((w)=>w.draw())
  rectDownLeft.draw()
  rectDownLeftSelect.draw()
  rectDownOption2.forEach((el)=>el.draw())
}else {
  // // RectDownOption3.draw()
}




 
 








}

// // function limit() {

// //   if(onlyText){
// //     return
// //   }else {
// //     if (RectDownSelect.posX < rectDownRigth.posX ) {
// //       RectDownSelect.posX = rectDownRigth.posX ;
// //     }

// //     if (
// //       RectDownSelect.posX + RectDownSelect.sizeWidth > rectDownRigth.posX + rectDownRigth.sizeWidth
// //     ) {
// //       if(option1){
// //         RectDownSelect.posX = (rectDownRigth.posX + rectDownRigth.sizeWidth) / 2 + RectDownSelect.sizeWidth;
// //       }else{

// //         RectDownSelect.posX = (rectDownRigth.posX + rectDownRigth.sizeWidth) / 2;
// //       }
// //     }

// //     if (RectDownSelect.posY < rectDownRigth.posY + 7) {
// //       RectDownSelect.posY = rectDownRigth.posY + 7;
// //     }

// //     if (
// //       RectDownSelect.posY + RectDownSelect.sizeHegth > rectDownRigth.posY + rectDownRigth.sizeHegth
// //     ) {
// //       RectDownSelect.posY = (rectDownRigth.posY + rectDownRigth.sizeHegth) / 2  + RectDownSelect.sizeHegth * 2 + 20;
// //     }
// //   }

// // }




// // function keyPressed() {
// //   if (key === "Enter" || key === " ") {
// //     // // updateTextForRectDownOption3(textoOnlyText);

// //     if(option1){
// //       //Cuando haces click en la primera opcion
// //       option1 = false;
// //       option2 = true
// //       // // rectDownRigth.posX = 0;
// //       // // RectDownSelect.posX = 0;
// //       // // rectDownRigth.sizeWidth = (canvasWidth / 3) * 2;
// //       // // RectDownSelect.sizeWidth = (canvasWidth / 3)

// //     }else if (option2){
// //       //Cuando haces click en la Segunda opcion
// //       option2 = false;
// //       onlyText = true
// //       // // rectDownRigth.posX = canvasWidth;
// //       // // RectDownSelect.posX = canvasWidth * 2;



// //     }else {
// //       //Cuando haces click en solo texto
// //       onlyText = false
// //       option1 = true
// //       // // rectDownRigth.posX = canvasWidth / 2;
// //       // // RectDownSelect.posX = canvasWidth / 2;
// //       // // rectDownRigth.sizeWidth = canvasWidth / 2 ;
// //       // // RectDownSelect.sizeWidth = (canvasWidth / 4)

// //     }
// //   }
// //   // if(onlyText){
// //   //   return
// //   // }
// //   // if (key === "ArrowUp") {
// //   //   RectDownSelect.posY -= RectDownSelect.sizeHegth;
// //   // }
// //   // if (key === "ArrowDown") {
// //   //   RectDownSelect.posY += RectDownSelect.sizeHegth;
// //   // }
// //   // if (key === "ArrowRight") {
// //   //   RectDownSelect.posX += RectDownSelect.sizeWidth;
// //   // }
// //   // if (key === "ArrowLeft") {
// //   //   RectDownSelect.posX -= RectDownSelect.sizeWidth;
// //   // }


// //   limit();
// // }

function keyPressed() {
  if (key === "Enter" || key === " ") {
    rectDown.setText(textoOnlyText)

    if(option1){
      //Del 1/3 al 2/3
      option1 = false;
      option2 = true
      // // rectDownRigth.posX = 0;
      // // RectDownSelect.posX = 0;
      // // rectDownRigth.sizeWidth = (canvasWidth / 3) * 2;
      // // RectDownSelect.sizeWidth = (canvasWidth / 3)

      


    }else if (option2){
      //Del 2/3 al 3/3
      option2 = false;
      onlyText = true
      // // rectDownRigth.posX = canvasWidth;
      // // RectDownSelect.posX = canvasWidth * 2;





    }else {
      //Del 3/3 al 1/3
      onlyText = false
      option1 = true
      // // rectDownRigth.posX = canvasWidth / 2;
      // // RectDownSelect.posX = canvasWidth / 2;
      // // rectDownRigth.sizeWidth = canvasWidth / 2 ;
      // // RectDownSelect.sizeWidth = (canvasWidth / 4)

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







//Crear cuadros del Select 1 [ Texto, [Lucha, Mochila, Pokemons, Huida]]
//Crear cuadros del Select 2 [ [Ataque 1, Ataque 2, Ataque 3, Ataque 4], Datos del ataque]
//Crear cuadros del onlytext