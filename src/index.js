import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './pollyfills';
import './vendor';
import AppComponent from './app/app';


ReactDOM.render(
    <AppComponent />,
    document.getElementById('root')
);