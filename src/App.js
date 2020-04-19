import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'reset-css';
import './App.scss';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Packages from './components/Packages/Packages.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import logo from './images/logo.jpg';

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
        <Navbar  className="Navbar" light expand="md">
        <h3 >
            <img  src={logo} alt="logo" height="70" width="70"></img>
          </h3>
        <Nav className="mr-auto NavItems" navbar>
          <NavItem className="">
          
          </NavItem>
          <NavItem className="NavItem">
            <Link className="NavChild" to="/">Home</Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link className="NavChild" to="/about">About</Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link className="NavChild" to="/portfolio">Portfolio</Link>
          </NavItem>
          <NavItem className="NavItem">
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

    <footer className="MainFooter">
        <h3>
          This is a footer
        </h3>
    </footer>
    </div>
  );
}

export default App;
