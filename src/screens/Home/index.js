import React from 'react';
import Banner from '../../helpers/Banner';
import NavigationBar from '../../helpers/NavigationBar';
import './index.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <NavigationBar />
      <Banner />
    </div>
  );
};

export default Home;