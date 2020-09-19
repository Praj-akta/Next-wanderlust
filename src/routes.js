import React, { useState } from 'react';
import Home from '../src/screens/Home';
import About from '../src/screens/AboutUs';
import Details from '../src/screens/Details';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../src/helpers/NavigationBar';
import TourDestinations from '../src/screens/TourDestinations';

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
            <Switch>
                <Route path="/" render={props => {
                    return <Home {...props}
                        onClickKnowMore={onClickKnowMore} />
                }} exact />
                <Route path="/about" render={props => {
                    return <About {...props} />
                }} exact />
                <Route path="/details" render={props => {
                    return <Details {...props} 
                        isKnowMoreClicked={isKnowMoreClicked}/>
                }} exact />
                <Route path="/tourDestinations" render={props => {
                    return <TourDestinations {...props} />
                }} exact />
            </Switch>
        </div>
    );
}   