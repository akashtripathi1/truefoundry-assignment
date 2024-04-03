import React from 'react';

const LogTimestamp = ({ timestamp }) => {
  return <span>{new Date(timestamp).toLocaleTimeString()}</span>;
};

export default LogTimestamp;
