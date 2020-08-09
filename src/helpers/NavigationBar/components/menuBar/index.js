import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const MenuBar = ({
  history,
  isMenuOpen,
  setMenuState
}) => {
  const list = [
    { id: 1, displayName: "About us" },
    { id: 2, displayName: "Tour destination" },
    { id: 3, displayName: "blog" },
    { id: 4, displayName: "contact Us" },
    { id: 5, displayName: "Privacy policy" },
    { id: 6, displayName: "faq" }
  ];
  const navigateOnClick = (displayName) => {
    if(displayName === "About us"){
      history.push('/about');
      setMenuState(!isMenuOpen);
    }
  }
  return (
    <div className="menuBar d-flex flex-column justify-content-center shadow">
      {
        list.map(({ displayName }, index) => {
          return (
            <div key={index} 
              onClick={_ => navigateOnClick(displayName)}
              className='py-4 text-uppercase menu-option'>
              {displayName}
            </div>
          );
        })
      }
    </div>
  );
};
export default withRouter(MenuBar);