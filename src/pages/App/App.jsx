import './App.css';
import {useState} from 'react';
import {getUser} from '../../utilities/users-service';
import {Routes, Route} from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import WeatherSearchPage from '../WeatherSearchPage/WeatherSearchPage';
import WeatherDetailPage from '../WeatherDetailPage/WeatherDetailPage';
import LocationListPage from '../LocationListPage/LocationListPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [weather, setWeather] = useState({});
  const [locationList, setLocationList] = useState();

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/weathers" element={<WeatherSearchPage/>}/>
            <Route path="/weathers/:weatherId" element={<WeatherDetailPage 
              user={user}
              weather={weather}
              setWeather={setWeather}
              locationList={locationList}
              setLocationList={setLocationList}
            />}/>
            <Route path="locationList" element={<LocationListPage
              weather={weather} 
              user={user} 
              locationList={locationList} 
              setLocationList={setLocationList}
            />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;