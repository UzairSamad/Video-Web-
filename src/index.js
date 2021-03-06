import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router";
import { createBrowserHistory } from "history"


const history = createBrowserHistory()
console.log('history',history);

const location = history.location

console.log('location here',location);


ReactDOM.render( <Router history={history} location={location}>
<App /> </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
