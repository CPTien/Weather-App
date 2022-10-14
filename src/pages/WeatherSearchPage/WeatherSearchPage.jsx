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
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");

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
    setMin(weathers.main.temp_min.toFixed());
    setMax(weathers.main.temp_max.toFixed());
    setCountry(weathers.sys.country);
    setTime(weathers.dt);

    // testing below:
    console.log("handle weather search 1", weathers.main.temp_min.toFixed());
    console.log("handle weather search 2",weathers.main.temp_max.toFixed())
    console.log("handle weather search 3", weathers.sys.country)

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

          <WeatherCard 
          weather={weatherList} 
          temperature={temperature}
          icon={icon}
          description={description}
          min={min}
          max={max}
          time={time}
          country={country}
          key={weatherList.id} 
          getWeather={getWeather} 
          // lon={lon}
          // lat={lat}
          />

      </div>
      </center>
    </>
  );
}

export default WeatherSearchPage;