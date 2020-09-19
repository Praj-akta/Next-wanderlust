import React from 'react';
import './index.scss';

const PageHeader = ({ title }) => {
    return (
        <div className="display-1 text-uppercase pb-5 
            font-weight-bolder text-white bg-image">
            {title}
        </div>
    )
}

export default PageHeader;