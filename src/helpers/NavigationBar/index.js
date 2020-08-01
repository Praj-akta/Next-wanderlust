import React from 'react';
import Footer from '../Footer';
import SocialNetworks from './componenets/socialNetworks';
import NavigationMenu from './componenets/NavigationMenu';
import logo from '../../assets/images/logo-with-title.png';
import './index.scss';

const NavigationBar = () => {
  return (
    <div className="navigation">
      <div className="d-flex flex-column justify-content-between navigation__body">
        <div className="logo pt-4">
          <img className="navigation__logo" src={logo} alt="next-wanderlust"></img>
        </div>
        <NavigationMenu />
        <SocialNetworks />
      </div>
      <Footer />
    </div>
  );
};

export default NavigationBar;