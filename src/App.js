import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="myBlue" sticky="top" expand="md">
        <Navbar.Brand href="/" class="linkText">
          <img src={logo} width="40px" height="40px" />
          InfoX
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="history">History</Nav.Link>
            <NavDropdown title="settings">
              <NavDropdown.Item href="Settings/Lmode">Light/Dark Mode</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
