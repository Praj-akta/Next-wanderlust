import React from 'react';
import Button from '../Button';
import './index.scss';

const SendEnquiry = ({onClickMenuIcon}) => {
    return(
        <div className = "menuBar d-flex flex-column justify-content-center shadow enquiry-form">
            {/*  */}
            <div className="review-form-container send-enquiry-container">
                <div className="send-enquiry leave-a-review">
                    <div className="send-enquiry__header">
                        <h3 className="text-uppercase pt-2"> Send Enquiry</h3>
                        <div className='icon-cross enquiry-icons' onClick={e=> onClickMenuIcon()}></div>
                    </div>
                    
                    <div className="leave-a-review__form pt-5">
                        <div className="form-fields">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-fields">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="form-fields">
                            <label>Message</label>
                            <textarea />
                        </div>
                        <div className="text-center submit-btn">
                            <Button type="dark" title="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SendEnquiry;