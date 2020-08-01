import React, { Component } from 'react';
import Home from '../src/screens/Home';
import { Route, Switch } from 'react-router-dom';
// import Preview from '../src/screens/Preview';
// import Dashboard from '../src/screens/Dashboard';

export default class Main extends Component {
    render() {
        return( 
            <Switch>  
                <Route path = "/" render = {props => {
                    return <Home {...props}/>
                }} exact />
                {/* <Route path = "/menus/:menuId/sub-menu/:subMenuId/children/:childrenId/:viewOption" render = {props => {
                    return <Dashboard {...props}/>
                }} />
                <Route path = "/menus/:menuId/sub-menu/:subMenuId/:viewOption" render = {props => {
                    return <Dashboard {...props}/>
                }} />
                <Route path = "/preview/:previewId/:viewOption" render = {props => {
                    return <Preview {...props}/>
                }} /> */}
            </Switch>      
        );
    }
}   