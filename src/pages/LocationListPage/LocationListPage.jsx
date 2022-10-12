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
          <div className="">
            {weather.location}
          </div>
          <footer>
            <button className="" onClick={() => {deleteWeatherFromLocationList(weather._id)}}>Delete</button>
          </footer>
        </div>)}
      </>
  );
}

export default LocationListPage;