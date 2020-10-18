import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../helpers/PageHeader';
import FaqsQuestionList from '../../helpers/FaqsQuestionList';
import './index.scss';

const Faqs = () => {
    return (
        <div className="page-container w-100">
            <div className="pt-4 pl-5 pb-4 about-us-header">
                <h3 className="text-dark m-0"> FAQ's </h3>
                <div className="font-size-12">
                    <Link to="/">
                        <span className="text-dark font-weight-bold"> Home </span>
                    </Link>
                    <span>{">"}</span>
                    <span className="text-secondary"> FAQ's </span>
                </div>
            </div>
            <div className="text-center mt-5">
                <PageHeader title="faq's"/>
            </div>
            <FaqsQuestionList />
        </div>
    )
}

export default Faqs;