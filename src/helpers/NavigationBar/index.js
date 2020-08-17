import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import MenuBar from './components/menuBar';
import SocialNetworks from './components/socialNetworks';
import NavigationMenu from './components/NavigationMenu';
import logo from '../../assets/images/logo-with-title.png';
import './index.scss';

const NavigationBar = ({
  menuName,
  isMenuOpen,
  setMenuName,
  setMenuState,
  onClickKnowMore,
  isKnowMoreClicked
}) => {
  return (
    <React.Fragment>
      <div className="navigation-side-bar d-flex flex-row">
        <div className="navigation shadow p-3 mb-5 bg-white rounded">
          <div className="d-flex flex-column justify-content-between navigation__body">
            <div className="logo pt-4">
              <Link to="/">
                <img src={logo} 
                  alt="next-wanderlust" 
                  className="navigation__logo"
                  onClick={_ => onClickKnowMore(false)}/>
              </Link>
            </div>
            <NavigationMenu
              menuName={menuName}
              isMenuOpen={isMenuOpen}
              setMenuName={setMenuName}
              setMenuState={setMenuState}
            />
            <SocialNetworks />
          </div>
          <Footer />
        </div>
        {
          isKnowMoreClicked && (
            <div className="banner-sidebar">
              <div className="overlay overlay-sidebar" />
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h3 className="display-4 text-white text-uppercase font-weight-bold">
                  Andaman
                </h3>
                <h4 className="banner-sidebar__sub-title banner-subtitle text-white pt-2 pb-2">
                  Island Paradise
                </h4>
              </div>
            </div>
          )
        }
      </div>
      {
        isMenuOpen &&
        <MenuBar
          menuName={menuName}
          isMenuOpen={isMenuOpen}
          setMenuState={setMenuState} />
      }
    </React.Fragment>
  );
};

export default NavigationBar;