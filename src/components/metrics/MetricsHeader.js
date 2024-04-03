import React, { useCallback } from "react";
// import DateTimeRange from './DateTimeRange'
import { useTimeRangeContext } from "../../context/TimeRangeContext";

const MetricsHeader = () => {
  const { selectedTimeRange } = useTimeRangeContext();

  const parseTimeRange = useCallback((range) => {
      const now = new Date();
      switch (range) {
          case '5m':
              return new Date(now.getTime() - 5 * 60000);
          case '15m':
              return new Date(now.getTime() - 15 * 60000);
          case '30m':
              return new Date(now.getTime() - 30 * 60000);
          case '1h':
              return new Date(now.getTime() - 60 * 60000);
          case '3h':
              return new Date(now.getTime() - 3 * 60 * 60000);
          case '6h':
              return new Date(now.getTime() - 6 * 60 * 60000);
          case '12h':
              return new Date(now.getTime() - 12 * 60 * 60000);
          case '24h':
              return new Date(now.getTime() - 24 * 60 * 60000);
          default:
              return now;
      }
  }, []);

  const startTime = parseTimeRange(selectedTimeRange);

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const formatDateTime = (dateTime) => {
      return `${padZero(dateTime.getDate())}/${padZero(dateTime.getMonth() + 1)}/${dateTime.getFullYear()} ${padZero(dateTime.getHours())}:${padZero(dateTime.getMinutes())}`;
  };

  const formattedCurrentDateTime = formatDateTime(new Date());
  const formattedStartTime = formatDateTime(startTime);

    return (
        <div className="metrics-header" style={{display: 'flex', alignItems: 'center'}}>
            <h1 style={{display: 'inline-block', marginRight: '10px'}}>Metrics</h1> 
            <p style={{display: 'inline-block', marginRight: '10px', marginBottom: '5px', padding: '0'}}>{formattedStartTime} {String.fromCharCode(8594)}</p>
            <p style={{display: 'inline-block', marginRight: '10px', marginBottom: '5px', padding: '0'}}>{formattedCurrentDateTime}</p>
            {/* <DateTimeRange /> */}
        </div>

    );
}

export default MetricsHeader

