import React from 'react';
import './index.scss';

const NavigationMenu = ({
  menuName,
  isMenuOpen,
  setMenuName,
  setMenuState
}) => {
  const menuClass = (isMenuOpen && menuName==="menus" )? 'icon-clear font-22 icons' :  'icon-menu icons';
  console.log(menuName)
  const onClickMenuIcon = (iconName) => {
    setMenuName(iconName)
    setMenuState(!isMenuOpen)
  }

  return (
    <div className="navigationMenu d-flex flex-column align-items-center justify-content-center">
      <div className={`${menuClass}`} onClick={e=> onClickMenuIcon("menus")} ></div>
      <div className='icon-search icons' onClick={e=> onClickMenuIcon("search")}></div>
      <div className='icon-phone icons'onClick={e=> onClickMenuIcon("contact")}></div>
    </div>
  );
};
export default NavigationMenu;