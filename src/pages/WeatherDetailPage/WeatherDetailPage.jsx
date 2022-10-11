import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as weatherApiService from "../../utilities/weather-api-service";
import "./WeatherDetailPage.css";

function WeatherDetailPage({ weather, setWeather }) {
  
  const { weatherId } = useParams();

  const navigate = useNavigate();

  const check = {
    name: weather.name,
  };
  
  useEffect(function () {
    async function getWeather() {
      const weather = await weatherApiService.getWeatherDetails(weatherId);
      setWeather(weather);
      console.log(weather);
    }
    getWeather();
  }, []);

  async function handleAddToLocationList() {
    const addWeather = await weatherApiService.addWeatherToLocationList(check);
    console.log("weather detail 1", addWeather);
    navigate('/locationList')
  }

  return (
    <>
      <div>
        <h1>{weather.name}</h1>
      </div>
      <div>
        <h1>{weather.timezone}</h1>
      </div>
      <div>
        <h1>{weather.cod}</h1>
      </div>
      <button className="" onClick={handleAddToLocationList}>Add Location to List</button>
    </>
  );
}

export default WeatherDetailPage;