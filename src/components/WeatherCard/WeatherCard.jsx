import { Link } from "react-router-dom";
import "./WeatherCard.css";


function WeatherCard({ weather, temperature, icon, description, min, max, time, country }) {

  return (
    
    <div className="container">
      <div className="weather-card">

      <div className="weather-icon"><img alt={icon} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img></div>
      
      {/* 2nd method - to call the img from public local storage */}
      {/* <div>{weather.weather? <img src={`icons/${weather.weather[0].icon}.png`}></img> : null }</div> */}

      {weather.name !== undefined &&
      <div className="location-name"> {weather.name} - {country}</div>}

      {/* <div className="temp">{weather.main ? <p> {weather.main.temp.toFixed()} °F</p> : null }</div> */}
      {weather.name !== undefined &&
      <div className="temp"><p> {temperature} °F</p> </div>}
      
      {/* min max temp */}
      {weather.name !== undefined &&
      <div className="min-max-temp"><p> Min - {min} °F | Max - {max} °F</p> </div>}
      
      {/* if there is no search, do not show the detail button! */}
      {weather.name !== undefined &&      
      <div className="detail-btn-class">
        <Link to={`/weathers/${weather.name}`}>
          <button className="detail-btn">
            Details
          </button>
        </Link>
      
      </div>}
      </div>
    </div>
  );
}

export default WeatherCard;