import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Drivers from './Drivers';
import Messages from './Messages';
import Passengers from './Passengers';
import Reviews from './Reviews';
import Rides from './Rides';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Drivers />
    <Messages />
    <Passengers />
    <Reviews />
    <Rides />





  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
