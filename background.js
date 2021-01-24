const body = document.querySelector("body");

const IMG_NUMBER = 3;

function genRandom(){
  return Math.floor(Math.random() * IMG_NUMBER);

}

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}



function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
