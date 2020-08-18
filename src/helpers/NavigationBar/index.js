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
  onClickKnowMore
}) => {
  return (
    <React.Fragment>
      <div className="navigation shadow p-3 mb-5 bg-white rounded">
        <div className="d-flex flex-column justify-content-between navigation__body">
          <div className="logo pt-4">
            <Link to="/">
              <img src={logo}
                alt="next-wanderlust"
                className="navigation__logo"
                onClick={_ => onClickKnowMore(false)} />
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