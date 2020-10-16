import React from 'react';
import './index.scss';

const SocialNetworks = () => {
    const socialNetworks = [
        {
            id: 1,
            className: "icon-facebook",
            link: "https://www.facebook.com/NextWanderlustIndia"
        },
        {
            id: 2,
            className: "icon-instagram",
            link: "https://www.instagram.com/next_wanderlust/"
        },
        {
            id: 3,
            className: "icon-twitter",
            link: "https://twitter.com/NextWanderlust"
        }
    ]
    return (
        <div className="social-network">
            {
                socialNetworks.map(({ link, className}, index) => {
                    return (
                        <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
                            <span className={`social-network__icon ${className}`} />
                        </a>
                    );
                })
            }
        </div>
    );
};
export default SocialNetworks;