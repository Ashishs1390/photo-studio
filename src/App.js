import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

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
        <h3 className="MainLogo">
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
          <div className="Socials">
          <span className="socials_whatsapp">
              <SocialIcon network="whatsapp" fgColor="#fff" bgColor="000" />  
              <span>+91-996014349</span>
            </span>
            <span className="socials_facebook">
              <SocialIcon network="facebook" url="https://www.facebook.com/makeoverbysweekar/" target="_blank" fgColor="#fff" bgColor="000" />  
            </span>
            <span className="socials_instagram">
              <SocialIcon network="instagram" url="https://instagram.com/sweekarofficial_mua?igshid=2ed3evom8sl" target="_blank" fgColor="#fff" bgColor="000" />  
            </span>
          </div>
        </Navbar>


    
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
{/* 
    <footer className="MainFooter">
      <div className="footerContent">
        <h3 className="FooterLogo">
          <img  src={logo} alt="logo" height="70" width="70"></img>
        </h3>
        
        <div className="Content Content-III">
          <h3 className="ContactUs-title">Contact Us On</h3>
          <div className="Socials">
            <span className="socials_whatsapp">
              <SocialIcon network="whatsapp" fgColor="#fff" bgColor="000" />  
              <span>+91-996014349</span>
            </span>
            <span className="socials_whatsapp">
              <SocialIcon network="email" fgColor="#fff" bgColor="000" />  
            </span>
            <span className="socials_facebook">
              <SocialIcon network="facebook" url="https://www.facebook.com/makeoverbysweekar/" target="_blank" fgColor="#fff" bgColor="000" />  
            </span>
            <span className="socials_instagram">
              <SocialIcon network="instagram" url="https://instagram.com/sweekarofficial_mua?igshid=2ed3evom8sl" target="_blank" fgColor="#fff" bgColor="000" />  
            </span>

          </div>

        </div>
      </div>
    </footer> */}
    </div>
  );
}

export default App;
