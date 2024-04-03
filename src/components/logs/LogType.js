import React from 'react';

const LogType = ({ type }) => {
  const typeColor = {
    info: 'blue',
    warning: 'orange',
    error: 'red',
    success: 'green'
  };

  return <span style={{ color: typeColor[type] }}>{type}</span>;
};

export default LogType;
