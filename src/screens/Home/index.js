import React from 'react';
import Banner from '../../helpers/Banner';
import { withRouter } from 'react-router-dom';
import './index.scss';

const Home = ({ history }) => {
  return (
    <Banner history={history}/>
  );
};

export default withRouter(Home);