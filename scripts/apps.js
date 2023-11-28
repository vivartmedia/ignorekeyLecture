import {apikey} from "./environment.js"

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('kdate');
const currentWeatherItemsEl = document.getElementById('current-weather-item');

function apiCall() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.694248118402&lon=-120.98107010612894&appid=${apikey}`)
        .then((response) => {
            return response.json
        })
        .then((data) => {
            console.log(data);
    })
}

apiCall()


