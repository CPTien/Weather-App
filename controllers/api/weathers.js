const Weather = require('../../models/weather');
const fetch = require('node-fetch')


// https://api.openweathermap.org/data/2.5/weather?q=${req.body.query}&appid=${process.env.API_KEY}

// working properly
async function searchWeathers(req, res) {
  // need "&units=imperial" in URL in order to make the temp display in °F instead of °K (default value)
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.query}&units=imperial&appid=${process.env.API_KEY}`).then(res => res.json());
  // console.log(`controller/api searchWeather: `, weather)
  if (!weather.name) return res.json({error: `Location does not exist! Please try again.`});
  res.json(weather);
}


async function getAllWeathers(req, res) {
  const weathers = await Weather.find({users: req.user._id});
  console.log(`controller/api getAllWeather: `, weathers);
  res.json(weathers);
}

async function getWeatherDetails(req, res) {
  // attention: do not pass weather id since the api needs city name. Be careful

  // to fetch current data only:
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.params}&units=imperial&appid=${process.env.API_KEY}`).then(res => res.json());

  // using lon and lat to fetch forecast data:
  // const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.params}&units=imperial&appid=${process.env.API_KEY_FOR_FORCAST}`).then(res => res.json());
  // console.log(`controller/api getWeatherDetail: `, weather)
  res.json(weather);
}

async function addWeatherToLocationList(req, res) {
  const locationList = await Weather(req.body);
  req.body.user = req.user._id;
  const newLocationList = new Weather(req.body); 
  await newLocationList.save();
  res.json(newLocationList)
  // let weather = await Weather.findOne({weatherId: req.body.name})
  // if (weather) {
  //     weather.users.push(req.user._id);
  //     await weather.save();
  //     res.json(weather);
  // } else {
  //     req.body.users = req.user._id;
  //     const newWeather = new Weather(req.body);
  //     await newWeather.save();
  //     res.json(newWeather);
  // }
}

async function getLocationList(req, res) {
  const locationList = await Weather.find({ user: req.user._id }).sort("-createdAt");
  console.log( "controller weather api - getLocationList " , locationList)
  console.log(req.user._id)
  res.json(locationList);
}

async function deleteWeatherFromLocationList(req, res) {
  // const removeWeather = await Weather.findByIdAndDelete(req.params.id);
  // console.log(removeEvent)
  // res.json(removeEvent);
}

module.exports = {
  searchWeathers,
  getAllWeathers,
  getWeatherDetails,
  addWeatherToLocationList,
  getLocationList,
  deleteWeatherFromLocationList,
}