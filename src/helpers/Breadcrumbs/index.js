import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Breadcrumbs({ title, routeName }) {
    return (
        <div className="breadcrumbs-container">
            <h3 className="title text-dark m-0"> {title} </h3>
            <div className="font-size-12">
                <Link to="/">
                    <span className="link"> Home </span>
                </Link>
                <span>{">"}</span>
                <span className="text-secondary"> {routeName} </span>
            </div>
        </div>
    )
}