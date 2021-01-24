
const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1")



function twoDigits(attr){
  if(attr < 10){
    return `0${attr}`;
  }else{
    return attr;
  }
}

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();
