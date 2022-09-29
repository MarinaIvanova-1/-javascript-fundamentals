const got = require('got');
const apiKey = require('../apiKey');


class WeatherApi {
  constructor() {
  }

  fetchWeatherData(city, callback) {
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    got(url).then(response => JSON.parse(response.body))
    .then((weatherData) => {callback(weatherData)}); 
  }
}

// const api = new WeatherApi();

// api.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });

module.exports = WeatherApi;

// const got = require('got');
// const apiKey = require('../apiKey');
// const city = 'London';

// const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// got(url).then((response) => {weatherData = JSON.parse(response.body); console.log(weatherData)});


// got(url).then((response) => {
//   weatherData = JSON.parse(response.body);
//   console.log(weatherData);
// });