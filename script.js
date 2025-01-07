
let cityName = document.querySelector('.cityName');
let serachBar = document.querySelector('input');
let serachIcon = document.querySelector('button');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.hum');
let windSpeed = document.querySelector('.windSpeed');
let weather = document.querySelector('img');
let w = document.querySelector('.weather');
serachIcon.addEventListener('click', () => {
    api();
})
const api = async () => {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${serachBar.value}&appid=9d7cd41fdfd557b2f953eb51e0fc4bfb`;
    let data = await fetch(url);
    let actualData = await data.json();
    let temparature = Math.round(actualData.main.temp - 273.15);
    windSpeed.innerText = `${Math.round(actualData.wind.speed)}km/h`;
    humidity.innerText = `${actualData.main.humidity}%`;
    temp.innerText = `${temparature}°c`;
    console.log(actualData);
    cityName.innerText = actualData.name;
    w.innerText = actualData.weather[0].main;
    if (actualData.weather[0].main == 'Haze') {
        weather.src = "Haze.webp";
    }
    else if (actualData.weather[0].main == 'Clouds') {
        weather.src = "clouds.png";
    }
    else if (actualData.weather[0].main == 'Rain') {
        weather.src = "Rain.png";
    }
    else if (actualData.weather[0].main == 'Clear') {
        weather.src = "Clear.png";
    }
    else if (actualData.weather[0].main == 'Mist') {
        weather.src = "mist.webp";
    }
    else if (actualData.weather[0].main == 'Drizzles') {
        weather.src = "Drizzles.jpeg";
    }
    else if (actualData.weather[0].main == 'Smoke') {
        weather.src = "smoke.webp";
    }
     else if (actualData.weather[0].main == 'Fog') {
        weather.src = "smoke.webp";
    }
}
//for current temperature
const API= async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=9d7cd41fdfd557b2f953eb51e0fc4bfb`;
    let data= await fetch(url);
    let actualData=await data.json();
    let temparature = Math.round(actualData.main.temp - 273.15);
    windSpeed.innerText = `${Math.round(actualData.wind.speed)}km/h`;
    humidity.innerText = `${actualData.main.humidity}%`;
    temp.innerText = `${temparature}°c`;
    console.log(actualData);
    cityName.innerText = actualData.name;
    w.innerText = actualData.weather[0].main;
    if (actualData.weather[0].main == 'Haze') {
        weather.src = "Haze.webp";
    }
    else if (actualData.weather[0].main == 'Clouds') {
        weather.src = "clouds.png";
    }
    else if (actualData.weather[0].main == 'Rain') {
        weather.src = "Rain.png";
    }
    else if (actualData.weather[0].main == 'Clear') {
        weather.src = "Clear.png";
    }
    else if (actualData.weather[0].main == 'Mist') {
        weather.src = "mist.webp";
    }
    else if (actualData.weather[0].main == 'Drizzles') {
        weather.src = "Drizzles.jpeg";
    }
    else if (actualData.weather[0].main == 'Smoke') {
        weather.src = "smoke.webp";
    }
     else if (actualData.weather[0].main == 'Fog') {
        weather.src = "smoke.webp";
    }
}
API();
// const apiKey = '9d7cd41fdfd557b2f953eb51e0fc4bfb';
// const city = 'kolkata'; // Specify your city
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const { sunrise, sunset } = data.sys; // Get sunrise and sunset times
//     const currentTime = data.dt;         // Current time from API data

//     if (currentTime >= sunrise && currentTime <= sunset) {
//       console.log("It's daytime based on the weather data.");
//     } else {
//       console.log("It's nighttime based on the weather data.");
//     }
//   })
//   .catch(error => console.error('Error fetching weather data:', error));


