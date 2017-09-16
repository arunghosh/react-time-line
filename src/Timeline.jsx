import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

function Timeline({items}) {
  const activities = {};
  items.forEach(({ts, text}, index) => {
      const date = moment(ts);
      const dateStr = date.format('DD MMM YYYY');
      const list = activities[dateStr] || [];
      list.push({
        time: date.format('hh:mm'),
        text,
        key: index,
      });
      activities[dateStr] = list;
    });
  const dates = Object.keys(activities);
  return (
    <div className="p-10 timeline-ctnr">
      {dates.map(d =>
        <ul className="timeline" key={d}>
          <li key={d} className="time-label">
            <span>
              {d}
            </span>
          </li>
          {activities[d].map(({time, text, key}) =>
            <li key={key}>
              <i className="fa" />
              <div className="timeline-item">
                <span className="time">
                  <i className="fa fa-clock-o" /> {time}
                </span>
                <div className="timeline-header">
                  {text}
                </div>
              </div>
            </li>,
          )}
        </ul>,
      )}
    </div>
  );
}

Timeline.defaultProps = {};

Timeline.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Timeline;


