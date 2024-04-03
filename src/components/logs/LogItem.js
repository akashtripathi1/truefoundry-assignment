import React from 'react';

const LogItem = ({ log, toggleExpand, ...props }) => {
  return (
    <div className={`log-item ${log.expanded ? 'expanded' : ''}`} onClick={toggleExpand} {...props}>
      <div className="log-timestamp">{new Date(log.timestamp).toLocaleTimeString()}</div>
      <div className={`log-message ${log.expanded ? '' : 'single-line'}`}>{log.message}</div>
    </div>
  );
};

export default LogItem;
