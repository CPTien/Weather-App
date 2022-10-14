import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";
import MyImage from './Logo.png';
// import { CiLogout } from "react-icons/ci";


//new
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
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
    
    // <Navbar bsClass="aaa" bg="" expand="lg">
    // <Container bsClass='bs-con'>
    //     <Navbar.Brand href="/">Weather<img className="app-logo-nav" src={MyImage} alt=""/></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //         <Nav.Link href="/weathers">Weather</Nav.Link>
    //         <Nav.Link href="/locationList">Search Location</Nav.Link>
    //         </Nav>
    //     </Navbar.Collapse>

    //     <span>Hi, {user.name}</span>
    //     &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}><FiLogOut /></Link>
    // </Container> 
    // </Navbar>


  );
}
