import React from 'react';
import day1Img from '../../../../assets/images/portBlairDay1.png';
import day2Img from '../../../../assets/images/rossIslandDay2.png';
import day3Img from '../../../../assets/images/havelockIslandDay3.png';
import day4Img from '../../../../assets/images/neilIslandDay4.png';
import day5Img from '../../../../assets/images/tapuBeachDay5.png';
import day6Img from '../../../../assets/images/baratangIslandDay6.png';
import day7Img from '../../../../assets/images/jollyIslandDay7.png';
import day8Img from '../../../../assets/images/airportDay8.png';
import './index.scss';

const Itinerary = () => {
    const itinerarys = [
        {
            id: 1,
            align: "left",
            title: "Day 1",
            imgSrc: day1Img,
            imgText: "Port Blair",
            subTitle: "Arrival & Stay at",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 2,
            align: "right",
            title: "Day 2",
            imgSrc: day2Img,
            imgText: "Ross Island",
            subTitle: "Port Blair to (Ross Island) & North Bay Island",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 3,
            align: "left",
            title: "Day 3",
            imgSrc: day3Img,
            imgText: "Havelock Island",
            subTitle: "Port Blair to Swaraj Dweep",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 4,
            align: "right",
            title: "Day 4",
            imgSrc: day4Img,
            imgClassName: "day4",
            imgText: "Neil Island",
            subTitle: "Swaraj Dweep to Shaheed Dweep",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 5,
            align: "left",
            title: "Day 5",
            imgSrc: day5Img,
            imgClassName: "day5",
            imgText: "Tapu beach",
            subTitle: "Port Blair to Port Blair City Tour",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 6,
            align: "right",
            title: "Day 6",
            imgSrc: day6Img,
            imgClassName: "day6",
            imgText: "Baratang Island",
            subTitle: "Swaraj Dweep to Shaheed Dweep",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 7,
            align: "left",
            title: "Day 7",
            imgSrc: day7Img,
            imgClassName: "day7",
            imgText: "jolly buoy islands",
            subTitle: "Port Blair to",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        },
        {
            id: 8,
            align: "right",
            title: "Day 8",
            imgSrc: day8Img,
            imgText: "departure",
            imgClassName: "day8",
            subTitle: "Swaraj Dweep to Shaheed Dweep",
            description: [
                "Arrival at Port Blair Airport",
                "Transfer to your hotel",
                `Post lunch, start the tour of places in and around Port Blair covering
                Rajiv Gandhi Water sports, Corbyn’s Cove Beach,
                Light & Sound show, in Cellular Jail`,
                "Night Stay at Port Blair"
            ]
        }
    ];

    return (
        <div className="mt-5">
            {
                itinerarys.map((value, index) => {
                    let modifiedClass = value.align === "right" 
                        ? "right-class pr-3" : "left-class";
                    let contentClass = value.align === "right" 
                        ? "text-right" : "text-left w-75 ml-5";
                    return (
                        <div className={`itinerary-container pb-4 ${modifiedClass}`} key={index}>
                            <div className={`itinerary-heading`}>
                                <div className="title"> {value.title} </div>
                                <div className="text-secondary pt-3 px-2 sub-title"> 
                                    {value.subTitle} 
                                </div> 
                                <div className="text-uppercase img-text font-weight-bold pt-1 px-1"> 
                                    {value.imgText} 
                                </div>
                                <img src={value.imgSrc} alt="images" className={value.imgClassName}/>
                            </div>
                            <div className={`itinerary-content ml-5 pt-4`}>
                            {
                                value.description.map((text, index) => {
                                    return (
                                        <div className={`text pb-3 ${contentClass}`} key={index}> 
                                            {text} 
                                        </div>
                                    );
                                })
                            }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default Itinerary;