import React from 'react';
import { Link } from 'react-router-dom';
// import MenuBar from './components/menuBar';
import logo from '../../assets/images/logo-with-title.png';
import './index.scss';

const MobileHeader = ({
  menuName,
  isMenuOpen,
  setMenuName,
  setMenuState,
  onClickKnowMore
}) => {
  const onClickMenuIcon = (iconName) => {
    setMenuName(iconName)
    setMenuState(!isMenuOpen)
  }
  return (
    <React.Fragment>
      <div className="mobile-header shadow  bg-white rounded">
        <div className="mobile-header__body">
          <div className="logo">
            <Link to="/">
              <img src={logo}
                alt="next-wanderlust"
                className="mobile-header__logo"
                onClick={_ => onClickKnowMore(false)} />
            </Link>
          </div>
          <div className = "menu-options">
            <div className = "icon-search menu-options__icons" onClick={e=> onClickMenuIcon("search")}></div>
            <div className = "icon-menu menu-options__icons" onClick={e=> onClickMenuIcon("menus")}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileHeader;