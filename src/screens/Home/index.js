import React, { useState } from 'react';
// import AboutUs from '../AboutUs/index';
import Banner from '../../helpers/Banner';
import NavigationBar from '../../helpers/NavigationBar';
import './index.scss';

const Home = () => {
  const [isMenuOpen, setMenuState] = useState(false);
  return (
    <div className='home-page d-flex flex-row'>
      <NavigationBar setMenuState={setMenuState} isMenuOpen={isMenuOpen}/>
      <Banner />
      {/* <AboutUs /> */}
    </div>
  );
};

export default Home;