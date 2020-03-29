import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import 'reset-css';
import './App.scss';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Packages from './components/Packages/Packages.js';
import Portfolio from './components/Portfolio/Portfolio.js';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar  className="Navbar" color="dark" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="NavChild" to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link className="NavChild" to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link className="NavChild" to="/portfolio">Portfolio</Link>
          </NavItem>
          <NavItem>
            <Link className="NavChild" to="/packages">Packages</Link>
          </NavItem>
          </Nav>
        </Navbar>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/packages">
            <Packages />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
