import React from 'react';
import hotelsImg from '../../../../assets/images/hotel.png';
import divingImg from '../../../../assets/images/diving.png';
import breakfastImg from '../../../../assets/images/breakfast.png';
import portBlairImg from '../../../../assets/images/portBlair.png';
import './index.scss';

const DetailsTab = () => {
    const facilitiesIncludedImages = [
        {
            imgSrc: hotelsImg,
            caption: "Hotel"
        }, {
            imgSrc: breakfastImg,
            caption: "Breakfast"
        }, {
            imgSrc: portBlairImg,
            caption: "Port Blair"
        }, {
            imgSrc: divingImg,
            caption: "Scuba Diving"
        }
    ];
    const estimatedExpenses = [
        {
            tableHeaders: ["Duration", "Budget Stay", "Standard Stay", "Premium Stay"],
            tableContent: [
                {
                    duration: "4D/3N",
                    budgetStay: "15,000",
                    standardStay: "17,500",
                    premiumStay: "20,000"
                },
                {
                    duration: "5D/4N",
                    budgetStay: "17,500",
                    standardStay: "20,000",
                    premiumStay: "23,000"
                },
                {
                    duration: "6D/5N",
                    budgetStay: "19,500",
                    standardStay: "22,500",
                    premiumStay: "26,000"
                },
                {
                    duration: "7D/6N",
                    budgetStay: "25,000",
                    standardStay: "27,500",
                    premiumStay: "32,000"
                },
                {
                    duration: "8D/7N",
                    budgetStay: "27,000",
                    standardStay: "30,000",
                    premiumStay: "35,000"
                }
            ]
        }
    ];

    return (
        <div className="details-tab">
            <div className="d-flex align-items-center header font-weight-normal pt-5 pb-1">
                <div className="mr-3">About Andaman</div>
                {/* <div className="line" /> */}
            </div>
            <div className="content text-secondary text-justify">
                Is an Indian group of islands in the Bay of Bengal.
                These roughly 300 islands are known for their palm-lined,
                white-sand beaches, mangroves and tropical rain-forests.
                Coral reefs supporting marine life such assharks and rays
                make for popular diving and snorkelling sites. Over the years,
                Andaman is turning out to be one of the famous tourist destinations.
            </div>
            <div className="facilities">
                <div className="d-flex align-items-center header font-weight-normal pt-5 pb-2">
                    <div className="mr-3">Facilities included </div>
                    {/* <div className="line" /> */}
                </div>
                <div className="d-flex">
                    {
                        facilitiesIncludedImages.map(({ imgSrc, caption }, index) => {
                            return (
                                <div className="text-center mr-5" key={index}>
                                    <img src={imgSrc} alt="facilities-images" />
                                    <div className="fig-captions pt-2"> {caption} </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="estimated-expenses">
                <div className="d-flex align-items-center header font-weight-normal pt-5 pb-3">
                    <div className="mr-3"> Estimated Expenses </div>
                    {/* <div className="line" /> */}
                </div>
                <div className="table">
                    <table border="1">
                        <thead className="text-center">
                            <tr>
                                {
                                    estimatedExpenses.map(({ tableHeaders }) => {
                                        return tableHeaders.map((value, index) => {
                                            return (
                                                <th key={index} className="w-25"> {value} </th>
                                            )
                                        })
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                estimatedExpenses.map(({ tableContent }) => {
                                    return tableContent.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td> {value.duration} </td>
                                                <td> {value.budgetStay} </td>
                                                <td> {value.standardStay} </td>
                                                <td> {value.premiumStay} </td>
                                            </tr>
                                        )
                                    })
                                })
                            }
                        </tbody>
                    </table>
                    <div className="text-secondary py-2 warning">
                        Prices are subjected to availablity.
                        Kindly confirm the price while booking. Thanks!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsTab;