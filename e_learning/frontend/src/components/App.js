import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link,Redirect,} from "react-router-dom";
import LoginSignup from './LoginSignup';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={LoginSignup}/>
                </Switch>
            </Router>
        );
    }
}

const appdiv = document.getElementById('app');
render(<App/>, appdiv);