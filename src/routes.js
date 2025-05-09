import React, { useState } from 'react';
import Home from '../src/screens/Home';
import Faqs from '../src/screens/Faqs';
import About from '../src/screens/AboutUs';
import Details from '../src/screens/Details';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../src/helpers/NavigationBar';
import TourDestinations from '../src/screens/TourDestinations';
import Footer from '../src/helpers/Footer'
import MobileHeader from '../src/helpers/MobileHeader'

export default function Main() {
    const [menuName, setMenuName] = useState("");
    const [isMenuOpen, setMenuState] = useState(false);
    const [isKnowMoreClicked, onClickKnowMore] = useState(false);

    return (
        <div className='home-page d-flex flex-row'>
            <NavigationBar
                menuName={menuName}
                isMenuOpen={isMenuOpen}
                setMenuName={setMenuName}
                setMenuState={setMenuState}
                onClickKnowMore={onClickKnowMore}
                isKnowMoreClicked={isKnowMoreClicked}
            />
            <MobileHeader 
                menuName={menuName}
                isMenuOpen={isMenuOpen}
                setMenuName={setMenuName}
                setMenuState={setMenuState}
                onClickKnowMore={onClickKnowMore}
                isKnowMoreClicked={isKnowMoreClicked}
            />
            <Switch>
                <Route path="/" render={props => {
                    return <Home {...props}
                        onClickKnowMore={onClickKnowMore} />
                }} exact />
                <Route path="/about" render={props => {
                    return <About {...props} />
                }} exact />
                <Route path="/details" render={props => {
                    return <Details {...props} />
                }} exact />
                <Route path="/tourDestinations" render={props => {
                    return <TourDestinations {...props} />
                }} exact />
                <Route path="/faqs" render={props => {
                    return <Faqs {...props} />
                }} exact />
            </Switch>
            <Footer
                isMenuOpen={isMenuOpen}
                setMenuName={setMenuName}
                setMenuState={setMenuState}
            />
        </div>
    );
}   