const Weather = require('../../models/weather');
const fetch = require('node-fetch')


// API ref = https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=

// https://api.openweathermap.org/data/2.5/weather?q=${req.body.query}&appid=${process.env.API_KEY}

// working properly
async function searchWeathers(req, res) {
  // need "&units=imperial" in URL in order to make the temp display in °F instead of °K (default value)
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.query}&units=imperial&appid=${process.env.API_KEY}`).then(res => res.json());
  // console.log(`controller/api searchWeather: `, weather)
  if (!weather.name) return res.json({error: `Location does not exist! Please try again.`});
  res.json(weather);
}

// check if this one is needed
async function getAllWeathers(req, res) {
  const weathers = await Weather.findById(req.params.id);
  console.log(`controller/api getAllWeather: `, weathers);
  res.json(weathers);
}

async function getWeatherDetails(req, res) {
  // attention: do not pass weather id since the api needs city name. Be careful
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.params}&appid=${process.env.API_KEY}`).then(res => res.json());
  // console.log(`controller/api getWeatherDetail: `, weather)
  res.json(weather);
}

async function addWeatherToLocationList(req, res) {

}

async function getLocationList(req, res) {

}

async function deleteWeatherFromLocationList(req, res) {

}

module.exports = {
  searchWeathers,
  getAllWeathers,
  getWeatherDetails,
  addWeatherToLocationList,
  getLocationList,
  deleteWeatherFromLocationList,
}