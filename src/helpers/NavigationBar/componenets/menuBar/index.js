import React , { useState }from 'react';
import './index.scss';

const MenuBar = ({setMenuState , isMenuOpen}) => {
  return (
    <div className=" menuBar d-flex flex-column justify-content-center">
      <div className='py-4 text-uppercase'>About Us</div>
      <div className='py-4 text-uppercase'>Tour destination</div>
      <div className='py-4 text-uppercase'>blog</div>
      <div className='py-4 text-uppercase'>contactUs</div>
      <div className='py-4 text-uppercase'>Privacy policy</div>
      <div className='py-4 text-uppercase'>faq</div>
    </div>
  );
};
export default MenuBar;