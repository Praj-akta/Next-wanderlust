import React, { Component } from 'react';
import Home from '../src/screens/Home';
import About from '../src/screens/AboutUs';
import { Route, Switch } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return( 
            <Switch>  
                <Route path = "/" render = {props => {
                    return <Home {...props}/>
                }} exact />
                <Route path = "/about" render = {props => {
                    return <About {...props}/>
                }} exact />
            </Switch>      
        );
    }
}   