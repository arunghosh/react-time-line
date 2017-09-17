import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from '../src';

const events = [
  {ts: new Date().toISOString(), text: 'Logged in'},
  {ts: new Date().toISOString(), text: 'Clicked Home Page'},
  {ts: new Date().toISOString(), text: 'Edited Profile'},
];

ReactDOM.render(<Timeline items={events} />, document.getElementById('app'));
