import React from 'react';
// import AboutUs from '../AboutUs/index';
import Banner from '../../helpers/Banner';
import NavigationBar from '../../helpers/NavigationBar';
import './index.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <NavigationBar />
      <Banner />
      {/* <AboutUs /> */}
    </div>
  );
};

export default Home;