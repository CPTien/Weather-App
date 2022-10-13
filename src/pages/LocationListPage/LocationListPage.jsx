import * as weatherApiService from "../../utilities/weather-api-service";
import { useState, useEffect } from "react";
import "./LocationListPage.css";

function LocationListPage({ weather, locationList, setLocationList, user }) {

  const [userLocationList, setUserLocationList] = useState();

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function getUserLocationList() {
      const userLocationList = await weatherApiService.getLocationList();
      setUserLocationList(userLocationList);
      console.log(userLocationList);
    }
    getUserLocationList();
  }, [refresh]);

  async function deleteWeatherFromLocationList(id) {
    const removeEvent = await weatherApiService.deleteWeatherFromLocationList(id);
    setRefresh(!refresh);
  }

  return (
    <>
    <center>
      <h1 className="location-text"></h1>
      
      {userLocationList && userLocationList.map((weather, idx) => 
        <div className="weather-card" key={idx} >
          
          <div className="weather-icon"><img alt={weather.icon} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img></div>
          
          <div className="location-name">{weather.location}</div>

          {/* <div className="desc">{weather.description}</div> */}

          <div className="temp">{weather.temp} °F</div>

          <div className="detail-btn-class">
          <button className="detail-btn" onClick={() => {deleteWeatherFromLocationList(weather._id)}}>Delete</button>
          </div>

        </div>)}
    </center>
    </>
  );
}

export default LocationListPage;