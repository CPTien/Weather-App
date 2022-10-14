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
    // <Navbar bg="light" expand="lg">
    // <Container>
    //     <Navbar.Brand href="/">mytodos</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //         <Nav.Link href="/todoPage">home</Nav.Link>
    //         <Nav.Link href="/aboutPage">about</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="/todoPage">todos</NavDropdown.Item>   
    //             <NavDropdown.Item href="/notesPage">notes</NavDropdown.Item>
    //             <NavDropdown.Item href="/notes/notesListPage/:id">notes list</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //         </NavDropdown>
    //         </Nav>
    //     </Navbar.Collapse>

    //     <span>Welcome, {user.name}</span>
    //     &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
    // </Container> 
    // </Navbar>


  );
}
