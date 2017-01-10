import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route , hashHistory} from 'react-router';

//My components
import Home from './components/Home.jsx';

let app = document.getElementById('app');

ReactDOM.render(
    <div id="outer-container" style={ { height: '100%' } }>
        <main id="page-wrap">
            <Router history={hashHistory}>
                <Route path="/" component={Home}/>
            </Router>
        </main>
    </div>
    , app);