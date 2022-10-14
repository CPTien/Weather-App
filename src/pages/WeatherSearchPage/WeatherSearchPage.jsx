import { useState } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import * as weatherApiService from "../../utilities/weather-api-service";
import './WeatherSearchPage.css'
import { FiSearch } from 'react-icons/fi';

function WeatherSearchPage({ getWeather }) {

  // Search for Weathers using keywords
  const [weatherSearch, setWeatherSearch] = useState("");
  // Render List of Weathers via keywords
  const [weatherList, setWeatherList] = useState("");
  // sara's help
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

  // to get lon and lat
  // const [lon, setLon] = useState("");
  // const [lat, setLat] = useState("");
  // setLon(weathers.coord.lon);
  // setLat(weathers.coord.lat);

  async function handleWeatherSearch(evt) {
    evt.preventDefault();
    const weathers = await weatherApiService.searchWeathers(weatherSearch);
    setWeatherList(weathers);

    // method:2
    setIcon(weathers.weather[0].icon);
    setTemperature(weathers.main.temp.toFixed());
    setDescription(weathers.weather[0].description);

    // testing below:
    console.log("handle weather search 1", weathers);
    console.log("handle weather search 2", weathers.main.temp)
    console.log("handle weather search 3", weathers.weather[0].description)

    // to get the Lon & Lat of the location, testing below:
    console.log(`lon: ${weathers.coord.lon} && lat: ${weathers.coord.lat}`)
  }

  return (
    <>
      <center>
        
      <form className="weather-search-form" onSubmit={handleWeatherSearch}>

        {/* <h1 className="">Search for Weather - to be deleted</h1> */}

        <div className="input-plus-button">
        <input
          className="input-for-search"
          type="text"
          placeholder='Enter Location Here ...'
          required
          value={weatherSearch}
          onChange={(evt) => setWeatherSearch(evt.target.value)}
        />
        
        <button className='btn-for-search'>
        <FiSearch />
        </button>
        </div>

      </form>

      <div className="weather-card-div">
        {/* {!weatherList.error ? weatherList.map((weather) => ( */}
          <WeatherCard 
          weather={weatherList} 
          temperature={temperature}
          icon={icon}
          description={description}
          key={weatherList.id} 
          getWeather={getWeather} 

          // lon={lon}
          // lat={lat}
          />
        {/* )): weatherList.error} */}
      </div>
      </center>
    </>
  );
}

export default WeatherSearchPage;