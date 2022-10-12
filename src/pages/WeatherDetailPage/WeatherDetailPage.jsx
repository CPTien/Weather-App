import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as weatherApiService from "../../utilities/weather-api-service";
import "./WeatherDetailPage.css";
import { useState } from "react";

function WeatherDetailPage({ weather, setWeather }) {
  
  const { weatherId } = useParams();
  // weatherId = Tokyo
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [feels_like, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind_speed, setWindSpeed] = useState("");

  const navigate = useNavigate();

  const savedLocationInfo = {
    location: weather.name,
    icon: icon,
    temp: temperature,
    description: description,
    feels_like: feels_like,
    humidity: humidity,
    wind_speed: wind_speed,
  };
  
  useEffect(function () {
    async function getWeather() {
      const weather = await weatherApiService.getWeatherDetails(weatherId);
      setWeather(weather);

      setIcon(weather.weather[0].icon);
      setTemperature(weather.main.temp);
      setDescription(weather.weather[0].description);
      setFeelsLike(weather.main.feels_like);
      setHumidity(weather.main.humidity);
      setWindSpeed(weather.wind.speed);

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
        {/* icon */}
        {/* <div>{weather.weather? <img alt={weather.name} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img> : null }</div> */}
        <div><img alt={weather.name} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img></div>

        {/* location */}
        <div><h1> {weather.name}</h1></div>

        {/* temp */}
        {/* <div>{weather.main ? <p>Temperature: {weather.main.temp.toFixed()} °F</p> : null }</div> */}
        <div><p>Temperature: {temperature} °F</p></div>

        {/* description */}
        {/* <div>{weather.weather ? <p>Description: {weather.weather[0].main}</p> : null }</div> */}
        <div><p>Description: {description}</p></div>

        {/* feels_like */}
        {/* <div>{weather.main ? <p>Feels Like: {weather.main.feels_like.toFixed()}</p> : null }</div> */}
        <div><p>Feels Like: {feels_like}</p></div>

        {/* humidity */}
        {/* <div>{weather.main ? <p>Humidity: {weather.main.humidity}</p> : null }</div> */}
        <div><p>Humidity: {humidity}</p></div>

        {/* wind_speed */}
        {/* <div>{weather.wind ? <p>Wind Speed: {weather.wind.speed.toFixed()}</p> : null }</div> */}
        <div><p>Wind Speed: {wind_speed}</p></div>

      </div>
      <button className="" onClick={handleAddToLocationList}>Add Location to List</button>
    </>
  );
}

export default WeatherDetailPage;