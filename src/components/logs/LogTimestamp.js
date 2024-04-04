import React from 'react';
import PropTypes from 'prop-types'


const LogTimestamp = ({ timestamp }) => {
  return <span>{new Date(timestamp).toLocaleTimeString()}</span>;
};

LogTimestamp.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default LogTimestamp;
