import React from 'react';
import './index.scss';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="pt-4 pl-4 pb-4 about-us-header">
                <h3 className="text-dark m-0"> About Next Wanderlust </h3>
                <div className="breadcrumbs"> 
                    <span className="text-dark"> Home </span> 
                    <span>{">"}</span>
                    <span className="text-secondary"> About Us </span> 
                </div>
            </div>
            <div className="next-wanderlust-intro pt-5 pl-4">
                <div className="display-1 text-uppercase pb-1 font-weight-bolder text-white bg-image"> 
                    Next wanderlust
                </div>
                <div>
                    Why choose Next Wanderlust?
                </div>
                <div className="w-50 text-secondary">
                    In a world full of established travel firms who charge a heavy 
                    price for your vacations, Next Wanderlust is a budding organization 
                    with an aim to provide you the best.
                </div>
            </div>
        </div>
    )
}

export default AboutUs;