import React, { useState } from 'react';
import Photos from './components/Photos';
import Button from '../../helpers/Button';
import Location from './components/Location';
import Itinerary from './components/Itinerary';
import DetailsTab from './components/DetailsTab';
import RatingStars from '../../helpers/RatingStars';
import reviewerIcon from '../../assets/images/logo.png';
import filledStars from '../../assets/images/filled-stars.png';
import emptyStars from '../../assets/images/unfilled-stars.png';
import './index.scss';

const Details = () => {
    const [selectedTab, onClickTab] = useState(1);
    const [formToggle, onChangeFormToggle] = useState(false);

    const tabs = [
        { id: 1, name: "Details" },
        { id: 2, name: "Itinerary" },
        { id: 3, name: "Location" },
        { id: 4, name: "Photos" }
    ];
    const customerReviews = [
        {
            id: 1,
            icon: reviewerIcon,
            reviewDescription: `All I can say about my trip to Tarkarli is 
                “AMAZING from start to finish”. The arrangements, the sights, 
                the sounds (of the ocean), the photography, the team, the hotel, 
                last but not the least the food.`,
            reviewerName: `Alex D'souza`,
            location: "Thane, Maharashtra"
        },
        {
            id: 2,
            icon: reviewerIcon,
            reviewDescription: `All I can say about my trip to Tarkarli is 
                “AMAZING from start to finish”. The arrangements, the sights, 
                the sounds (of the ocean), the photography, the team, the hotel, 
                last but not the least the food.`,
            reviewerName: `Alex D'souza`,
            location: "Thane, Maharashtra"
        }
    ];
    const similarTours = [
        {
            id: 1,
            noOfDays: 8,
            viewMoreButton: false,
            title: "Bhutan: The Land of Happiness",
            description: `Bhutan Considered to be one of the happiest
                countries in the world, it is the...`
        },
        {
            id: 2,
            noOfDays: 4,
            viewMoreButton: true,
            title: "Tarkarli: Sea Lover's Paradise"
        },
        {
            id: 3,
            noOfDays: 2,
            viewMoreButton: true,
            title: "Bhandardara: Camping Under Blanket of Stars"
        }
    ];

    const getSelectedTabComponent = (id) => {
        switch (id) {
            case 1:
                return <DetailsTab />
            case 2:
                return <Itinerary />
            case 3:
                return <Location />
            case 4:
                return <Photos />
            default:
                break;
        }
    }

    return (
        <div className="details-page w-100">
            <div className="px-5 py-4 details-page-header">
                <div className="d-flex justify-content-between">
                    <h3 className="text-dark m-0 heading"> India's Island Paradise </h3>
                    <h3 className="m-0"> &#8377; 15,000/ Person</h3>
                </div>
                <div className="mb-3 rating-stars">
                    <img src={filledStars} className="mr-2" alt="rating-stars" />
                    <img src={filledStars} className="mr-2" alt="rating-stars" />
                    <img src={filledStars} className="mr-2" alt="rating-stars" />
                    <img src={filledStars} className="mr-2" alt="rating-stars" />
                    <img src={emptyStars} alt="rating-stars" />
                </div>
                <div className="font-size-12">
                    <span className="text-dark"> Home </span>
                    <span>{">"}</span>
                    <span className="text-dark"> Tours </span>
                    <span>{">"}</span>
                    <span className="text-secondary"> Andaman - India's Island Paradise </span>
                </div>
            </div>
            <div className="mx-5">
                <div className="mt-5 d-flex justify-content-between">
                    <div className="tabs d-flex justify-content-around">
                        {
                            tabs.map(({ id, name }, index) => {
                                return (
                                    <div key={index} onClick={_ => onClickTab(id)}
                                        className={selectedTab === id ? "active tab" : "tab"}>
                                        {name}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button type="button" className="pdf-btn"> Download Pdf </button>
                </div>
                {
                    getSelectedTabComponent(selectedTab)
                }
            </div>
            <div className="begin-your-journey text-capitalize"
                onClick={_ => onChangeFormToggle(!formToggle)}>
                begin your journey
            </div>
            {
                formToggle
                    ? (
                        <React.Fragment>
                            <div className="form-toggle-btn">
                                <span className="icon-clear"
                                    onClick={_ => onChangeFormToggle(!formToggle)} />
                            </div>
                            <div className="form pl-4 py-5">
                                <div className="form-fields mb-5">
                                    <label> Name </label>
                                    <input type="text" />
                                </div>
                                <div className="form-fields mb-5">
                                    <label> Email </label>
                                    <input type="text" />
                                </div>
                                <div className="form-fields mb-5">
                                    <label> No of Person </label>
                                    <input type="text" />
                                </div>
                                <div className="form-fields mb-5">
                                    <label> Phone </label>
                                    <input type="phone" />
                                </div>
                                <div className="form-fields mb-5">
                                    <label> Departure Month </label>
                                    <input type="text" />
                                </div>
                                <div className="text-center">
                                    <Button title="Book Now" type="dark" className="book-now-btn" />
                                </div>
                            </div>
                        </React.Fragment>
                    ) : null
            }
            <div className="review-form-container my-5">
                <div className="opacity"></div>
                <div className="leave-a-review py-4 px-5">
                    <h3 className="text-uppercase pt-2"> leave a review </h3>
                    <div className="stars">
                        <RatingStars />
                    </div>
                    <div className="leave-a-review__form pt-4">
                        <div className="form-fields">
                            <label>Your Review</label>
                            <textarea />
                        </div>
                        <div className="form-fields">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-fields">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span className="pl-2">
                                Save my name, email, and website in this browser for the
                                next time I comment.
                            </span>
                        </div>
                        <div className="text-center mt-4">
                            <Button type="dark" title="Submit" className="submit-btn" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-reviews-container px-5 pb-5">
                <div className="d-flex align-items-center header font-weight-normal">
                    <div className="mr-3">Customers Reviews</div>
                    <div className="line" />
                </div>
                <div className="d-flex reviews-list text-center mt-5">
                    {
                        customerReviews.map((value, index) => {
                            return (
                                <div key={index} className="review px-5 py-4">
                                    <img src={value.icon} alt="reviewer-icon" />
                                    <p className="text-secondary pb-3 review-description">
                                        {value.reviewDescription}
                                    </p>
                                    <p>{value.reviewerName}</p>
                                    <p className="text-secondary">
                                        {value.location}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="similar-tours-container pb-5">
                <div className="d-flex align-items-center header font-weight-normal px-5">
                    <div className="mr-3">Similar Tours</div>
                    <div className="line" />
                </div>
                <div className="similar-tours-image mt-3">
                    <div className="similar-tours-image__opacity"></div>
                    <div className="d-flex">
                        {
                            similarTours.map(({ noOfDays, title, description, viewMoreButton }, index) => {
                                return (
                                    <div className="similar-tours-image__text p-5" key={index}>
                                        <p className="similar-tours-image__text__days"> 
                                            {noOfDays} days 
                                        </p>
                                        <p className="similar-tours-image__text__title">
                                            {title}
                                        </p>
                                        {
                                            viewMoreButton 
                                            ? (
                                                <p className="text-capitalize view-more">
                                                    view more 
                                                </p>
                                            )
                                            : (
                                                <p className="similar-tours-image__text__description">
                                                    {description}
                                                </p>
                                            )
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;