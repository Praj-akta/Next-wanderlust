import React from 'react';
import Banner from '../../helpers/Banner';
import { withRouter } from 'react-router-dom';
import './index.scss';

const Home = ({ 
  history,
  onClickKnowMore
}) => {
  return (
    <Banner 
      history={history} 
      onClickKnowMore={onClickKnowMore}/>
  );
};

export default withRouter(Home);