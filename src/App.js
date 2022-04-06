import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar bg="myBlue" sticky="top" expand="md">
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />
          InfoX
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="History">History</Nav.Link>
            <NavDropdown title="Settings">
              <NavDropdown.Item href="Settings/Lmode">Light/Dark Mode</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
