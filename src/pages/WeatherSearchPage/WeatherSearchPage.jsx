import { useState } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import * as weatherApiService from "../../utilities/weather-api-service";
import './WeatherSearchPage.css'

function WeatherSearchPage({ getWeather }) {

  // Search for Weathers using keywords
  const [weatherSearch, setWeatherSearch] = useState("");
  // Render List of Weathers via keywords
  const [weatherList, setWeatherList] = useState("");
  // sara's help
  // const [temperature, setTemperature] = useState([]);
  // const [description, setDescription] = useState([]);

  // to get lon and lat
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  async function handleWeatherSearch(evt) {
    evt.preventDefault();
    const weathers = await weatherApiService.searchWeathers(weatherSearch);
    setWeatherList(weathers);
    setLon(weathers.coord.lon);
    setLat(weathers.coord.lat);
    // testing below:
    console.log("handle weather search 1", weathers);
    console.log("handle weather search 2", weathers.main.temp)
    console.log("handle weather search 3", weathers.weather[0].description)
    // setTemperature(weathers.main.temp);
    // setDescription(weathers.weather[0].description);
    // to get the Lon & Lat of the location, testing below:
    console.log(`lon: ${weathers.coord.lon} && lat: ${weathers.coord.lat}`)
  }

  return (
    <>
      <form className="" onSubmit={handleWeatherSearch}>
        <br />
        <h1>Search for Weather</h1>

        <input
          type="text"
          placeholder='Search Location here ...'
          required
          value={weatherSearch}
          onChange={(evt) => setWeatherSearch(evt.target.value)}
        />
        
        <button className='searchBtn'>
          Search
        </button>

      </form>

      <div>
        {/* {!weatherList.error ? weatherList.map((weather) => ( */}
          <WeatherCard 
          weather={weatherList} 
          key={weatherList.id} 
          getWeather={getWeather} 
          lon={lon}
          lat={lat}
          />
        {/* )): weatherList.error} */}
      </div>
    </>
  );
}

export default WeatherSearchPage;