import React from 'react';
import './index.scss';

const NavigationMenu = ({setMenuState , isMenuOpen}) => {
  return (
    <div className="navigationMenu d-flex flex-column align-items-center justify-content-center">
      <div className='icon-menu icons' onClick={e=> setMenuState(!isMenuOpen)} ></div>
      <div className='icon-search icons'></div>
      <div className='icon-phone icons'></div>
    </div>
  );
};
export default NavigationMenu;