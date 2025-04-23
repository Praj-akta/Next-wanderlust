import React from 'react';
import Button from '../../helpers/Button';
import PageHeader from '../../helpers/PageHeader';
import RatingStars from '../../helpers/RatingStars';
import Breadcrumbs from '../../helpers/Breadcrumbs';
import bhutanImg from '../../assets/images/bhutan.png';
import andamanImg from '../../assets/images/banner_.png';
import tarkarliImg from '../../assets/images/tarkarli.png';
import bhandardaraImg from '../../assets/images/bhandardara.png';
import './index.scss';

const TourDestination = ({history}) => {
    const destinations = [
        {
            id: 1,
            imgSrc: bhutanImg,
            actualPrice: "30,000",
            discountedPrice: "19,000",
            title: "Bhutan: The Land of Happiness",
            description: `Bhutan Considered to be one of the 
                happiest countries in the world, it is the...`
        },
        {
            id: 2,
            imgSrc: bhandardaraImg,
            actualPrice: "1,800",
            discountedPrice: "1,000",
            title: "Bhandardara: Camping Under Blanket of Stars",
            description: `Bhandardara is a beautiful yet less known 
                hill station near Mumbai in Sahyadri hill range...`
        },
        {
            id: 3,
            imgSrc: tarkarliImg,
            actualPrice: "12,000",
            discountedPrice: "9,999",
            title: "Tarkarli: Sea Lover’s Paradise",
            description: `Tarkarli is a village in the western 
                Indian state of Maharashtra. Tarkarli is known for...`
        },
        {
            id: 4,
            imgSrc: andamanImg,
            actualPrice: "40,000",
            discountedPrice: "15,000",
            title: "Andaman – India’s Island Paradise",
            description: `Andaman Islands is an Indian group of 
                islands in the Bay of Bengal. These roughly...`
        }
    ]

    return (
        <div className="page-container tour-destinations-container w-100">
            <Breadcrumbs title="Tour Destinations" routeName="Tour Destinations" />
            <div className="text-center">
                <PageHeader title="tour destinations"/>
            </div>
            <div className="desktop-filters mb-5 mx-5">
                <div className="dropdown">
                    <select>
                        <option selected disabled>Destination</option>
                        <option>Demo</option>
                        <option>Demo</option>
                        <option>Demo</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select>
                        <option selected disabled>Select date</option>
                        <option>Demo</option>
                        <option>Demo</option>
                        <option>Demo</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select>
                        <option selected disabled>Price range</option>
                        <option>Demo</option>
                        <option>Demo</option>
                        <option>Demo</option>
                    </select>
                </div>
                <div className="d-flex align-items-center">
                    <input 
                        type="text" 
                        className="search"
                        placeholder="Search by keyword" />
                    <div className="icon-search" />
                </div>
            </div>
            <div className="mobile-filter-list">
                <div className="dropdown">
                    <select>
                        <option selected disabled>Destination</option>
                        <option>Demo</option>
                        <option>Demo</option>
                        <option>Demo</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select>
                        <option selected disabled>Select date</option>
                        <option>Demo</option>
                        <option>Demo</option>
                        <option>Demo</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select>
                        <option selected disabled>Price range</option>
                        <option>Demo</option>
                        <option>Demo</option>
                        <option>Demo</option>
                    </select>
                </div>
                <div className="d-flex align-items-center position-relative">
                    <div className="icon-search" />
                    <input 
                        type="text" 
                        className="search"
                        placeholder="Search by keyword" />
                </div>
            </div>
            <div className="destinations-list-container d-flex flex-wrap justify-content-center mt-3">
            {
                destinations.map((item, index) => {
                    return (
                        <div className="destinations-list" key={index}>
                            <img src={item.imgSrc} alt="bg-img" className="destination-img" />
                            <div className="destination-description">
                                <p className="actualPrice">
                                    &#8377;{item.actualPrice}
                                </p>
                                <div className="d-flex justify-content-between pb-4">
                                    <div className="discountedPrice"> 
                                        &#8377; {item.discountedPrice} 
                                    </div>
                                    <RatingStars selectedRating={4}/>
                                </div>
                                <div className="title w-75">{item.title}</div>
                                <div className="description w-75">{item.description}</div>
                            </div>
                            <Button title="view detail" className="view-detail-btn" onClick={_ => history.push('/details')} />
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default TourDestination;