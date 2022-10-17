import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";
import MyImage from './Logo.png';
import { FiLogOut } from 'react-icons/fi';

export default function NavBar({user, setUser}) {

  function handleLogOut(){
    // user-service => remove token
    userService.logOut();
    // set the User state to null
    setUser(null);
  }

  return (

    <nav>

      <Link className='nav nav-1 app-icon-text' to="/">Weather </Link>
      <img className="app-logo-nav" src={MyImage} alt=""/>
      
      <Link className='nav nav-1 nav-no-icon nav-search-location' to="/weathers">Search Location</Link>
      
      <Link className='nav nav-1 nav-no-icon nav-location-list' to="/locationList">Location List</Link>
      
      <Link className='nav nav-2 logout-icon' to={""} onClick={handleLogOut}><FiLogOut /></Link>


      <span className='nav nav-2 welcome-message nav-no-icon' >Hi! {user.name}</span>

    </nav>

  );
}
