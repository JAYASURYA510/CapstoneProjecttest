import './App.css'
import Athuntication from './Compponents/Athuntication'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Headers from './Compponents/Headers';
import { FaHome,FaUserCircle } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { PiDressDuotone } from "react-icons/pi";
import { GiAmpleDress } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { BrowserRouter as Router, Route, Routes,  Link } from 'react-router-dom';
import HomePage from './Compponents/HomePage';

function App() {


  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">  <img
              src="\20240205_141501.png"
              width="120"
              height="55"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-btn' to="/">  <FaHome />  Home  </Link>
            <a className="nav-link" href="#about">  <FcAbout />About</a>
            <Nav.Link href="#link"><FaUserCircle />  User 
            </Nav.Link>
            <Nav.Link href="#Feedback"><VscFeedback />  Feed Back
            </Nav.Link>
            <PiDressDuotone /> <NavDropdown title="Dress Types" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Stylish& Fashion">
              <PiDressDuotone /> Stylish& Fashion 
              </NavDropdown.Item>
              <NavDropdown.Item href="#Treditional">
              <GiAmpleDress /> Treditional
              </NavDropdown.Item>
              <NavDropdown.Item href="#Cashul">Cashul</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/athuntication" className="nav-item">
          <a className="nav-link" href="#"> <FaUserCircle /> Register</a>
        </Link>
            <Link to="/HomePage" className="nav-item">
          <a className="nav-link" href="#"> <FaUserCircle /> HomePage</a>
        </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Routes>
      <Route>
        <Route path='/' element={<Headers />} />
      <Route path="/athuntication" element={<Athuntication />} />
      <Route path="/HomePage" element={<HomePage /> } />
      </Route>
     </Routes>
    </div>
  )
}

export default App
