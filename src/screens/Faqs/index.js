import React from 'react';
import PageHeader from '../../helpers/PageHeader';
import Breadcrumbs from '../../helpers/Breadcrumbs';
import FaqsQuestionList from '../../helpers/FaqsQuestionList';
import './index.scss';

const Faqs = () => {
    return (
        <div className="page-container w-100">
            <Breadcrumbs title="FAQ`s" routeName="FAQ`s" />
            <div className="text-center">
                <PageHeader title="faq's"/>
            </div>
            <FaqsQuestionList />
        </div>
    )
}

export default Faqs;