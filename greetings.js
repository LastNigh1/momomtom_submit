const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreetings(text){
  greetings.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  greetings.innerText = `Hello ${text}`;
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function saveName(text){
  localStorage.setItem(USER_LS, text);
}


function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null){
    askForName();
  }else{
    paintGreetings(currentUser);
  }
}


function init(){
  loadName();
}

init();
