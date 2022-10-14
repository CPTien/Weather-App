import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({user, setUser}) {

  function handleLogOut(){
    // user-service => remove token
    userService.logOut();
    // set the User state to null
    setUser(null);
  }

  return (

    <nav>

      <Link className='nav nav-1 app-icon' to="/">Weather +</Link>
      
      <Link className='nav nav-1 nav-no-icon' to="/weathers">Search Location</Link>
      
      <Link className='nav nav-1 nav-no-icon' to="/locationList">Location List</Link>
      
      <Link className='nav nav-2 nav-no-icon' to={""} onClick={handleLogOut}>Logout</Link>

      <span className='nav nav-2 welcome-message nav-no-icon' >Hi! {user.name}</span>

    </nav>

  );
}
