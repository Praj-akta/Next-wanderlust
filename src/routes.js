import React, { useState} from 'react';
import Home from '../src/screens/Home';
import About from '../src/screens/AboutUs';
import NavigationBar from '../src/helpers/NavigationBar'
import { Route, Switch } from 'react-router-dom';

export default function Main (){
    const [isMenuOpen, setMenuState] = useState(false);
        return( 
            <div className='home-page d-flex flex-row'>
                <NavigationBar setMenuState={setMenuState} isMenuOpen={isMenuOpen}/>
                <Switch>
                    <Route path = "/" render = {props => {
                        return <Home {...props}/>
                    }} exact />
                    <Route path = "/about" render = {props => {
                        return <About {...props}/>
                    }} exact />
                </Switch>
            </div>
        );
}   