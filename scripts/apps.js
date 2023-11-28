import {apikey} from "./environment.js"

// function ApiCall() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${ApiKey}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data);
//     })
// }

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


