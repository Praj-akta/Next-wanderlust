import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-with-title.png';
import SocialNetworks from '../socialNetworks';
import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img src={logo}
            alt="next-wanderlust"
            className="footer__logo-image"/>
        </Link>
      </div>
      <div className="footer__contact-text">
        <div>
          Thane, Maharashtra
        </div>
        <div className="py-2">
        <a href={`mailto:manishchaugule11@gmail.com`}>
          wecare@nextwanderlust.com
        </a>
        </div>
        <div>
          <a href={`tel:+917021196719`}>
            +91 7021196719
          </a>
        </div>
      </div>
      <div className="footer__send-enquiry text-white text-center text-uppercase">
        send enquiry
      </div>
      <div className= "footer__social-network">
        <div className = "footer__follow-us">
          Follow Us
        </div>
        <SocialNetworks />
      </div>
    </div>
    
  );
};

export default Footer;