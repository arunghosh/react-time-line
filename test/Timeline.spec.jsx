import React from 'react';
import {shallow} from 'enzyme';
import Timeline from '../src/Timeline';
import TimlineItem from '../src/TimlineItem';

test('The inputs should be equal to the length specified', () => {
  const events = [
    {ts: new Date().toISOString(), text: 'Event One'},
    {ts: new Date().toISOString(), text: 'Event two'},
  ];
  const timeline = shallow(<Timeline items={events}/>);
  expect(timeline.find(TimlineItem)).toHaveLength(2);
});
