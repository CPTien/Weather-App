import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as weatherApiService from "../../utilities/weather-api-service";
import "./WeatherDetailPage.css";

function WeatherDetailPage({ weather, setWeather, lon, lat }) {
  
  const { weatherId } = useParams();
  // weatherId = Tokyo

  const navigate = useNavigate();

  const savedLocationInfo = {
    location: weather.name,
    // icon: weather.weather[0].icon,
    // temp: weather.main.temp,
    // feels_like: weather.main.feels_like,
    // humidity: weather.main.humidity,
    // wind_speed: weather.wind.speed
  };
  
  useEffect(function () {
    async function getWeather() {
      const weather = await weatherApiService.getWeatherDetails(weatherId);
      setWeather(weather);
      console.log("get weather function in detail page",weather);
    }
    getWeather();
  }, []);

  async function handleAddToLocationList() {
    const addWeather = await weatherApiService.addWeatherToLocationList(savedLocationInfo);
    console.log("handel add to location list in detail page", addWeather);
    navigate('/locationList')
  }

  return (
    <>
      <div>
        <div>{weather.weather? <img alt={weather.name} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img> : null }</div>
        <div><h1> {weather.name}</h1></div>
        <div>{weather.main ? <p>Temperature: {weather.main.temp.toFixed()} °F</p> : null }</div>
        <div>{weather.weather ? <p>Description: {weather.weather[0].main}</p> : null }</div>
        <div>{weather.main ? <p>Feels Like: {weather.main.feels_like.toFixed()}</p> : null }</div>
        <div>{weather.main ? <p>Humidity: {weather.main.humidity}</p> : null }</div>
        <div>{weather.wind ? <p>Wind Speed: {weather.wind.speed.toFixed()}</p> : null }</div>
      </div>
      <button className="" onClick={handleAddToLocationList}>Add Location to List</button>
    </>
  );
}

export default WeatherDetailPage;