import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../../helpers/PageHeader';
import quickBookingImg from '../../../../assets/images/quick-booking.png';
import wonderfulPlacesImg from '../../../../assets/images/world-of-places.png';
import availablePlacesImg from '../../../../assets/images/always-available.png';
import oneStopSolutionImg from '../../../../assets/images/one-stop-solution.png';
import customerSatisfactionImg from '../../../../assets/images/customerSatisfaction.png';
import './index.scss';

const AboutUsBody = ({
    toggleId,
    setToggleId,
    isToggleOpen,
    setToggleState
}) => {
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
            imgSrc: customerSatisfactionImg,
            title: "Customer Satisfaction",
            description: `Our firm was formed with one goal; to ensure customer satisfaction. We are 
            Next Wanderlust always thrive to ensure you are not only satisfied but happy with the services
            provided. Our aim is not to build satisfied customers, our aim is to have loyal customers who 
            trust us with all their travel needs.`
        }
    ];

    const faqsList = [
        {
            id: "title1",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.`
        },
        {
            id: "title2",
            title: "Lorem ipsum dolor sit amet,?",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.`
        },
        {
            id: "title3",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.`
        },
        {
            id: "title4",
            title: "Lorem ipsum dolor sit amet,?",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.`
        }
    ];

    const onClickToggle = (id) => {
        toggleId[id] = !toggleId[id];
        setToggleId(toggleId);
        setToggleState(!isToggleOpen);
    }

    return (
        <div className="about-us-container w-100">
            <div className="pt-4 pl-5 pb-4 about-us-header">
                <h3 className="text-dark m-0"> About Next Wanderlust </h3>
                <div className="font-size-12">
                    <Link to="/">
                        <span className="text-dark"> Home </span>
                    </Link>
                    <span>{">"}</span>
                    <span className="text-secondary"> About Us </span>
                </div>
            </div>
            <div className="next-wanderlust-intro pt-5 text-center">
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
                        return (
                            <div className="text-center font-size-14 options-div pt-3 mb-5" key={index}>
                                <div className="h-50">
                                    <img src={imgSrc} alt={imgSrc ? title : null} className="h-100" />
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
                <div className="text-capitalize text-info font-weight-bold"> view all </div>
            </div>
            <div className="mb-5">
                {
                    faqsList.map(({ title, description, id }, index) => {
                        return (
                            <div key={index} onClick={_ => onClickToggle(id)}
                                className={toggleId[id] ? "faq-list px-5 py-3 bg-color" : "faq-list px-5 py-3"}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="title"> {title} </div>
                                    <button type="button" className="toggle-btn"> 
                                        { toggleId[id] ? "-" : "+"}
                                    </button>
                                </div>
                                <div className={toggleId[id] ? "display-block pb-3 text-secondary" : "hide-block"}>
                                    {description}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
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

export default AboutUsBody;
