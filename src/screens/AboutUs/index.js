import React from 'react';
import quickBookingImg from '../../assets/images/quick-booking.png';
import wonderfulPlacesImg from '../../assets/images/world-of-places.png';
import availablePlacesImg from '../../assets/images/always-available.png';
import oneStopSolutionImg from '../../assets/images/one-stop-solution.png';
import './index.scss';

const AboutUs = () => {
    const options = [
        {
            imgSrc: oneStopSolutionImg,
            title: "One-Stop solution",
            description: `Next Wanderlust is a One Step Solution for all your travel needs.
            Be it an adventure outing with your friends, a honeymoon trip with
            your loved one or a family tour; we got all your travel needs covered.`
        },
        {
            title: "Value for your Money",
            description: `There is no better way to spend money than exploring the world. We at
            Next Wanderlust ensure that each penny you spend on...`
        },
        {
            imgSrc: wonderfulPlacesImg,
            title: "Wonderful Places",
            description: `We do our best to have you a wonderful experience by taking you to the 
            wonderful and amazing places around the world...`
        },
        {
            imgSrc: availablePlacesImg,
            title: "Always Available",
            description: `Need to clarify doubts or seek assistance with your plans or seeking a
            customized trip, we are just a phone call, WhatsApp or Email away. We ensure that all your
            needs are addressed the same day!`
        },
        {
            imgSrc: quickBookingImg,
            title: "Quick Booking",
            description: `Booking as quick on clicking a few clicks. We take care of all transportation
            and accommodation during your journey...`
        },
        {
            title: "Customer Satisfaction",
            description: `Our firm was formed with one goal; to ensure customer satisfaction. We are 
            Next Wanderlust always thrive to ensure you are not only satisfied but happy with the services
            provided. Our aim is not to build satisfied customers, our aim is to have loyal customers who 
            trust us with all their travel needs.`
        }
    ]
    return (
        <div className="about-us-container w-100">
            <div className="pt-4 pl-5 pb-4 about-us-header">
                <h3 className="text-dark m-0"> About Next Wanderlust </h3>
                <div className="font-size-12"> 
                    <span className="text-dark"> Home </span> 
                    <span>{">"}</span>
                    <span className="text-secondary"> About Us </span> 
                </div>
            </div>
            <div className="next-wanderlust-intro pt-5 pl-5">
                <div className="display-1 text-uppercase pb-2 font-weight-bolder text-white bg-image"> 
                    Next wanderlust
                </div>
                <div className="font-weight-normal">
                    Why choose Next Wanderlust?
                </div>
                <div className="w-50 text-secondary font-size-12">
                    In a world full of established travel firms who charge a heavy 
                    price for your vacations, Next Wanderlust is a budding organization 
                    with an aim to provide you the best.
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-around p-5 mb-5">
                {
                    options.map(({imgSrc, title, description}, index) => {
                        return (
                            <div className="text-center font-size-14 options-div pt-3 pb-5" key={index}>
                                <div className="h-50"> 
                                    <img src={imgSrc} alt={imgSrc ? title : null} className="h-100"/> 
                                </div>
                                <div className="text-dark font-weight-bold py-2">
                                    {title}
                                </div>
                                <div className="text-secondary">
                                    {description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutUs;