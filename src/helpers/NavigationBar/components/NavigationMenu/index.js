import React from 'react';
import './index.scss';

const NavigationMenu = ({setMenuState , isMenuOpen}) => {
  const menuClass = isMenuOpen ? 'icon-clear font-22 icons' :  'icon-menu icons'
  return (
    <div className="navigationMenu d-flex flex-column align-items-center justify-content-center">
      <div className={`${menuClass}`} onClick={e=> setMenuState(!isMenuOpen)} ></div>
      <div className='icon-search icons'></div>
      <div className='icon-phone icons'></div>
    </div>
  );
};
export default NavigationMenu;