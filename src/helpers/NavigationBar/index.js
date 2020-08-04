import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import MenuBar from './components/menuBar';
import SocialNetworks from './components/socialNetworks';
import NavigationMenu from './components/NavigationMenu';
import logo from '../../assets/images/logo-with-title.png';
import './index.scss';

const NavigationBar = ({setMenuState, isMenuOpen}) => {
  return (
    <React.Fragment>
        <div className="navigation shadow p-3 mb-5 bg-white rounded">
        <div className="d-flex flex-column justify-content-between navigation__body">
          <div className="logo pt-4">
            <Link to="/">
              <img className="navigation__logo" src={logo} alt="next-wanderlust"></img>
            </Link>
          </div>
          <NavigationMenu setMenuState={setMenuState} isMenuOpen={isMenuOpen}/>
          <SocialNetworks />
        </div>
        <Footer />
      </div>
      {isMenuOpen && <MenuBar />}
      
    </React.Fragment>
    
  );
};

export default NavigationBar;