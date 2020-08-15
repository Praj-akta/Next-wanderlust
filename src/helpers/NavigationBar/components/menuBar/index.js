import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const MenuBar = ({
  history,
  menuName,
  isMenuOpen,
  setMenuState
}) => {
  const list = [
    { id: 1, displayName: "About us" },
    { id: 2, displayName: "Tour destination" },
    { id: 3, displayName: "blog" },
    { id: 4, displayName: "contact Us" },
    { id: 5, displayName: "Privacy policy" },
    { id: 6, displayName: `faq's` }
  ];
  const contactList = [
    {
      id: 1,
      title: "Address",
      description: `Is an Indian group of islands in the Bay of Bengal. These
        roughly 300 islands are known for their palm, 400605`
    },
    { 
      id: 2, 
      title: "Email", 
      description: "wecare@nextwanderlust.com", 
      link : "mailto:manishchaugule11@gmail.com"
    },
    { 
      id: 3, 
      title: "Call", 
      link : "tel:+917021196719",
      description: "+91 7021196719"
    }
  ];
  
  const navigateOnClick = (displayName) => {
    if (displayName === "About us") {
      history.push('/about');
      setMenuState(!isMenuOpen);
    }
  }
  return (
    <div className="menuBar d-flex flex-column justify-content-center shadow">
      {
        menuName === "menus" && list.map(({ displayName }, index) => {
          return (
            <div key={index}
              onClick={_ => navigateOnClick(displayName)}
              className='my-4 text-uppercase menu-option'>
              {displayName}
            </div>
          );
        })
      }
      {
        menuName === "contact" && contactList.map(({ title, description, link }, index) => {
          return (
            <div key={index} className="pb-5 contact-list">
              <h3> {title} </h3>
              {
                title !== 'Address' 
                  ? <a href={`${link}`}>
                      <h6 className="text-secondary font-weight-normal"> 
                        {description} 
                      </h6> 
                    </a>
                  : <h6 className="text-secondary font-weight-normal"> 
                      {description} 
                    </h6>
              }
            </div>
          );
        })
      }
    </div>
  );
};
export default withRouter(MenuBar);