import { Link } from "react-router-dom";
import "./WeatherCard.css";



function WeatherCard({ weather, temperature, icon, description }) {

  return (
    
    <div className="container">
      <div className="weather-card">
      {/* 1st method - to call the img from api */}
      {/* <div className="weather-icon">{weather.weather? <img alt={weather.name} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img> : null }</div> */}

      <div className="weather-icon"><img alt={icon} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img></div>
      {/* <div className="weather-icon"><img alt="" src="http://openweathermap.org/img/wn/01d@2x.png"></img></div> */}
      
      {/* 2nd method - to call the img from public local storage */}
      {/* <div>{weather.weather? <img src={`icons/${weather.weather[0].icon}.png`}></img> : null }</div> */}
      
      <div className="location-name"> {weather.name}</div>
      {/* <div className="location-name"> Kaohsiung City</div> */}

      {/* shift + option + 8 = ° */}
      {/* toFixed method rounds the number */}
      {/* cannot just to {weather.main.temp}, need to have the condition */}

      {/* <div className="temp">{weather.main ? <p> {weather.main.temp.toFixed()} °F</p> : null }</div> */}
      {weather.name !== undefined &&
      <div className="temp"><p> {temperature} °F</p> </div>}
      {/* <div className="temp"><p> 79.03 °F</p> </div> */}

      {/* <div>{weather.weather ? <p>{weather.weather[0].main}</p> : null }</div> */}
      {/* <div><p>{description}</p></div> */}
      {/* <div className="desc"><p>few clouds</p></div> */}
      

      
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