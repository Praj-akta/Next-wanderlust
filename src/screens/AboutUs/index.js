import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../helpers/PageHeader';
import Breadcrumbs from '../../helpers/Breadcrumbs';
import FaqsQuestionList from '../../helpers/FaqsQuestionList';
import quickBookingImg from '../../assets/images/quick-booking.png';
import valueForMoneyImg from '../../assets/images/value-for-money.png';
import wonderfulPlacesImg from '../../assets/images/world-of-places.png';
import availablePlacesImg from '../../assets/images/always-available.png';
import oneStopSolutionImg from '../../assets/images/one-stop-solution.png';
import customerSatisfactionImg from '../../assets/images/customerSatisfaction.png';
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
            imgSrc: valueForMoneyImg,
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
            imgSrc: customerSatisfactionImg,
            title: "Customer Satisfaction",
            description: `Our firm was formed with one goal; to ensure customer satisfaction. We are 
            Next Wanderlust always thrive to ensure you are not only satisfied but happy with the services
            provided. Our aim is not to build satisfied customers, our aim is to have loyal customers who 
            trust us with all their travel needs.`
        }
    ];

    return (
        <div className="page-container w-100">
            <Breadcrumbs title="About Next Wanderlust" routeName="About Us" />
            <div className="next-wanderlust-intro text-center">
                <PageHeader title="Next Wanderlust"/>
                <div className="font-weight-normal pb-2">
                    Why choose Next Wanderlust?
                </div>
                <div className="text-secondary font-size-12 w-50 mx-auto">
                    In a world full of established travel firms who charge a heavy
                    price for your vacations, Next Wanderlust is a budding organization
                    with an aim to provide you the best.
                </div>
            </div>
            <div className="d-flex w-100 flex-wrap justify-content-around p-5">
                {
                    options.map(({ imgSrc, title, description }, index) => {
                        const imgClass = index % 2 === 0 ? "even-class" : "odd-class";
                        return (
                            <div className="text-center font-size-14 options-div pt-3 mb-5" key={index}>
                                <div className="h-50">
                                    <img src={imgSrc} alt={title}
                                        className={`h-100 ${imgClass}`} />
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
            <div className="d-flex justify-content-between px-5">
                <h4 className="text-uppercase"> faq's </h4>
                <Link to="/faqs">
                    <div className="text-capitalize text-info font-weight-bold">
                        view all 
                    </div>
                </Link>
            </div>
            <FaqsQuestionList />
        </div>
        //bootstrap code using collapse
        // <div className="d-flex justify-content-between align-items-start pb-1" key={index}>
        //     <div>
        //         <div className="title"> {title} </div>
        //         <div id={id} className="collapse">
        //             {description}
        //         </div>
        //     </div>
        //     <button type="button" className="toggle-btn"
        //         data-toggle="collapse" data-target={`#${id}`}> + </button>
        // </div>
    );
}

export default AboutUs;
