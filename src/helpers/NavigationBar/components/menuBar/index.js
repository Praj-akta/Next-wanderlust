import React from 'react';
import { withRouter } from 'react-router-dom';
import searchImg1 from '../../../../assets/images/search-icon-1.png';
import searchImg2 from '../../../../assets/images/search-icon-2.png';
import searchImg3 from '../../../../assets/images/search-icon-3.png';
import searchImg4 from '../../../../assets/images/search-icon-4.png';
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
  const searchList = [
    {
      imgSrc: searchImg1,
      title: 'Andaman'
    },
    {
      imgSrc: searchImg2,
      title: 'Bhandardara'
    },
    {
      imgSrc: searchImg3,
      title: 'Bhutan'
    },
    {
      imgSrc: searchImg4,
      title: 'Tarkarli'
    }
  ]

  const navigateOnClick = (displayName) => {
    if (displayName === "About us") {
      history.push('/about');
    } else if (displayName === "Tour destination") {
      history.push('/tourDestinations');
    } else if (displayName === `faq's`) {
      history.push('/faqs');
    }
    setMenuState(!isMenuOpen);
  }
  return (
    <div className="menuBar d-flex flex-column justify-content-center shadow">
      <div className="menus-container">
        {
          menuName === "menus" && list.map(({ displayName }, index) => {
            return (
              <div key={index}
                onClick={_ => navigateOnClick(displayName)}
                className='my-5 text-uppercase menu-option'>
                {displayName}
              </div>
            );
          })
        }
      </div>
      <div className="search-container">
        {
          menuName === "search" && searchList.map(({ imgSrc, title }, index) => {
            return (
              <div className="d-flex flex-column align-items-center">
                <div className="location-img"> 
                  <img src={imgSrc} alt="icons" />
                </div>
                <div className="image-title"> {title} </div>
              </div>
            )
          })
        }
      </div>
      <div className="contact-container">
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
                    : <h6 className="text-secondary font-weight-normal w-75"> 
                        {description} 
                      </h6>
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
export default withRouter(MenuBar);