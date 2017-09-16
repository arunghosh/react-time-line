import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from '../src';

ReactDOM.render(
  <Timeline items={[ { ts: new Date().toISOString(), text: 'Something happened' } ]} />,
  document.getElementById('app')
);


