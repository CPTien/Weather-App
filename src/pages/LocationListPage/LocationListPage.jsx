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
      <h1 className="">My Locations</h1>
      
      {userLocationList && userLocationList.map((weather, idx) => 
        <div key={idx} >
          
          <div><img alt={weather.icon} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img></div>
          
          <div className="">Location: {weather.location}</div>

          <div className="">Description: {weather.description}</div>

          <div className="">Temperature: {weather.temp}</div>

          <footer className="">

          <button className="" onClick={() => {deleteWeatherFromLocationList(weather._id)}}>Delete</button>

          </footer>

        </div>)}
      </>
  );
}

export default LocationListPage;