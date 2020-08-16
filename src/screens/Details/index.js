import React, { useState } from 'react';
import Photos from './components/Photos';
import Location from './components/Location';
import Itinerary from './components/Itinerary';
import DetailsTab from './components/DetailsTab';
import filledStars from '../../assets/images/filled-stars.png';
import emptyStars from '../../assets/images/unfilled-stars.png';
import './index.scss';

const Details = () => {
    const [selectedTab, onClickTab] = useState(1);

    const tabs = [
        { id: 1, name: "Details" },
        { id: 2, name: "Itinerary" },
        { id: 3, name: "Location" },
        { id: 4, name: "Photos" }
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
        </div>
    )
}

export default Details;