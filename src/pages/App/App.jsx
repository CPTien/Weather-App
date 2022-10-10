import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import WeatherSearchPage from '../WeatherSearchPage/WeatherSearchPage';
import WeatherDetailPage from '../WeatherDetailPage/WeatherDetailPage';
import LocationListPage from '../LocationListPage/LocationListPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    // set the user by calling getUser function
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