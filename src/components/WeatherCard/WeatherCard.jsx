import { Link } from "react-router-dom";
import "./WeatherCard.css";

// icon URL example = http://openweathermap.org/img/wn/10d@2x.png


function WeatherCard({ weather }) {
// weather.map((w) => {return console.log(w)})
console.log("this is from weather card", weather, typeof weather)
  return (
    <div className="weather-card">
      {/* 1st method - to call the img from api */}
      <div className="weather-icon">{weather.weather? <img alt={weather.name} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img> : null }</div>

      {/* 2nd method - to call the img from public local storage */}
      {/* <div>{weather.weather? <img src={`icons/${weather.weather[0].icon}.png`}></img> : null }</div> */}

      <div className="Location-name">{weather.name}</div>
      {/* shift + option + 8 = ° */}
      {/* toFixed method rounds the number */}
      {/* cannot just to {weather.main.temp}, need to have the condition */}
      <div className="temp">{weather.main ? <p>{weather.main.temp.toFixed()} °F</p> : null }</div>
      <div>{weather.weather ? <p>{weather.weather[0].main}</p> : null }</div>

      {/* if there is no search, do not show the detail button! */}
      {weather.name !== undefined &&      
      <div>
        <Link to={`/weathers/${weather.name}`}>
        {/* <Link to={`/weathers/${lon}&&${lat}`}> */}
          <button className="detail-btn">
            Details
          </button>
        </Link>
      
      </div>}
    </div>
  );
}

export default WeatherCard;