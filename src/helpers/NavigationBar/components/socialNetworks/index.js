import React from 'react';
import './index.scss';

const SocialNetworks = () => {
    return (
        <div className="mb-5 d-flex flex-column text-center color-black">
            <a href='https://www.facebook.com/NextWanderlustIndia'> <span className='social-network-icon icon-facebook p-2 pb-3'></span> </a>
            <a href = 'https://www.instagram.com/next_wanderlust/'> <span className='social-network-icon icon-instagram p-2 pb-3'></span> </a>
            <a href = 'https://twitter.com/NextWanderlust'> <span className='social-network-icon icon-twitter p-2'></span> </a>
        </div>
    );
};
export default SocialNetworks;