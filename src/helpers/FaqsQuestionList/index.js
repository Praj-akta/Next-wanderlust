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
