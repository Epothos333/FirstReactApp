import React from 'react';
import ReactDOM from 'react-dom';
import tick from './timeStamp/timestamp.jsx'

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

setInterval(tick, 1000);
