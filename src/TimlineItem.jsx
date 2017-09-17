import React from 'react';
import PropTypes from 'prop-types';

/**
 * @usage 
 * <TimlineItem time={time} text={text} />
 */
function TimlineItem({time, text}) {
  return (
    <li>
      <i className="fa" />
      <div className="timeline-item">
        <span className="time">
          <i className="fa fa-clock-o" /> {time}
        </span>
        <div className="timeline-header">
          {text}
        </div>
      </div>
    </li>
  );
}

TimlineItem.defaultProps = {};

TimlineItem.propTypes = {
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TimlineItem;
