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
      
      <Link className='nav nav-1' to="/">Home Page</Link>
      &nbsp;&nbsp;
      <Link className='nav nav-1' to="/weathers">Weather Search Page</Link>
      &nbsp;&nbsp;
      <Link className='nav nav-1' to="/locationList">Location List Page</Link>
      &nbsp;&nbsp;
      <span className='nav nav-2' >Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link className='nav nav-2' to={""} onClick={handleLogOut}>Logout</Link>
      &nbsp;&nbsp;

    </nav>
  );
}
