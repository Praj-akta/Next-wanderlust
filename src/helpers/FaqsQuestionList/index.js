import React, {useState} from 'react';
import './index.scss';

const FaqsQuestionList = () => {
    const [toggleId, setToggleId] = useState({
        title1: false, title2: false, title3: false, title4: false
    });
    const [isToggleOpen, setToggleState] = useState(false);

    const faqsList = [
        {
            id: "title1",
            title: "Do your tours include international airfare?",
            description: `Travellers arrive from all over India to begin our tours and it is not possible to include international airfare in our prices. We would be happy to help you arrange flights. Just ask for an air quote when making your booking.`
        },
        {
            id: "title2",
            title: "Can you help arrange my travel visas?",
            description: `Requirements for travel visas vary widely depending on your nationality and your destination. Although we are unable to arrange visas on your behalf. If you do require a visa you can arrange them yourself or use the services of a travel agent or visa processing company.`
        },
        {
            id: "title3",
            title: "What is the most appropriate type of luggage to bring?",
            description: `We strongly recommend bringing a backpack or duffel bag, as suitcases can be cumbersome and difficult to store in buses, under seats, etc.. Keep in mind that you will normally have to carry your own luggage on and off buses and trains and up and down hotel staircases. Suitcases with wheels may not work well on dirt or cobblestone roads.`
        },
        {
            id: "title4",
            title: "What clothing should I pack for one of your adventures?",
            description: `We always recommend packing as light as possible however the specific requirements for your tour will vary widely depending on where and when you are travelling. Our ‘Trip Details’ document includes a suggested packing list and these can be downloaded from each individual trip summary page. The checklist is tour specific and based upon the experience of our ground staff.`
        }
    ];
    const onClickToggle = (id) => {
        toggleId[id] = !toggleId[id];
        setToggleId(toggleId);
        setToggleState(!isToggleOpen);
    }

    return (
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
                            <div className={toggleId[id] 
                                ? "display-block pb-3 text-secondary" : "hide-block"}>
                                {description}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default FaqsQuestionList;
