import React from 'react';
import './index.scss';

const MenuBar = ({setMenuState , isMenuOpen}) => {
  return (
    <div className=" menuBar d-flex flex-column justify-content-center">
      <div className='py-4 text-uppercase menu-option' >About Us</div>
      <div className='py-4 text-uppercase menu-option'>Tour destination</div>
      <div className='py-4 text-uppercase menu-option'>blog</div>
      <div className='py-4 text-uppercase menu-option'>contactUs</div>
      <div className='py-4 text-uppercase menu-option'>Privacy policy</div>
      <div className='py-4 text-uppercase menu-option'>faq</div>
    </div>
  );
};
export default MenuBar;