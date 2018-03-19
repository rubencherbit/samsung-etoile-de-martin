// React - ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Register from './components/Register';
import NotFound from './components/NotFound';
// Import CSS reset and Global Styles
import './global-styles';

/**
 * 
 */
ReactDOM.render(
    <Router>
        <div className="row">
            <Header />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/register' component={ Register } />
                <Route exact path='/quiz' component={ Quiz } />
                <Route exact path='/result' component={ Result } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    </Router>
    , document.getElementById('react')
);
