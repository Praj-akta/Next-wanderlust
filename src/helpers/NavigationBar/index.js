import React from 'react';
import Footer from '../Footer';
import SocialNetworks from './componenets/socialNetworks';
import NavigationMenu from './componenets/NavigationMenu';
import MenuBar from './componenets/menuBar'
import logo from '../../assets/images/logo-with-title.png';
import './index.scss';

const NavigationBar = ({setMenuState, isMenuOpen}) => {
  return (
    <React.Fragment>
        <div className="navigation shadow p-3 mb-5 bg-white rounded">
        <div className="d-flex flex-column justify-content-between navigation__body">
          <div className="logo pt-4">
            <img className="navigation__logo" src={logo} alt="next-wanderlust"></img>
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