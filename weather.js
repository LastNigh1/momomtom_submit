
const weather = document.querySelector(".js-weather")

const API_KEYS = "97dd87daaec32d012aaa07820e56874e";
const COORDS_LS = "coords";

function getWeather(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
  ).then(function(response){
    return response.json()
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}


function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  console.log(coordsObj);
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}

function handleGeoFail(postition){
  alert("Can't access geo location!")
}


function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoFail);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS_LS)
  if(loadedCoords === null){
    askForCoords();
  }else{
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}


function init(){
  loadCoords();
}

init();
