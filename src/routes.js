import React, { useState} from 'react';
import Home from '../src/screens/Home';
import About from '../src/screens/AboutUs';
import Details from '../src/screens/Details';
import NavigationBar from '../src/helpers/NavigationBar'
import { Route, Switch } from 'react-router-dom';

export default function Main (){
    const [menuName, setMenuName] = useState("");
    const [isMenuOpen, setMenuState] = useState(false);
        return( 
            <div className='home-page d-flex flex-row'>
                <NavigationBar 
                    menuName={menuName}
                    isMenuOpen={isMenuOpen}
                    setMenuName={setMenuName}
                    setMenuState={setMenuState} 
                />
                <Switch>
                    <Route path = "/" render = {props => {
                        return <Home {...props}/>
                    }} exact />
                    <Route path = "/about" render = {props => {
                        return <About {...props}/>
                    }} exact />
                    <Route path = "/details" render = {props => {
                        return <Details {...props}/>
                    }} exact />
                </Switch>
            </div>
        );
}   