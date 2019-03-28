import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './about';
import Navigation from './nav';
import Footer from './footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navigation />, document.getElementById('nav'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
